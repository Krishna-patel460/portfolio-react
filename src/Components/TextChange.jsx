import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I am Krishna", "Frontend Developer", "UI/UX Designer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // When typing complete
      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // When deleting complete
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <div className="transition duration-300 text-[#FF69B4] font-bold text-center md:text-left">
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TextChange;

