import React, { useState, useEffect } from 'react';
import db from './db.json';
import { redirect } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();

        const user = db.users.find((u) => u.username === username && u.password === password);

        if (user) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = '/manage-product';
        }
    }, [isLoggedIn]);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>

                <br />

                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <br />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;