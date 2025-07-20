import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-button"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <style jsx>{`
        .scroll-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: #4ade80;
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(74, 222, 128, 0.3);
          transition: all 0.3s ease;
          z-index: 1000;
          animation: fadeInUp 0.3s ease;
        }

        .scroll-button:hover {
          background: #22c55e;
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(74, 222, 128, 0.4);
        }

        .scroll-button:active {
          transform: translateY(-1px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .scroll-button {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;