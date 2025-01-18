import { motion } from "framer-motion";

export function MotionCorporateLine() {
  return (
    <motion.svg
      width="327"
      height="480"
      viewBox="0 0 327 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // repeat: Infinity,
          // repeatType: "loop",
          // repeatDelay: 1,
        }}
        opacity="0.5"
        d="M-54 337L167.5 115.5"
        stroke="#1D2231"
        strokeWidth="2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // repeat: Infinity,
          // repeatType: "loop",
          // repeatDelay: 1,
        }}
        opacity="0.5"
        d="M-54 479L128 297"
        stroke="#1D2231"
        strokeWidth="2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // repeat: Infinity,
          // repeatType: "loop",
          // repeatDelay: 1,
        }}
        opacity="0.5"
        d="M-54 431L284 93"
        stroke="#1D2231"
        strokeWidth="2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          // repeat: Infinity,
          // repeatType: "loop",
          // repeatDelay: 1,
        }}
        opacity="0.5"
        d="M-54 381L326 1"
        stroke="#1D2231"
        strokeWidth="2"
      />
    </motion.svg>
  );
}
