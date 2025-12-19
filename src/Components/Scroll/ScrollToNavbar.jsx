import React, { useEffect, useState } from "react";

const ScrollToNavbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToNavbar = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      window.scrollTo({
        top: navbar.offsetTop - navbarHeight - 10, // adjust as needed
        behavior: "smooth",
      });
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={goToNavbar}
      className="fixed bottom-6 right-6 z-50
                 bg-[#FF69B4] text-white
                 p-3 rounded-full shadow-lg
                 hover:bg-[#EC407A] hover:scale-110 transition-all duration-300"
      aria-label="Go to navbar"
    >
      ↑
    </button>
  );
};

export default ScrollToNavbar;


