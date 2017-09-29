import React from 'react';

const Header = ({ onButtonClick }) => (
  <div style={{ background: '#222', color: '#fff', padding: 20 }}>
    <h1>Cats!</h1>
    <img src={`${process.env.PUBLIC_URL}/nyan.gif`} style={{ display: 'block', margin: '20px auto' }} />
    <button onClick={onButtonClick} style={{ padding: 10 }}>Get Cats!</button>
  </div>
);

export default Header;
