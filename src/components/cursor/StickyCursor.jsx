import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';

export default function StickyCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      const distance = { x: clientX - center.x, y: clientY - center.y };
      mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
      mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  useEffect(() => {
    
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="absolute bg-white rounded-full"
      />
    </div>
  );
}
