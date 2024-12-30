import React from 'react';
import Header from './Header';
import Footer from './Footer';


export default function Layout({ children }) {
  const addStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '15px 0',
    textAlign: 'center',
    width: '120px',
    height: '600px',
  };
  return (
    <div className="wrapper">
      <Header />
      <main id='content-area' className='flex'>
        <div className='container'>
          <div className='add-block' style={addStyle}>add section</div>
          <div className='content-area'>{children}</div>
          <div className='add-block' style={addStyle}>add section</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
