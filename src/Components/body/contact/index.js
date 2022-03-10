import React from 'react'
import './contact.css'
import Separator from '../common/separator/index';
import SocialContact from '../common/social-contact/index'
const Contact = () => {
  return(
    <div className="contact">
        <Separator />
        <label className="section-title">Contact</label>
        <div className="contact-container">

            <div className="contact-left">
                <p>Want to get in touch ? Contact me on any of these platforms</p>
                <SocialContact />
            </div>

            <div className="download">
              <a download href="../../../assets/resume.pdf">
                <i class="ri-cloud-line download-icon"></i>
                Download Resume
              </a>
            </div>

        </div>
    </div>
  )
}

export default Contact
