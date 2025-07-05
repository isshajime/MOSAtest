import React, { useRef } from 'react';

function Title() {
    const logoRef = useRef(null);

    return (
        <div>
            <img ref={logoRef} src="/public/CoinWatcherLogo.png" alt="CoinWatcher Logo" style={{ width: '200px', height: 'auto' }} />
            <h1>CoinWatcher</h1>
            <h2>Track every coin, watch your budget with CoinWatcher</h2>
        </div>
    );
  }

export default Title;
  