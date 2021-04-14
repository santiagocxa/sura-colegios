import React from 'react';
import '../assets/styles/logo.css';

function Logo() {
  return (
    <div className='Logo'>
      <a href='./'>
        <img
          src='https://videoscolegiosgv.s3.us-east-2.amazonaws.com/imagevideo/logoSura.png'
          alt='logo'
        />
      </a>
    </div>
  );
}

export default Logo;
