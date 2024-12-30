import React from "react";
import "./FAQSection.scss"; // Import the SCSS file for styles

const FAQSection = ({ faqs }) => {
    return (
        <div className="faq-section">
            <div className="text-center">
                <div className="faq-header">
                    <span>FAQs</span> About Our Compress Video Tool
                </div>
            </div>
            <div className="row gap-sm">
                {faqs.map((faq, index) => (
                    <div className="image-box col-md-6" key={index}>
                        <div className="faq-box">
                            <div className="faq-title">
                                <h4>{faq.question}</h4>
                            </div>
                            <div className="faq-text">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
