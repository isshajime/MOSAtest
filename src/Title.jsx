import React, { useRef } from 'react';

function Title() {
    const logoRef = useRef(null);

    return (
        <div>
            <h1>CoinWatcher</h1>
            <h2>Track every coin, watch your budget with CoinWatcher</h2>
        </div>
    );
  }

export default Title;
  