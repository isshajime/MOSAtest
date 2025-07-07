import './Header.css';
import React, { useRef } from 'react';

export default function Header() {

    const logoRef = useRef(null);
    return (
        <header className="header">
        <div className="logo"><img ref={logoRef} src="/public/CoinWatcherLogo.png" alt="CoinWatcher Logo" style={{ width: '100px', height: 'auto' }} /></div>
        <nav className="nav">
            <div className="dashboard-nav-item">Dashboard</div>
            <div className="analysis-nav-item">Analysis</div>
            <div className="profile-nav-item">Profile</div>
        </nav>
        </header>
    );
}


// export default Header;