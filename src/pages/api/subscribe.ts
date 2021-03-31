import { NextAuthRequest, NextAuthResponse } from "next-auth";
import { getSession } from "next-auth/client";
import { stripe } from "../../services/stripe";
import { fauna } from '../../services/fauna'
import { query as q } from 'faunadb'

interface User {
  ref: {
    id: string;
  }
  data: { 
    stripe_customer_id: string;
  }
}

export default async(req: NextAuthRequest, res: NextAuthResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const user = await fauna.query<User>(
      q.Get( // pegar
        q.Match( // que combine
          q.Index('user_by_email'), // o indice do email
          q.Casefold(session.user.email) // com o indice do email do usuário da sessão
        )
      )
    )

    let customerId = user.data.stripe_customer_id // pega a variável salva do banco

    if (!customerId) { // se não existir no banco
      const stripeCustomer = await stripe.customers.create({ //cria o cadastro
        email: session.user.email,
        // metadata
      })



      await fauna.query( // salva no banco
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          { 
            data: {
              stripe_customer_id: stripeCustomer.id,
            }
          }
        )
      )

      customerId = stripeCustomer.id;
    }

    
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1Ia4vvCr5BOR2EQEp03i1jeg', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })
    return res.status(200).json({ sessionId: stripeCheckoutSession.id })
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}