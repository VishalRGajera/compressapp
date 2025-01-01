import React from 'react';
import "../scss/blogs.scss";

const Blog = () => {
  return (
    <>
      <div>
        <div className="mainImage">
          <img src="/images/Photo.jpg" alt="main blog image" width={200} height={200} />

          <div className="mainImage_Contant">
            <p>Travel Blog</p>
            <h2>Going Places</h2>
            <p>I haven’t been everywhere, but it’s on my list</p>
          </div>
        </div>

        <section class="content">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi eos corrupti nihil, nesciunt
              laboriosam quaerat porro iste</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus nihil quaerat nam ducimus quos
              laboriosam corporis saepe praesentium obca</p>
          </div>

          <div class="contentBox">
            <div class="content1">
              <img src="/images/pdf.png" alt="" />
              <button className='btn btn-sm'>View more</button>
            </div>

            <div class="content1">
              <img src="/images/Png.png" alt="" />
              <button className='btn  btn-sm'>View more</button>
            </div>

            <div class="content1">
              <img src="/images/Jpg.png" alt="" />
              <button className='btn btn-sm'>View more</button>
            </div>
          </div>
        </section>

        <section class="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div class="Pcontant">
            <div class="Pcontant_user">
              <img src="images/Difference_photo.png"
                alt="" />
              <div>
                <p><strong>Admin</strong></p>
                <p><small>Mar 25, 2023 -1 min</small></p>
              </div>
            </div>
            <h2>The Girl from Ipanema</h2>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
              your audience to continue reading In exercitation duis consequat nulla id esse laboris. Excepteur do est velit laborum sunt nisi ex minim proident aliqua quis et. Elit excepteur nostrud do duis officia pariatur non reprehenderit reprehenderit duis sit sit. Exercitation pariatur sunt excepteur fugiat eiusmod consectetur ex dolor reprehenderit ullamco minim ut cupidatat. </p>
          </div>
        </section>

        <section class="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div class="Pcontant">
            <div class="Pcontant_user">
              <img src="/images/Difference_photo.png"
                alt="" />
              <div>
                <p><strong>Admin</strong></p>
                <p><small>Mar 25, 2023 -1 min</small></p>
              </div>
            </div>
            <h2>The Girl from Ipanema</h2>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
              your audience to continue reading In exercitation duis consequat nulla id esse laboris. Excepteur do est velit laborum sunt nisi ex minim proident aliqua quis et. Elit excepteur nostrud do duis officia pariatur non reprehenderit reprehenderit duis sit sit. Exercitation pariatur sunt excepteur fugiat eiusmod consectetur ex dolor reprehenderit ullamco minim ut cupidatat. </p>
          </div>
        </section>

        <section class="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div class="Pcontant">
            <div class="Pcontant_user">
              <img src="/images/Difference_photo.png"
                alt="" />
              <div>
                <p><strong>Admin</strong></p>
                <p><small>Mar 25, 2023 -1 min</small></p>
              </div>
            </div>
            <h2>The Girl from Ipanema</h2>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
              your audience to continue reading In exercitation duis consequat nulla id esse laboris. Excepteur do est velit laborum sunt nisi ex minim proident aliqua quis et. Elit excepteur nostrud do duis officia pariatur non reprehenderit reprehenderit duis sit sit. Exercitation pariatur sunt excepteur fugiat eiusmod consectetur ex dolor reprehenderit ullamco minim ut cupidatat. </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;

