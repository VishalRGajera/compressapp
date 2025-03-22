import React from "react";
import DragAndDropFileUpload from "../components/DragAndDropFileUpload";
import Banner from "../components/Banner";
import IconSection from "../components/IconSection/IconSection";
import InfoSection from "../components/InfoSection/InfoSection";
import FAQSection from "../components/FAQSection/FAQSection";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const Video = () => {
  

  const faqs = [
    {
      question: "What is video compression?",
      answer:
        "Video compression reduces the file size of a video by removing redundant or unnecessary data while maintaining as much quality as possible.",
    },
    {
      question: "Are my videos secure during the compression process?",
      answer:
        "Yes, we use secure servers, and all uploaded videos are automatically deleted after processing.",
    },
    {
      question: "Is the compress tool safe to use?",
      answer:
        "Compression might slightly reduce quality depending on the chosen settings. However, we optimize for the best balance between file size and quality.",
    },
    {
      question: "How much can I reduce the file size of a video?",
      answer:
        "The file size reduction depends on the video's original quality and the compression settings. In many cases, it can be reduced by up to 70%.",
    },
  ];


  return (
    <>
      <Banner message="Video" />
      <DragAndDropFileUpload />
      <div className="block-row">
        <div className="title-row text-center">
          <h1>How To Compress a Video?</h1>
            <h3>World's best video compressor to compress MP4, AVI, MKV, or any other video file. Choose the default options to compress video size by 40%, or choose a custom size.</h3>
            </div>
            <div className="flex how-to-area">
              <figure>
                <img src="/images/how-to.png" alt="" />
              </figure>
            <div className="caption-area">
              <ul className="list-style">
                <li>Click the “Choose Video” button to select your video file </li>
                <li>Keep the default options (they do a great job!) or specify advanced options </li>
                <li>Click on the “Compress Video” button to start compression </li>
                <li>When the status change to “Done” click the “Download Video” button </li>
              </ul>
            </div>
          </div>
      </div>
      <div className="block-row">
       <div className="difference">
        <div  className="title-row">
          <h2 className="mb-4 text-left">Can anyone tell the difference in Video ?</h2>
          <p className="text-left"> Excellent question! Let me give you a side-by-side comparison. Below are two photos of my cousin. The left image is saved as a 64-bit Video directly from Phone. On the right is the same Video processed by Compressvideo. Spot any difference? </p>
        </div>
        
        <div className="comparison-container row">
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/gif.gif"
              alt="Original image"
              className="img-fluid rounded"
            />
            <h4>Original Video</h4>
            <p>Size: 48MB</p>
          </div>
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/gif.gif"
              alt="Compressed image"
              className="img-fluid rounded"
            />
            <h4 className="text-right">Compressed Video</h4>
            <p className="text-right">Size: 29MB</p>
          </div>
        </div>
       </div>
      </div>

      <IconSection />

      <FAQSection faqs={faqs} />
      <div className="faq-section">
            <div className="">
              <div className="faq-box">
                  <div className="faq-title">
                      <h4>Which Encoder Is Best for Compressing Video?</h4>
                  </div>
                  <div className="faq-text">
                      <p>We use two popular video encoding methods that are supported by most modern devices and browsers: H.264 and H.265. Out of these two encoding methods, H.265 yields better compression, especially at higher resolutions such as 1080p or 4k.
                      </p>
                  </div>                
              </div>          
              <div className="faq-box">
                  <div className="faq-title">
                      <h4>How to play compressed video?</h4>
                  </div>
                  <div className="faq-text">
                      <p>Codecs we use for compression are supported by all major browsers and devices. So you should not have any playback issues. If any issues, try opening the video with the free VLC player (Windows, Mac, Linux, and Mobile versions available). Allowed file types are: m2ts, mp4, mp4, mts, mpeg, swf, mod, mp4, mp4, mov, m4v, qt, rm, mpg, 3gpp, flv, divx, vob, dvr-ms, wmv, mp4, rmvb, asf, mkv, 3g2, ts, mpv, wtv, webm, xvid, mp4, 3gp, mp4, mxf, avi, m1v, f4p, mp4, f4v, ogv
                      </p>
                      <p>
                        <strong>Advanced Methods of Video Compression</strong>
                        There are two main methods to compress a video. You can either optimize the bitrate or resize the video to a smaller size. We provide 4 settings related to both methods. Here’s an explanation:
                        </p>
                        <p>
                        <strong>1. By Video Quality</strong>
                        CRF (Constant Rate Factor): CRF method attempts to keep a constant perceived video quality. To do that, it uses different compression levels on different frames. For the H264 encoder, possible CRF values range from 0 to 51. Higher values mean more compression (reduced file size), lower values mean better quality (but bigger file size). The default is set at 23.
                        </p>
                        <p>
                        Preset: Presets refers to the video compression speed. Choosing a slower preset allows better optimization (lower bitrate/file size) for a given video quality level. If you prefer a lower file size over encoding time, choose a slower preset.
                        </p>
                        <p>
                        <strong>2. As a Percentage of the Original Size (Default)</strong>
                        This method allows you to set a target file size for your video as a percentage of the original size. For example, if you set it to 60% for a 1Gb file, we will attempt to make your compressed file size 600Mb or less. 
                        </p>
                        <p>
                        The pros of this method are, you can achieve a certain target size. The downside is you don’t know how the target size will affect video quality. To overcome this, start with a decent size (as a percentage of original), then test for video quality. Increase the target size if you need better quality. This is the default video compression method used.
                        </p>
                        <p>
                        <strong>3. Set Max Bitrate</strong>
                        This method allows you to set the max bitrate for given video quality. The quality is set by CRF (constant rate factor). Select this method if you are using the video in a streaming application where you want to control the streaming bandwidth rate. To choose this option, select "By Max Bitrate" from the "Video Compress" dropdown. For more info: read video bitrate control.
                        </p>
                        <p>
                        <strong>4: Make Video Size Smaller (Re-Size)</strong>
                          Choosing a smaller video resolution (dimensions) can also save file size. For example, if you have a 4K (4320p) video but your target device is 1080p, you can downsize the video to fit 1080p and save file size. To choose this option, choose "Re-size video" from "Advanced Settings" above.
                      </p>
                  </div>
              </div> 
            </div>
        </div>
      <ImageSlider />

    </>
  );
}

export default Video