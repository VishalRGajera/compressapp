import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import './scss/main.scss';
import Image from './pages/Image';
import Video from './pages/Video';
import Pdf from './pages/Pdf';
import Document from './pages/Document';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Image />} />
          <Route path="/video" element={<Video />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/document" element={<Document />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
