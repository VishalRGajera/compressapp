import React, { useEffect, useState } from "react";
import "./ImageSlider.scss";

const images = [
    { src: "./images/Slider_Image_1.png", alt: "Image 1" },
    { src: "./images/Slider_Image_2.png", alt: "Image 2" },
    { src: "./images/Slider_Image_3.png", alt: "Image 3" },
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, }}
            >
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
