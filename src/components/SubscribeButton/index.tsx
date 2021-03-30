import { signIn, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

interface subscribeButtonProps {
  priceId: string,
}

export function SubscribeButton({ priceId }: subscribeButtonProps) {
  const [session] = useSession();

  function handleSubscribe() {
    if(!session) { // se não estiver logado
      signIn('github') // chama a função para logar
      return;
    }

    // criação da checkout session
  }

  return(
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}