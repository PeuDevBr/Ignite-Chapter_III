import { FaGithub } from 'react-icons/fa' // icone github
import { FiX } from 'react-icons/fi' // icone x
import { signIn, signOut, useSession } from 'next-auth/client' // fazer autenticação/ verificar o login

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession() //verifica se está logado
  console.log(session)

  return session ? ( // se estiver logado
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => {signOut()}}
    >
      <FaGithub color="#04d361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : ( // se não estiver logado
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sign in with GitHub
    </button>
  )
}
