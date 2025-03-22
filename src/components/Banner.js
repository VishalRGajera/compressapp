import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Banner() {
  const location = useLocation();

  const getMessage = (pathname) => {
    switch (pathname) {
      case '/pdf':
        return 'Pdf';
      case '/document':
        return 'Document';
      case '/image':
        return 'Image';
      case '/':
      default:
        return 'Video';
    }
  };

  return (
    <>
      <div className="banner">
      <h1>Compress <span>{getMessage(location.pathname)}</span></h1>      
      <p>Compress {getMessage(location.pathname)} files online for easier sharing, faster uploads, and more efficient storage—all without losing quality. Oh, and it's free to try.</p>
    </div>
    </>
  );
}
