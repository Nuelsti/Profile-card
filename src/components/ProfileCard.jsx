/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import './header.css'
// import BackgroundImage from '../public/background.svg'

const ProfileCard=  ({name, title, avatar, email, facebook, linkedin, instagram, twitter, github, phone, description}) => {
  return (
    <>
    <main className="profile_card">
      <div className="header-section">
       
        <img src={avatar} alt={`${name}'s avatar`} className="header_profile_photo" />
      </div>
      <section className="profile_head">
        
       
      </section>

      <section className="profile_body">
        <h1 className="profile_name">{name}</h1>
        <p className="profile_title">{title}</p>
        <p className="profile_email">{email}</p>
        <div className="profile_social">
          <div className="profile_fb">{facebook}</div>
          <div className="profile_twi">{twitter}</div>
          <div className="profile_ln">{linkedin}</div>
          <div className="profile_insta">{instagram}</div>
          <div className="profile_git">{github}</div>
        </div>
        <p className="profile_dest">{description}</p>
      </section>

      <footer className="profile_foll">
        <div className="profile_phone">{phone}</div>
        <div className="profile_btn">
          <button className="profile_foll_btn">Follow</button>
          <button className="profile_chat_btn">Message</button>
        </div>
      </footer>

    </main>

      
    </>
  )
}

export default ProfileCard
