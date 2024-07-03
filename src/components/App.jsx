/* eslint-disable no-unused-vars */
// src/App.jsx

import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';
import Fb from './assets/fb.svg';
import Git from './assets/github.svg';
import Instagram from './assets/insta.svg'
import Linkedin from './assets/linkedin.svg'
import Twitter from './assets/twitter.svg'
import Phone from './assets/phone.svg'
import Email from './assets/gmail.svg'
// import Profile from './assets/baby.jpg'
import Pic from './assets/nuel.jpg'


function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Emmanuel Victor"
        title="Software Engineer"
        avatar= {Pic}
        email={
          <>
            <a href='gmail:emmanuelvictor1305@gmail.com' className="email"><img src={Email} alt="email" className="email_img" /></a>
          </>
          }
        // phone="123-456-7890"
        facebook= {
          <>
          <a href="https://www.facebook.com/NuelStixx13?mibextid=ZbWKwL" className="facebook_acct"><img src={Fb} alt='facebook' className="facebook_img" /></a>
          </>
        }
        twitter={
          <>
          <a href="https://x.com/Emmanue43756964" className="twitter_acct"><img src={Twitter} alt="twitter_acct" className="twitter_img" /></a>
          </>
        }
        instagram={
          <>
          <a href="https://www.instagram.com/nuelstixx_13?igsh=YjR5dGl1bjdrZHcy" className="ig_acct"><img src={Instagram} alt="ig" className="ig_img" /></a>
          </>
        }
        linkedin={
          <>
          <a href="https://www.linkedin.com/in/emmanuel-victor-285934209/#/" className="ln_acct"><img src={Linkedin} alt="ln" className="ln_img" /></a>
          </>
        }
        github={
          <>
          <a href="https://github.com/Nuelsti" className="github_acct"><img src={Git} alt="github" className="github_img" /></a>
          </>
        }
        phone={
          <>
          <a href='tel:091-241-63818' className="phone"><img src={Phone} alt="phoneNumber" className="phone_img" /></a>
          </>
        }
        
        description='Building and maintaining robust and scalable software systems, ensuring optimal performance, reliability, and security.'
      />
    </div>
  );
}

export default App;
