import React from "react";
import "./IconSection.scss";

const IconSection = () => {
    const icons = [
        {
            src: "https://cdn.pixabay.com/photo/2022/04/05/02/49/icon-7112668_1280.png",
            alt: "Photo Icon",
            title: "Photo",
            description: "Compress your photos without losing quality.",
        },
        {
            src: "https://cdn-icons-png.freepik.com/512/8681/8681123.png",
            alt: "Video Icon",
            title: "Video",
            description: "Reduce video sizes effectively.",
        },
        {
            src: "https://cdn-icons-png.freepik.com/256/16425/16425681.png?semt=ais_hybrid",
            alt: "PDF Icon",
            title: "PDF",
            description: "Compress PDF files in seconds.",
        },
        {
            src: "https://png.pngtree.com/png-vector/20190406/ourmid/pngtree-doc-file-document-icon-png-image_913809.jpg",
            alt: "Document Icon",
            title: "Document",
            description: "Reduce the size of your documents.",
        },
        {
            src: "https://cdn-icons-png.flaticon.com/512/763/763812.png",
            alt: "Fast Compress Icon",
            title: "Fast Compress",
            description: "Quick and efficient compression.",
        },
        {
            src: "https://cdn-icons-png.flaticon.com/512/2592/2592258.png",
            alt: "Security Icon",
            title: "Security",
            description: "Your files are safe with us.",
        },
    ];

    return (
        <div className="container text-center icon-section">
            <div className="row g-4" style={{ gap: '20px' }}>
                {icons.map((icon, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        <div className="icon-box">
                            <img
                                src={icon.src}
                                alt={icon.alt}
                                className="img-fluid seticon mb-3"
                                width={50}
                                height={50}
                            />
                            <h3>{icon.title}</h3>
                            <p>{icon.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconSection;
