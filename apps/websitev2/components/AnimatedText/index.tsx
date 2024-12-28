"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";

export function AnimatedText({
  text,
  className,
  animate,
}: {
  text: string;
  className?: any;
  animate?: boolean;
}) {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: -24, opacity: 0, filter: "blur(24px)" },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
    }),
  };
  const ref = React.useRef(null);
  //@ts-ignore
  const isInView: any = useInView(ref, { once: true });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={
            animate == undefined
              ? isInView
                ? "animate"
                : ""
              : animate
                ? "animate"
                : ""
          }
          custom={i}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
