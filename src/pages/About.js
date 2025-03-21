
import React from 'react';
import '../scss/blogs.scss'; // Ensure your styles are properly linked
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="banner">
        <h1>About Compressvideo</h1>
        <p>Compressvideo is the only free online service to compress Video, PNG, JPEG and Document files. Our desktop and server solutions are loved by over 2 million customers in 149 countries.<br /> For over a decade we have been consistently improving the file compressor engine that sits at the heart of all our business solutions. We're thrilled to now be able to share it with you all through Compressvideo.</p> 
      </div>
    <div className="about">

  <div className="flex card-row">
    <div className="card">
      <h2>What we do</h2>
      <p>Large files cause all kinds of problems that can unexpectedly interrupt your day - whether you are someone who just needs to email a file, or you manage files for thousands of people. Whatever the problem we aim to be there with a simple effective solution that will get you right back on with your day!</p>
    </div>
    <div className="card">
      <h2>Who we are</h2>
      <p>We are a grown up company who have been building software and helping people for the last 20 years and have no intention of stopping now! Our team are some of the most helpful, approachable people you could hope to meet. If you want to know more why not get in touch with us today.</p>
      </div>
      <div className="card">
      <h2>Beyond WeCompress</h2>
      <p>For those who need a little more, our unique file compressor engine is also available in a range of software solutions for IT admins, end-users & developers. Compress large batches of files securely offline, automatically compress emails or reclaim storage across file servers.</p>
      </div>
      <div className="card">
        <h2>Partnerships</h2>
        <p>Official Sky infotech
        Working inside video files can be complicated so we chose to partner with Datalogics who provide the official Sky Library</p>
      </div>
  </div>
      

  <div className="block-row">
  <div className="title-row">
    <h2>Why Choose Us?</h2>
  </div>
  <div className="why-us flex">
  <figure>
    <img src="/images/whyus.png" alt="whyus" />
  </figure>
  <div className="caption-area">
      <ul className="features-list">
        <li><strong>High-Quality Compression:</strong> Maintain clarity and resolution.</li>
        <li><strong>Fast & Secure:</strong> Speedy compression with data security in mind.</li>
        <li><strong>User-Friendly:</strong> No technical skills needed—just upload, compress, and download!</li>
        <li><strong>Supports Multiple Formats:</strong> Compress <em>JPEG, PNG, GIF, MP4, AVI, PDF, DOCX</em>, and more.</li>
        <li><strong>Completely Free:</strong> No hidden costs or sign-ups required.</li>
      </ul>
  </div>
  </div>
</div>
<blockquote cite="">
    <h2>Our Mission</h2>
    <p>
      Our mission is to provide an easy and effective way to reduce file sizes, making digital storage and sharing more convenient for everyone.
      We continuously strive to improve our platform by adding new features and enhancing the user experience.
    </p>
  
</blockquote>
<div className="stay-connected">
    <h2>Stay Connected</h2>
    <p className="thank-you">
      We value your feedback! If you have suggestions or questions, feel free to reach out to us.
      Thank you for choosing <strong>Compressvideo.in</strong> —your reliable file compression partner! 🚀
    </p>
    <Link to='/Contact' className='btn btn-brand'>Contact Us</Link>
    <p className="thank-you">Thank you for visiting! Have a great day! 😊</p>
</div>
  </div>
    </>
  );
}

export default About;

