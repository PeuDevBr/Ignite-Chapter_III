import { FaGithub } from 'react-icons/fa' // icone github
import { FiX } from 'react-icons/fi' // icone x

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? ( // se estiver logado
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      Diego Fernandes
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : ( // se não estiver logado
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign in with GitHub
    </button>
  )
}
