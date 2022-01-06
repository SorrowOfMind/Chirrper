import React, { useState } from 'react';

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
            {signinType === 'login' ?
            <form action="" onSubmit={e => handleSubmit(e)}>
                <h2>Sign in using email and passport</h2>
                <label htmlFor="signin__input-email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={credentials.email}
                    onChange={handleInputChange}
                    id="signin__input-email"/>
                <label htmlFor="pssignin__input-pswd">Password:</label>
                <input 
                    type="password" 
                    name="pswd" 
                    value={credentials.pswd}
                    onChange={handleInputChange}
                    id="signin__input-pswd"/>
            </form>
            : 
            <form action="" onSubmit={e => handleSubmit(e)}>
                <h2>Register using email and passport</h2>
                <label htmlFor="signin__input-email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={credentials.email}
                    onChange={handleInputChange}
                    id="signin__input-email"/>
                <label htmlFor="pssignin__input-pswd">Password:</label>
                <input 
                    type="password" 
                    name="pswd" 
                    value={credentials.pswd}
                    onChange={handleInputChange}
                    id="signin__input-pswd"/>
                <label htmlFor="pssignin__input-pswd2">Repeat Password:</label>
                <input 
                    type="password" 
                    name="pswd2" 
                    value={credentials.pswd2}
                    onChange={handleInputChange}
                    id="signin__input-pswd2"/>
            </form>
            }
        </div>
    )
}
