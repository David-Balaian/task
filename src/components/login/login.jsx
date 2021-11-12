import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import styles from './login.module.scss'
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth/actions';
import { useSelector } from 'react-redux';
import { getError } from '../../store/auth/selectors';

export default function Login() {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const loginError = useSelector(getError)

    const state = useSelector(store => store)
    console.log(`state`, state)

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        dispatch(login({ userName, password }))
    }

    return (
        <div className={styles.loginContainer} >
            <div className={styles.wrapper}>
                <TextField
                    variant="outlined"
                    fullWidth
                    label='Username'
                    value={userName}
                    onChange={handleUserName}
                    error={!!loginError}
                    helperText={loginError}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    label='Password'
                    type='password'                    
                    value={password}
                    onChange={handlePassword}
                    error={!!loginError}
                    helperText={loginError}
                />
                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    size='large'
                    onClick={handleLogin}
                > Log in </Button>
            </div>
        </div>
    )
}
