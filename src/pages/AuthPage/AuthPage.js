// AuthPage.js
import { useState } from 'react';
import styles from './AuthPage.module.scss';
import Auth from '../../components/Auth/Auth';
import Logout from '../../components/Logout/Logout';

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <Auth />
            <Logout setUser={props.setUser}/>



        </main>
    )
}