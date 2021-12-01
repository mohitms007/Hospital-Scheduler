import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {CallbackOptions, handleAuth, handleCallback, useUser} from '@auth0/nextjs-auth0'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import link from 'next/link'

const Home: NextPage = () => {
    const {user, error, isLoading} = useUser()


    useEffect(() => {

    }, [user])

    const createUser  = () => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        };
        fetch('http://localhost:3001/api/users', requestOptions)
            .then(response => response.json())
        // .then(data => console.log(data));
    }

    const login = () => {
        window.location.assign('/api/auth/login')
    }
    const logout = () => {
        window.location.assign('/api/auth/logout')
    }

    return (
        <div className={styles.container}>
            <nav>
                {!user && <div onClick={login}>Login </div>}
            </nav>

            {user && (<div onClick={() => window.location.assign('/api/auth/logout')}> Logout </div>)}
            content goes here.
            <Link href="/hello">
                <a>Next Page</a>
            </Link>
        </div>
    )

}


export default Home;
