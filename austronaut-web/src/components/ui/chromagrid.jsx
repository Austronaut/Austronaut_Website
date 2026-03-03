"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items = [],
  onSelect,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item) => {
    // Option 2: parent controls selection/navigation
    if (onSelect) return onSelect(item);

    // Optional: allow external links if provided
    if (item?.href) window.open(item.href, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full grid grid-cols-[repeat(auto-fill,360px)] justify-center gap-6 ${className}`}
      // className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
      // className={`relative w-full h-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-start gap-3 ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {items.length === 0 && (
        <p className="text-white/60">No items to display</p>
      )}

      {items.map((c, i) => (
        <article
          key={c.id ?? c.slug ?? i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c)}
          className={`group relative flex flex-col w-[360px] h-[320px] rounded-[20px] overflow-hidden border border-white/20 transition-colors duration-300 ${
            onSelect || c.href ? "cursor-pointer" : "cursor-default"
          }`}
        >
          {/* Background image */}
          {c.image && (
            <img
              src={c.image}
              alt={c.title || "card image"}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Spotlight effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />

          {/* Gradient overlay + text */}
          <div className="relative z-10 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
            <h3 className="text-[1.05rem] font-inter-bold text-white mb-1">
              {c.title}
            </h3>
            {c.subtitle && (
              <p className="text-[0.85rem] opacity-85 font-inter-regular text-gray-300">
                {c.subtitle}
              </p>
            )}
          </div>
        </article>
      ))}

      {/* overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(0.6) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(0.6) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />

      {/* fade */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(0.6) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(0.6) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
