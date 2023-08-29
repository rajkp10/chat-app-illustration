import React from "react";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 1,
      when: "beforeChildren",
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={parent}
      className="flex flex-col flex-1 gap-6"
    >
      <motion.span
        variants={child}
        className="text-4xl font-medium text-center md:text-left text-textMainHeading "
      >
        Simple booking
      </motion.span>
      <motion.p
        variants={child}
        className="leading-7 text-center text-textParagraph md:text-left"
      >
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </motion.p>
    </motion.section>
  );
}

export default Hero;
