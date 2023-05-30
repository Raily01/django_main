import React from 'react';
import { FaTelegram, FaEnvelope } from 'react-icons/fa';

function ContactsPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
          <a href="https://t.me/TvoiRaiii" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={100} />
            <p>@TvoiRaiii</p>
          </a>
          <a href="mailto:0000eternity@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={100} />
            <p>0000eternity@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
