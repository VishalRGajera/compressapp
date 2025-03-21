import React from 'react';
import '../scss/blogs.scss'; // Ensure your styles are properly linked

const Contact = () => {
  return (


    <div className="contact-container">
      <div className="contact-content flex">
        <div className="contact-info">
          <div className="title-row">
            <h1>CONTACT US</h1>
            <p>We are here to meet any business need and to promote your company online!</p>
          </div>
          <div className="contact-card">
            <p><img src="/images/map.png" alt="" /><strong>44C Apple Park, Nr.Janson Road,<br /> Banglore 560004</strong></p>
            <p><img src="/images/mail.png" alt="" /><strong> <a href="mailto:sample@sample.com">samratapps007@gmail.com</a></strong></p>
            <p><img src="/images/phone.png" alt="" /><strong>+918690479007</strong></p>
          </div>
        </div>
        <div className="img-area">
          <figure><img src="/images/contact.png" alt="contact" /></figure>
        </div>       
      </div> 
    </div>
  );
}

export default Contact;
