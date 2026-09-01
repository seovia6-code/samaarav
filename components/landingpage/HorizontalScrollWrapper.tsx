"use client";

import { useRef, ReactNode, Children } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScrollWrapper({ children }: { children: ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const numChildren = Children.count(children);
  
  // We make the container height proportional to the number of horizontal panels
  // so the scroll length feels natural.
  const heightStr = `${numChildren * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation. 
  // If there are N children, the container width is N * 100%. 
  // We need to translate by -((N-1)/N) * 100% to see the last child.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((numChildren - 1) / numChildren) * 100}%`]);

  return (
    <section ref={targetRef} style={{ height: heightStr }} className="relative bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x, width: `${numChildren * 100}vw` }} className="flex h-full">
          {Children.map(children, (child, i) => (
            <div key={i} className="h-full w-screen flex-shrink-0 overflow-y-auto overflow-x-hidden">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
