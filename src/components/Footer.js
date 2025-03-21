import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className='flex'>
          
          <div className='col'>
            
            <h4>Compressvideo</h4>
          <div className='address-block'>
            <p>
              <img src="/images/locate.png" alt="" />
            <span> 44C Apple Park, Nr.Janson Road, Banglore 560004</span>
            </p>
            <p><img src="images/email.png" alt="" />
              <span> <Link href="mainto:samratapps007@gmail.com">samratapps007@gmail.com</Link></span>
            </p>
          </div>
          </div>
          <div className='col'>
          <h4>Useful link</h4>
          <ul className='link-area'>
              <li>
                
              <Link rel="" type="" to="/image" data-discover="true">Home</Link>
              </li>
              <li>
                <Link rel="" type="" to="about">About us</Link>
              </li>
              <li>
                <Link rel="" type="" to="Contact">Contact us</Link>
              </li>
              <li>
                <Link rel="" type="" to="policy">Policy</Link>
              </li>
            </ul>
            </div>
            <div className='col'>
              <h4>
              Compress info
              </h4>
            <ul className='link-area'>
            <li>
                <Link rel=""  to="/image" data-discover="true">Image</Link>
              </li>
              <li>
                {/* <Link to="/video" rel="/video" type="/video" to="/video">Video</Link> */}
                <Link rel=""  to="/video" data-discover="true">Video</Link>
              </li>
              <li>
                {/* <Link rel="" type="" to="/pdf">Pdf</Link> */}
                <Link rel=""  to="/pdf" data-discover="true">Pdf</Link>
              </li>
              <li>
                {/* <Link rel="" type="" to="/document">Document</Link> */}
                <Link rel=""  to="/document" data-discover="true">Document</Link>
              </li>
            </ul>
        </div> 
        </div> 
      </div>
    </footer>
  );
}
