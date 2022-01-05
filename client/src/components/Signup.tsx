import React, { ReactEventHandler, useState, SyntheticEvent } from 'react'

export default function Signup(): JSX.Element {

    const [signinType, setSigninType] = useState('login');
    const [credentials, setCredentials] = useState({email: '', pswd: '', pswd2: ''});
    const [errors, setErrors] = useState({});

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = e.target as HTMLFormElement;
        setCredentials(prevCreds => {
            return {
                ...prevCreds,
                [name]: value
            }
        });
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

    }

    const validateInputs = (): boolean => {

        return false;
    }


    return (
        <div className="signup__wrapper">
            <h1>Chirrper - cheap Twitter knockoff</h1>
            <form action="" onSubmit={e => handleSubmit(e)}>
                <h2>Sign in using email and passport</h2>
                <label htmlFor="signin__input-email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={credentials.email}
                    onChange={handleInputChange}
                    id="signin__input-email"/>
                <label htmlFor="pssignin__input-pswdw">Password:</label>
                <input 
                    type="pswd" 
                    name="pswd" 
                    value={credentials.pswd}
                    onChange={handleInputChange}
                    id="signin__input-pswd"/>
            </form>
        </div>
    )
}
