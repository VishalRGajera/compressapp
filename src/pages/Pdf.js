import React from "react";
import DragAndDropFileUpload from "../components/DragAndDropFileUpload";
import Banner from "../components/Banner";
import IconSection from "../components/IconSection/IconSection";
import InfoSection from "../components/InfoSection/InfoSection";
import FAQSection from "../components/FAQSection/FAQSection";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const Pdf = () => {
  

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
      <Banner message="Pdf" />
      <DragAndDropFileUpload />
      <div className="block-row">
        <div className="info-section">
          {/* Fourth Item */}
          <div className="image-box">
              <h2>What is PDF?</h2>
              <p>
                  PDF stands for "Portable Document Format" PDF documents 
                  can be opened and read exactly how the document creator
                  intended PDF is a file format used to present documents 
                  independent of software, hardware, or operating systems.
                  main advantages of PDF file is the maintain original
                  document structure.
              </p>
          </div>
          <div className="image-box">
              <img
                  src="/images/pdf.png"
                  alt="What is PDF? Info"
                  className="img-fluid setimg"
              />
          </div>
          </div>
          <div className="block-row">
            <div className="title-row text-center">
              <h2>Reduce PDF File Size—Keep PDF Quality</h2>
              <p>Need to reduce file size without losing quality? Our compress PDF tool shrinks documents online for free. Turn your large PDF documents into file sizes that are easy to share and store—all in just a few clicks.</p>
            </div>
          </div>
          <div className="title-row text-center">
          <h1>How To Compress a PDF Online for Free</h1>
            <h3>World's best video compressor to compress MP4, AVI, MKV, or any other video file. Choose the default options to compress video size by 40%, or choose a custom size.</h3>
            </div>
          <div className="flex how-to-area">
              <figure>
                <img src="/images/how-to.png" alt="" />
              </figure>
            <div className="caption-area">
              <ul className="list-style">
                <li>Drag & drop your file into our free PDF Compressor tool.</li>
                <li>Choose Basic or Strong (Pro) compression, then click ‘Compress’.</li>
                <li>If needed, edit your PDF with our other tools.</li>
                <li>Download or share your compressed file when you’re done.</li>
              </ul>
            </div>
          </div>
       <div className="difference">
        <div  className="title-row">
          <h2 className="mb-4 text-left">Can anyone tell the difference In Pdf ?</h2>
          <p className="text-left"> Excellent question! Let me give you a side-by-side comparison. Below are two photos of my cousin. The left image is saved as a PDF directly from Google. On the right is the same Pdf image processed by Compressvideo. Spot any difference? </p>
        </div>
        <div className="comparison-container row">
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/pdf.jpg"
              alt="Original image"
              className="img-fluid rounded"
            />
            <h4>Original Pdf</h4>
            <p>Size: 152MB</p>
          </div>
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/pdf.jpg"
              alt="Compressed image"
              className="img-fluid rounded"
            />
            <h4 className="text-right">Compressed Pdf</h4>
            <p className="text-right">Size: 80MB</p>
          </div>
        </div>
       </div>
      </div>


      <IconSection />


      <div className="faq-section">
            <div className="">
      <div className="faq-box">
        <div className="faq-title">
            <h4>Is Smallpdf’s PDF compressor free to use?</h4>
        </div>
        <div className="faq-text">
            <p>Yes! Like our other tools, our online PDF compressor tool is free to use for reducing file sizes. You can even reduce the file size of other document types, like MS Office files, JPG, PNG, GIF, and TIFF with no loss of image quality. Keep in mind that some usage limitations may apply, and our strong compression option is a Pro feature. To get started, simply drop your files into the tool at the top of this page.</p>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-title">
            <h4>Can I compress PDFs with my whole team?</h4>
        </div>
        <div className="faq-text">
            <p>Absolutely! Our Smallpdf Pro for Teams plan offers unlimited access to all Pro features for you and your team. This includes over 30+ PDF tools to edit, merge, convert, and more—including AI PDF tools. Plus, you’ll benefit from flexible payment options to accommodate teams of any size.</p>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-title">
            <h4>Do I need a paid Smallpdf Pro account to compress files?</h4>
        </div>
        <div className="faq-text">
            <p>No, a Smallpdf Pro subscription isn’t required to compress your documents. There are benefits to Pro though, like unlimited access to all of our other tools without restrictions. A Pro subscription also lets you to select strong compression, for turning large documents into highly compressed PDF files that are easier to share, with no quality loss.</p>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-title">
            <h4>Will compression affect fonts or document quality?</h4>
        </div>
        <div className="faq-text">
            <p>Nope! Compressing your PDFs with our tool doesn’t alter fonts in any way. Your document fonts will remain consistent and unaffected by the compression process. This means all text styles, sizes, and embedded fonts are fully preserved, maintaining the document’s professional appearance.</p>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-title">
            <h4>Is the compress tool safe to use?</h4>
        </div>
        <div className="faq-text">
            <p>We’re committed to safety and security at Smallpdf. In addition to GDPR compliance, we’re ISO/IEC certified, undergo annual security audits, and employ TLS encryption to keep your information safe. Every time you compress a file, the process is fully encrypted, ensuring your data and documents are secure from start to finish.</p>
        </div>
      </div>

      <div className="faq-box">
        <div className="faq-title">
            <h4>Can I compress PDFs on the go?</h4>
        </div>
        <div className="faq-text">
            <p>Yes, our iOS and Android mobile apps allow you to compress large PDF files on the go so you can stay productive while traveling or working remotely.</p>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-title">
            <h4>What is the best online PDF compressor?</h4>
        </div>
        <div className="faq-text">
            <p>The best PDF compressor shrinks file size without losing quality. Smallpdf’s Compress PDF tool does just that—offering fast, high-quality compression with Basic and Strong options to suit your needs. Plus, it comes with TLS encryption, GDPR compliance, and ISO/IEC 27001 certification. Try it for free—no sign-up needed!</p>
        </div>
      </div>
      <div className="faq-box">
        <div className="faq-title">
            <h4>How does PDF compression work?</h4>
        </div>
        <div className="faq-text">
            <p>Our tool analyzes your document, removes redundant data, and re-encodes large images to shrink file size—without sacrificing quality. It’s fast, efficient, and keeps your content intact.</p>
        </div>
      </div>
      </div>
      </div>
      <FAQSection faqs={faqs} />

      <ImageSlider />

    </>
  );
}

export default Pdf;
