import React from 'react';
import "../scss/blogs.scss";

import { Link } from "react-router-dom";

const blogPosts = [
  {title: "Burj Khalifa", slug: "Burj-Khalifa", },
  {title: "Dubai Miracle Garden", slug: "Dubai-Miracle-Garden",},
  {title: "Dubai Aquarium and Underwater Zoo", slug: "Dubai-Aquarium-and-Underwater-Zoo", },
  { title: "DESERT SAFARI", slug: "desert-safari" }
];



const Blog = () => {
  return (
    <>
    <div className="mainImage">
      <img src="/images/dubaimain.jpg" alt="main blog image" width={200} height={200} />

      <div className="mainImage_Contant">
        <p>Travel Blog</p>
        <h2>Dubai: A Journey Through Luxury, Culture, and Adventure</h2>
        <p>Best Place List</p>

      </div>
    </div>  
    <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <div>
  </div>
   
    </>
  );
}

export default Blog;

