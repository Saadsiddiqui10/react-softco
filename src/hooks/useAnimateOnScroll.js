import { useEffect } from "react";

const useAnimateOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".pop-up, .card, .fade-in").forEach(el => observer.observe(el));
  }, []);
};

export default useAnimateOnScroll;
