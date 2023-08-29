import React from "react";
import { motion } from "framer-motion";

const child = {
  hidden: {
    opacity: 0,
    y: 5,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function TextMessage({ align, message }) {
  const alignMessage = align === "end" ? "self-end" : "self-start";
  const textColor =
    align === "end" ? "text-textChatRight" : "text-textChatLeft";
  const bg = align === "end" ? "bg-white" : "bg-bgChatLeft";
  const shadow = align === "end" ? "shadow-md" : "";
  const drop = align === "end" ? "rounded-ee-sm" : "rounded-es-sm";

  return (
    <motion.span
      variants={child}
      className={`p-[0.3rem] px-2 mx-2 rounded-xl w-fit max-w-[60%] ${drop} ${alignMessage} ${bg} ${textColor} ${shadow} text-[10px]`}
    >
      {message}
    </motion.span>
  );
}

export default TextMessage;
