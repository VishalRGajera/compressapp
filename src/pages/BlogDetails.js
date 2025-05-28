import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const blogPosts = [
  {title: "Why Use Video Compression Tools for Your Needs?", 
    slug: "Why-Use-Video", 
    image: "/images//blog-why.png",
    content: `
    <section class="panel">
    <div class="Pcontant">

    <h2>Why Use Video Compression Tools for Your Needs?</h2>

    <p>In today’s fast-paced digital world, video content is everywhere – from YouTube tutorials to Instagram reels and corporate webinars. But high-quality videos often come at the cost of large file sizes, which can be a hassle to store, upload, or share. That’s where video compression tools come in.</p>

    <p>Here’s why using video compression tools is essential for personal and professional users alike:</p>

    <ul>
      <li><strong>Faster Uploads and Downloads:</strong> Large video files take forever to upload or download, especially with limited bandwidth. Compression reduces file size, making sharing via email, cloud storage, or social media much quicker and easier.</li>
      <li><strong>Save Storage Space:</strong> Whether you're using a smartphone, laptop, or cloud drive, storage is precious. Compressed videos take up significantly less space without compromising much on quality.</li>
      <li><strong>Smooth Mobile Experience:</strong> Most people watch videos on mobile devices with limited data and screen sizes. Compressed videos load faster and reduce buffering, ensuring a smooth viewing experience.</li>
      <li><strong>Faster Streaming & Sharing:</strong> For content creators and marketers, smaller videos stream more efficiently and load quicker, keeping your audience engaged and improving SEO rankings.</li>
      <li><strong>Maintain Quality with Smaller Files:</strong> Modern compression tools use advanced algorithms to preserve high-definition quality even after reducing the file size.</li>
      <li><strong>Easier Social Media Posting:</strong> Social media platforms often have file size limits. Compressing your videos allows you to post content without resizing or trimming.</li>
      <li><strong>No Need for Expensive Software:</strong> Most online video compressors are free, user-friendly, and require no installation – perfect for casual users, students, small business owners, and content creators.</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>Whether you're a YouTuber, student, entrepreneur, or casual user, video compression tools help you save time, space, and data – all while keeping your video content high-quality and professional.</p>

  </div>
</section>
`},
{
    title: "Top 10 Free Online Video Compressors in the Digital Era", 
    slug: "Top-10-Era", 
    image: "/images//blog-how-to.png",
    content: `
      <section class="panel">
    <div class="Pcontant">

      <h2>Top 10 Free Online Video Compressors in the Digital Era</h2>

      <p>In the modern digital world where content is king, video has emerged as the most engaging form of communication. Whether you're uploading vlogs on YouTube, sharing product videos on Instagram, or sending tutorials through WhatsApp - file size matters.
      Large video files can lead to slow uploads, poor streaming, storage issues, and higher data consumption. That’s why video compression tools have become essential in the creator toolkit. And the best part? 
      Many of these tools are completely free and accessible online - no software downloads required!</p>
      <p>Let’s explore the top 10 free online video compressors that are redefining the way we manage and share videos in this digital era.</p>

      <h2>1. CompressVideo.in</h2>
      <p><strong>Fast, free, and no watermark</strong> — This rising tool stands out for its simplicity and lightning-fast compression.</p>
      <ol>
        <li>Drag-and-drop interface</li>
        <li>Retains HD quality</li>
        <li>Compatible with MP4, MOV, AVI & more</li>
        <li>100% web-based and secure</li>
        <li>🎯 Ideal for students, creators, and professionals alike.</li>
      </ol>

      <h2>2. VEED.IO</h2>
      <p><strong>Edit and compress in one place</strong> — VEED.IO is more than a compressor; it’s a full creative suite.</p>
      <ol>
        <li>Video trimming, subtitles, filters</li>
        <li>Compress by resolution or size</li>
        <li>Perfect for content creators</li>
        <li>Free with optional paid upgrades</li>
      </ol>

      <h2>3. Clideo</h2>
      <p><strong>All-in-one multimedia tool</strong> — Clideo’s intuitive platform makes video compression effortless.</p>
      <ol>
        <li>Easy to use</li>
        <li>Works on all browsers and devices</li>
        <li>Compresses quickly</li>
        <li>Also offers tools like merge, crop, and rotate</li>
      </ol>

      <h2>4. FreeConvert</h2>
      <p><strong>Smart compression with format support</strong> — Handles large files (up to 1GB) and converts across 60+ formats.</p>
      <ol>
        <li>Preset quality options</li>
        <li>Control output size</li>
        <li>Upload from device or cloud</li>
        <li>No sign-up needed</li>
      </ol>

      <h2>5. Media.io (Wondershare)</h2>
      <p><strong>Cross-platform & cloud-based</strong> — Supports seamless compression across PC and mobile.</p>
      <ol>
        <li>Intelligent compression engine</li>
        <li>Clean, ad-free UI</li>
        <li>Works with YouTube, TikTok, WhatsApp formats</li>
        <li>Free with limited export quality</li>
      </ol>

      <h2>6. OnlineConverter</h2>
      <p><strong>Simple and no-frills</strong> — Perfect for those looking for basic, no-login compression.</p>
      <ol>
        <li>Fast upload</li>
        <li>Lightweight tool</li>
        <li>Only core settings available</li>
        <li>Great for personal use or small projects</li>
      </ol>

      <h2>7. Kapwing</h2>
      <p><strong>Compress, collaborate, and create</strong> — Built for creators who work in teams or remotely.</p>
      <ol>
        <li>Video editing + compression in one</li>
        <li>Cloud-based workspace</li>
        <li>Free plan with watermark</li>
        <li>Paid plan removes watermark and unlocks more tools</li>
      </ol>

      <h2>8. XConvert</h2>
      <p><strong>Advanced features for power users</strong> — Ideal for users who want deeper control over compression.</p>
      <ol>
        <li>Adjust bitrate, resolution, framerate</li>
        <li>Batch compression</li>
        <li>Lightweight UI</li>
        <li>No intrusive ads</li>
      </ol>

      <h2>9. VideoSmaller</h2>
      <p><strong>Quick and bandwidth-friendly</strong> — Designed for low-spec users and mobile optimization.</p>
      <ol>
        <li>Compress up to 500MB</li>
        <li>Option to remove audio</li>
        <li>Great for email or WhatsApp videos</li>
        <li>No watermark</li>
      </ol>

      <h2>10. PS2PDF</h2>
      <p><strong>Multi-functional converter + compressor</strong> — A hybrid platform offering multiple file tools.</p>
      <ol>
        <li>Compress by percentage</li>
        <li>Resize resolution</li>
        <li>Secure and fast</li>
        <li>Also converts PDFs, images, and more</li>
      </ol>

      <h2>Why Use Online Video Compressors in Today’s Era?</h2>
      <ol>
        <li><strong>Saves Storage:</strong> Ideal for phones, USB drives, or cloud space.</li>
        <li><strong>Speeds Up Uploads:</strong> Share faster on social platforms.</li>
        <li><strong>Data Efficiency:</strong> Lower bandwidth usage for mobile uploads.</li>
        <li><strong>Universal Sharing:</strong> Compressed videos are easier to email or transfer.</li>
        <li><strong>Better User Experience:</strong> Ensures smoother playback, especially on slower connections.</li>
      </ol>

      <h2>Final Thoughts</h2>
      <p>As video continues to dominate the digital landscape, the need for efficient file management is more important than ever. These top 10 free online video compressors empower users to create, share, and manage videos without breaking the bank or compromising quality.
      Whether you're a digital marketer, YouTuber, educator, or everyday user — there’s a perfect tool out there waiting for you.</p>

  </div>
</section>
  `
  },{ 
    title: "Burj Khalifa", 
    slug: "Burj-Khalifa", 
    image: "/images/khalifa.jpg",
    content: `
     <section class="content">
      <div>
        <p>
          Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern 
          architecture and a lively nightlife scene. Burj Khalifa,
          an 830m-tall towerv dominates the skyscraper-filled skyline.Dubai, the sparkling gem of the Middle 
          East, is a city that seamlessly blends tradition with modernity. Whether you're chasing luxurious 
          experiences, exploring cultural landmarks, or embarking on thrilling adventures, Dubai offers 
          something for everyone. Here’s your guide to uncovering the magic of this vibrant city.</p>
      </div>

      <div class="contentBox">
        <div class="content1">
          <img src="/images/khalifa.jpg" alt="" />
        
          <p><b>Burj Khalifa</b>
          <br></br>
          
          Dubai, the sparkling gem of the Middle East, is a city that seamlessly blends tradition 
          with modernity. Whether you're chasing luxurious experiences, exploring cultural landmarks, 
          or embarking on thrilling adventures, Dubai offers something for everyone. Here’s your guide 
          to uncovering the magic of this vibrant city.</p>
        </div>
        

        <div class="content1">
          <img src="/images/palm.jpg" alt="" />
          <p><b>Palm Jumeirah</b>
          <br></br>
        
          The tree-shaped Palm Jumeirah island is known for glitzy hotels, posh apartment towers 
            and upmarket global restaurants. Food trucks offering snacks like shawarma dot the Palm 
            Jumeirah Boardwalk, popular for its views of the Dubai coastline and the sail-shaped Burj 
            Al Arab hotel.The developer of Palm Jumeirah was Nakheel</p>
        </div>

        <div class="content1">
          <img src="/images/dubai_frame.jpg" alt="" />
          <p><b>Dubai Frame</b>
          <br></br>
    
            Welcome to Dubai Frame, an iconic landmark that offers visitors a unique perspective of 
            the city's past, present, and future! Located in Dubai, United Arab Emirates, Dubai Frame 
            is an awe-inspiring structure that stands at 150 meters tall, offering visitors spectacular 
            views of the city's skyline.
            </p>
        </div>
      </div>
    </section>
    `
  },
  { 
    title: "Dubai Miracle Garden", 
    slug: "Dubai-Miracle-Garden",
    image: "/images/Slider_Image_one.png", 
    content: `
     <section class="panel">
      <div class="Pcontant">
        <h2>Dubai Miracle Garden</h2>
        <div class="Pcontant_user">              
           Admin - July 2024
        </div>
        <p>Dubai Miracle Garden is a stunning floral paradise and one of the most beautiful attractions in Dubai.
           It's the world’s largest natural flower garden, featuring over 150 million flowers arranged in breathtaking 
           designs, including heart-shaped pathways,castles,pyramids, and even a life-size .The garden transforms 
           into a new experience each season with unique floral arrangements.this is A dream location for photography 
           lovers.about cleaness is organized, and beautifully landscaped.
            
            
           </p>
           <p>
           A world of floral wonder awaits you at Dubai Miracle Garden, the world's largest natural flower garden. The 72,000sqm park has an impressive line-up of famous buildings and structures completely transformed into colourful flower exhibits.
            </p>
           <p>
Walk down the heart-shaped pathway or wander amid petal-powered castles, illuminated nightscapes and full-size houses. You can immerse yourself among more than 150 million blooming flowers throughout with plenty of attractions and a huge variety of quirky arrangements.
          </p>
           <h3>
Enjoy floral displays at Dubai Miracle Garden</h3>
Don't miss the Guinness World Record-breaking rendition of an Airbus A380 superjumbo aircraft. The garden teamed up with Emirates Airline for the centrepiece – covered in more than 500,000 fresh flowers and living plants. Another vibrant display is the new Smurfs Village where fans of all ages can meet the brilliantly-blue characters in landscape arrangements across four immersive zones.
            
           <p>
The stunning 'floating lady’ dressed in exotic blooms is a must-see too, as well as a walking track that features daily entertainment, including parades, street performers and other family-friendly activities. The dazzling Butterfly Garden is another essential stop, housing 15,000 butterflies in ten custom-built domes. Make sure you plan ahead as the park typically closes during the summer in order to renovate and install new exhibits.
</p>
  <h3>Ticket prices and booking information</h3>
<p>
          Individual adult tickets for the garden are AED100, or AED85 for children aged between three and 12. Children under three can enter free and tickets for people of determination are priced at AED40. Residents can present their Emirates ID for a special discounted ticket priced at AED60 for adults and children aged three and up. For group bookings please contact Dubai Miracle Garden at Booking@dubaimiraclegarden.com. Prices are subject to change. Book your visit now at Dubai Miracle Garden’s official website.
</p>
      </div>
    </section>
    `
  },
  { 
    title: "Dubai Aquarium and Underwater Zoo", 
    slug: "Dubai-Aquarium-and-Underwater-Zoo", 
    image: "/images/Slider_Image_two.png",
    content: `
     <section class="panel">
      <div class="Pcontant">
        <div class="Pcontant_user">
      
          <div>
        
          </div>
        </div>
        <h2>Dubai Aquarium and Underwater Zoo</h2>
        <p>Dubai Aquarium & Underwater Zoo, located inside The Dubai Mall, is one of the largest indoor aquariums in the world.
          Massive Viewing Panel The main tank has a huge 48-meter-long glass tunnel, offering a breathtaking walk-through experience.
          Experiences: Visitors can enjoy unique experiences such as the Shark Walker, Ray Encounter, King Croc Encounter.Educational 
          Programs: The aquarium offers diverse educational programs for schools and the community
          
          </p>
      </div>
    </section>
    `
  }
 

];

export default function BlogDetails() {
  const { title, image } = useParams();
  const blog = blogPosts.find((post) => post.slug === title);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

  }, [title]);
  

  if (!blog) return <h2>Blog post not found</h2>;


  return (
    <div className="blog-details">
      <div className="blog-banner">
        <figure>
          <img src={blog.image} alt="" />
        </figure>
        <div className="title-row">
          <h1>{blog.title}</h1>
        </div>
      </div>
      {/* Render HTML content safely */}
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
  
}