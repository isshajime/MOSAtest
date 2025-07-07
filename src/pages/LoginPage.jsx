import React from 'react';

function LoginPage() {
    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in...');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
