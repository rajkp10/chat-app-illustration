import React, { useRef } from "react";
import { motion } from "framer-motion";

function InputBar({ handleSubmit }) {
  const ref = useRef(null);

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0, transition: { delay: 2, ease: "easeInOut" } }}
      className="h-[8%] flex items-center p-2 gap-2 overflow-hidden mt-auto bg-white m-3 rounded-3xl"
    >
      {/* input area */}
      <input
        ref={ref}
        type="text"
        placeholder="Type a message..."
        className="w-full pl-2 text-xs outline-none placeholder:text-textPlaceholder text-textChatRight"
      />
      {/* send button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="button"
        className="rounded-full bg-submitButtonBackground"
        onClick={() => {
          handleSubmit(ref.current.value);
          ref.current.value = "";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 p-2 text-white"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}

export default InputBar;
