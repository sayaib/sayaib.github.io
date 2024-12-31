import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: " What is the DevSnip Pro extension?",
      answer:
        "The DevSnip Pro extension is an all-in-one tool designed for software developers, providing code snippets and a vibrant debugger to enhance productivity in Visual Studio Code",
    },
    {
      question: "How can I install the DevSnip Pro extension?",
      answer:
        "You can install the DevSnip Pro extension directly from the Visual Studio Code Marketplace by searching for DevSnip Pro or by visiting its specific page and clicking the install button.",
    },
    {
      question: "Is the DevSnip Pro extension free?",
      answer:
        "Yes, the DevSnip Pro extension is available for free on the Visual Studio Code Marketplace.",
    },
    {
      question: "Who developed the DevSnip Pro extension?",
      answer: "The DevSnip Pro extension was developed by Sayaib Sarkar.",
    },
    {
      question: "How many installs does the DevSnip Pro extension have?",
      answer:
        "As of now, the DevSnip Pro extension has been installed over 40 thousand plus times.",
    },
    {
      question:
        "Where can I find support if I encounter issues with installation?",
      answer:
        "If you have trouble installing the extension, you can look for troubleshooting tips in the Trouble Installing? section on its Marketplace page or check the Q & A section for common issues and solutions",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-body">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <span className="faq-icon"></span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
