import React from 'react';
import "../scss/blogs.scss";

import { Link } from "react-router-dom";

const blogPosts = [
  {title: "Why Use Video Compression Tools for Your Needs?", slug: "why-use-compressvideo-tool",image: "/images/blog-why.png", content: "In today’s fast-paced digital world, video content is everywhere – from YouTube tutorials to Instagram reels and corporate webinars."},
  {title: "Top 10 Free Online Video Compressors in the Digital Era", slug: "top-10-free-online-video-compressor-in-digital-era",image: "/images/blog-how-to.png", content: "In the modern digital world where content is king, video has emerged as the most engaging form of communication."},
  {title: "Burj Khalifa", slug: "Burj-Khalifa",image: "/images/khalifa.jpg", content: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa,"},
  {title: "Dubai Miracle Garden", slug: "Dubai-Miracle-Garden", image: "/images/Slider_Image_one.png",content: "Dubai Miracle Garden is a stunning floral paradise and one of the most beautiful attractions in Dubai. It's the world’s largest natural flower garden,"},
  {title: "Dubai Aquarium and Underwater Zoo", slug: "Dubai-Aquarium-and-Underwater-Zoo", image: "/images/Slider_Image_two.png", content: "Dubai Aquarium & Underwater Zoo, located inside The  Dubai Mall, is one of the largest indoor aquariums in the world. "},
  { title: "DESERT SAFARI", slug: "desert-safari", image: "/images/Slider_Image_three.png",content: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene." }

];



const Blog = () => {
  return (
    <>
    <div className="mainImage">
      <img src="/images/blog-why.png" alt="main blog image" width={200} height={200} />

      <div className="mainImage_Contant">
        <p>Why Use</p>
        <h2>Why Use Video Compression Tools for Your Needs?</h2>
        <p>CompressVideo</p>
      </div>
    </div>  
    <div className='blog-list flex'>
        {blogPosts.map((post) => (
          <div className="blog-item" key={post.slug}>
            <figure>
              <img src={post.image} />
            </figure>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link className='btn' to={`/blog/${post.slug}`} tabindex= "0">Read More</Link>
          </div>
        ))}
      </div>
      <div>
  </div>
   
    </>
  );
}

export default Blog;

