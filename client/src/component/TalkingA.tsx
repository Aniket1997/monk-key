import React from "react";
import { motion } from "framer-motion";

const TalkingAI: React.FC = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 200 200"
      style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
    >
      {/* AI Head */}
      <motion.circle
        cx="100"
        cy="80"
        r="50"
        fill="#4caf50"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <rect
        x="70"
        y="120"
        width="60"
        height="20"
        rx="10"
        fill="#4caf50"
      />

      {/* Eyes */}
      <motion.circle
        cx="85"
        cy="75"
        r="10"
        fill="#fff"
        animate={{
          scaleY: [1, 0.3, 1], // Blink
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      />
      <motion.circle
        cx="115"
        cy="75"
        r="10"
        fill="#fff"
        animate={{
          scaleY: [1, 0.3, 1], // Blink
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      />
      <circle cx="85" cy="75" r="5" fill="#000" />
      <circle cx="115" cy="75" r="5" fill="#000" />

      {/* Mouth */}
      <motion.path
        d="M80 95 Q100 115 120 95"
        stroke="#000"
        strokeWidth="3"
        fill="transparent"
        animate={{
          d: [
            "M80 95 Q100 115 120 95", // Neutral
            "M80 95 Q100 110 120 95", // Smile
            "M80 95 Q100 115 120 95", // Neutral
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Speech Bubble */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
      >
        <rect
          x="130"
          y="20"
          width="50"
          height="30"
          rx="5"
          ry="5"
          fill="#fff"
          stroke="#4caf50"
          strokeWidth="2"
        />
        <text x="135" y="40" fontSize="10" fill="#000">
          Hi there!
        </text>
      </motion.g>
    </motion.svg>
  );
};

export default TalkingAI;
