import { useState, useEffect } from "react";
import backToTopImg from "../style/assets/icons/floatingElements/up-arrow.png";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-4 left-4 p-4 text-white rounded-full focus:outline-none transition`}
      onClick={scrollToTop}
    >
      <img className="w-16" src={backToTopImg} alt="Back to Top" />
    </button>
  );
};

export default BackToTopButton;
