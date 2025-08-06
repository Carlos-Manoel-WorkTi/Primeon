import { useEffect, useState, useRef } from "react";

type FadeSlideProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right";
  duration?: number; // duração em segundos
};

export const FadeSlide = ({ children, delay = 0, direction = "left", duration = 0.6 }: FadeSlideProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      setVisible(isInView);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translateX = visible ? "0" : direction === "left" ? "-20px" : "20px";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateX(${translateX})`,
        transition: `opacity ${duration}s ease ${delay}ms, transform ${duration}s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
