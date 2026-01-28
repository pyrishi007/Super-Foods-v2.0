import "./shimmer.css";
import { gsap } from "gsap";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const Shimmer = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const pizzaRef = useRef(null);
  const rollingPizzaRef = useRef(null);

  useImperativeHandle(ref, () => ({
    fadeOut: () => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          containerRef.current.style.display = "none";
        },
      });
    },
  }));

  useEffect(() => {
    const [superText, foodText] =
      containerRef.current.querySelectorAll(".merge-text");

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(superText, { y: 60, opacity: 0, duration: 0.8 });

    tl.from(foodText, { y: 60, opacity: 0, duration: 0.8 }, "-=0.4");

    tl.to(superText, { x: -159, duration: 1 });
    tl.to(foodText, { x: 170, duration: 1 }, "<");

    tl.to(superText, { y: 0, duration: 0.6 });
    tl.to(foodText, { y: -150, duration: 0.6 }, "<");
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <h1 className="merge-text">Super</h1>
      <h1 className="merge-text">Food's</h1>
    </div>
  );
});

export default Shimmer;
