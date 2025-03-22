import React from "react";
import DragAndDropFileUpload from "../components/DragAndDropFileUpload";
import Banner from "../components/Banner";
import IconSection from "../components/IconSection/IconSection";
import InfoSection from "../components/InfoSection/InfoSection";
import FAQSection from "../components/FAQSection/FAQSection";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const Document = () => {
  

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
      <Banner message="Document" />
      <DragAndDropFileUpload />
      <div className="block-row">
      <div className="info-section">
          {/* Third Item */}
          <div className="image-box">
                    <img
                        src="/images/doc.png"
                        alt="What is DOC? Info"
                        className="img-fluid setimg"
                    />
                </div>
                <div className="image-box image-box-five">
                    <h5>What is DOC?</h5>
                    <p>
                        A DOC file is a Microsoft Word document commonly used for
                        creating and editing text documents.many diffrent uses of document
                        like Supports text styling, such as bold, italics, underlining, and
                        font customization.also Allows for structured documents with headings tables.
                    </p>
                </div>
          </div>
          
          <div className="block-row">
          <div className="title-row text-center">
          <h1>How to compress document files</h1>
            <h3>World's best video compressor to compress MP4, AVI, MKV, or any other video file. Choose the default options to compress video size by 40%, or choose a custom size.</h3>
            </div>
            <div className="flex how-to-area">
              <figure>
                <img src="/images/how-to.png" alt="" />
              </figure>
            <div className="caption-area">
              <ul className="list-style">
                <li>Upload document files to compress them online for free.</li>
                <li>Specify the parameters and press the "COMPRESS" button to compress document.</li>
                <li>Download the compressed document to view instantly or send a link to email.</li>
              </ul>
            </div>
          </div>
      </div>
       <div className="difference">
        <div  className="title-row">
          <h2 className="mb-4 text-left">Can anyone tell the difference?</h2>
          <p className="text-left"> Excellent question! Let me give you a side-by-side comparison. Below are two photos of my cousin. The left image is saved as a Doc directly from Ms Office. On the right is the same image Doc processed by CompressVideo. Spot any difference? </p>
        </div>        
        <div className="comparison-container row">
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/doc.jpg"
              alt="Original image"
              className="img-fluid rounded"
            />
            <h4>Original Documents</h4>
            <p>Size: 30MB</p>
          </div>
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/doc.jpg"
              alt="Compressed image"
              className="img-fluid rounded"
            />
            <h4 className="text-right">Compressed Documents</h4>
            <p className="text-right">Size: 18MB</p>
          </div>
        </div>
       </div>
      </div>

      <IconSection />

      <InfoSection />

      <FAQSection faqs={faqs} />

      <ImageSlider />

    </>
  );
}

export default Document