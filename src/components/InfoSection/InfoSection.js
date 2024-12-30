import React from "react";
import "./InfoSection.scss";

const InfoSection = () => {
    return (
        <div className="container p-0">
            <div className="info-section">
                {/* First Item */}
                <div className="image-box">
                    <img
                        src="/images/JPG.png"
                        alt="What is JPG? Info"
                        className="img-fluid setimg"
                    />
                </div>
                <div className="image-box image-box-one">
                    <h5>What is JPG?</h5>
                    <p>
                        A JPG (or JPEG) is a commonly used digital image file
                        format that stands for Joint Photographic Experts Group, the
                        organization that created the standard. It is widely used.
                    </p>
                </div>

                {/* Second Item */}
                <div className="image-box">
                    <h5>What is PNG?</h5>
                    <p>
                        PNG is a lossless image format that supports transparency
                        and is widely used for web graphics.
                    </p>
                </div>
                <div className="image-box">
                    <img
                        src="/images/png.png"
                        alt="What is PNG? Info"
                        className="img-fluid setimg"
                    />
                </div>

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
                        creating and editing text documents.
                    </p>
                </div>

                {/* Fourth Item */}
                <div className="image-box">
                    <h5>What is PDF?</h5>
                    <p>
                        PDF is a file format used to present documents independent
                        of software, hardware, or operating systems.
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
        </div>
    );
};

export default InfoSection;
