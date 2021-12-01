import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function Login() {
    return (
        <div>
           
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired(Login)