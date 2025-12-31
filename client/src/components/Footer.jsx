import React from 'react'
import './Footer.css'

const Footer = () => {
  return <>
    <section className='footer-section'>
      <div className="parrent1">
        <div className="footer-div first">
          <a
            href="https://wa.me/919876543210?text=Hello%20CODEWIZARD,%20I%20want%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp whats"></i>
          </a>

          <a href="https://www.instagram.com/silent_life_2004/"><i className="fab fa-instagram insta"></i></a>
          <i className="fab fa-facebook face"></i>
          <a href="/contact#location"><i className="fas fa-map-marker-alt loca"></i></a>
        </div>
        <div className="footer-div middel">
          <p style={{ color: "white" }}>CODEWIZARD©️{new Date().getFullYear()}</p>
        </div>
        <div className="footer-div last">
          <p style={{ color: "white" }}>Developed by shivam</p>
        </div>
      </div>
    </section>
  </>
}

export default Footer