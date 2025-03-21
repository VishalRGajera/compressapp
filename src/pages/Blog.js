import React from 'react';
import "../scss/blogs.scss";

const Blog = () => {
  return (
    <>
      <div>
        <div className="mainImage">
          <img src="/images/dubaimain.jpg" alt="main blog image" width={200} height={200} />

          <div className="mainImage_Contant">
            <p>Travel Blog</p>
            <h2>Dubai: A Journey Through Luxury, Culture, and Adventure</h2>
            <p>Best Place List</p>

          </div>
        </div>

        <section className="content">
          <div>
            <p>
              Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern 
              architecture and a lively nightlife scene. Burj Khalifa,
              an 830m-tall towerv dominates the skyscraper-filled skyline.Dubai, the sparkling gem of the Middle 
              East, is a city that seamlessly blends tradition with modernity. Whether you're chasing luxurious 
              experiences, exploring cultural landmarks, or embarking on thrilling adventures, Dubai offers 
              something for everyone. Here’s your guide to uncovering the magic of this vibrant city.</p>
          </div>

          <div className="contentBox">
            <div className="content1">
              <img src="/images/khalifa.jpg" alt="" />
            
              <p><b>Burj Khalifa</b>
              <br></br>
              
              Dubai, the sparkling gem of the Middle East, is a city that seamlessly blends tradition 
              with modernity. Whether you're chasing luxurious experiences, exploring cultural landmarks, 
              or embarking on thrilling adventures, Dubai offers something for everyone. Here’s your guide 
              to uncovering the magic of this vibrant city.</p>
            </div>
            

            <div className="content1">
              <img src="/images/palm.jpg" alt="" />
              <p><b>Palm Jumeirah</b>
              <br></br>
            
              The tree-shaped Palm Jumeirah island is known for glitzy hotels, posh apartment towers 
                and upmarket global restaurants. Food trucks offering snacks like shawarma dot the Palm 
                Jumeirah Boardwalk, popular for its views of the Dubai coastline and the sail-shaped Burj 
                Al Arab hotel.The developer of Palm Jumeirah was Nakheel</p>
            </div>

            <div className="content1">
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

        <section className="panel">
          <img src="/images/Slider_Image_one.png" alt="" />
          <div className="Pcontant">
            <div className="Pcontant_user">
              
              <div>
               
              </div>
            </div>
            <h2>Dubai Miracle Garden</h2>
            <p>Dubai Miracle Garden is a stunning floral paradise and one of the most beautiful attractions in Dubai.
               It's the world’s largest natural flower garden, featuring over 150 million flowers arranged in breathtaking 
               designs, including heart-shaped pathways,castles,pyramids, and even a life-size .The garden transforms 
               into a new experience each season with unique floral arrangements.this is A dream location for photography 
               lovers.about cleaness is organized, and beautifully landscaped.
                
                
               </p>
          </div>
        </section>

        <section className="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div className="Pcontant">
            <div className="Pcontant_user">
          
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

        <section className="panel">
          <img src="/images/Slider_Image_three.png" alt="" />
          <div className="Pcontant">
            
            <h2>DESERT SAFARI</h2>

              <p>
               A Desert Safari in Dubai is an exhilarating experience that lets you explore 
              the beauty of the Arabian Desert.If you're looking for a low-cost outing,  
              The Desert Safari offers an evening trip to the desert that includes dune 
              driving, camel rides, welcome drinks, a barbecue dinner, entertainment and more.</p>

             <h2>Types of Desert Safari Tours</h2> 

             <p>Morning Desert Safari:
             For those with a busy schedule, the morning desert safari is an excellent option. This adventure-packed tour includes 
             approximately 20 minutes of thrilling dune bashing, followed by an exciting camp experience where you can enjoy quad 
             biking, a camel ride, and sand skiing. The duration of the morning safari varies depending on the package, with most 
             tours lasting around two hours. It is an ideal choice for those who prefer a shorter trip without dinner and overnight
            camping.<br></br></p>

            <p>Evening Desert Safari:
            An evening desert safari is a must-do experience for visitors looking to create unforgettable memories. The journey begins
            in the afternoon, with a stop at a camel farm before heading into the vast desert. Witness the breathtaking sunset over 
            the dunes, enjoy camel rides, and try your hand at sandboarding. At the campsite, immerse yourself in cultural activities 
            such as henna painting and traditional performances. Relish a delicious barbecue dinner, relax with shisha, and be entertained
            by a mesmerizing belly dance performance set to Arabic tunes.</p>

            <p>Overnight Desert Safari:
            For an extraordinary experience, the overnight desert safari offers the perfect blend of adventure and tranquility. Capture 
            stunning photographs of the starlit desert and wake up to a mesmerizing sunrise over the dunes. Enjoy various activities, 
            including henna painting, traditional costume dress-ups, and camel rides. After a delectable dinner, unwind under the serene
            desert sky, listening to the whispering winds. For those who love entertainment, live belly dance performances add to the 
            charm of the night. Before heading to bed, make sure to have sleeping bags and blankets for a comfortable stay.</p>




          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;

