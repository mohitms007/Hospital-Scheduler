import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'



const Home: NextPage = () => {
  // const { user } = useUser()

  return (
    <div className={styles.container}>
  
      This is the hello page..
    </div>
  )
}

export default withPageAuthRequired(Home)
