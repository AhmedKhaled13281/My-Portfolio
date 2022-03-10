import React from 'react'
import './social-contact.css'
import {SocialData} from '../../data/social.js'

const SocialContact = () => {
  const renderContacts = () => {
    return SocialData.map(data => {
      return (
        <a href={data.link} key={data.platform}>
            <div className="social-icon-div">
                <img src={data.icon} className="social-img" />
            </div>
        </a>
      )
    })
  }
  return(
    <div className="social-contact">
      {renderContacts()}
    </div>
  )
}

export default SocialContact
