import { useEffect, useState, useRef } from "react";

export const FadeSlideUp = ({ children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      // Quando o topo do elemento estiver dentro da viewport (90% da altura da janela)
      const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      setVisible(isInView);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // checar no load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
