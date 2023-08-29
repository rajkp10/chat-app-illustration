import React, { useState } from "react";
import UserPanel from "./UserPanel";
import ChatWindow from "./ChatWindow";
import InputBar from "./InputBar";
import { motion } from "framer-motion";

function Mobile() {
  const [messages, setMessages] = useState([]);
  const handleSubmit = (value) => {
    if (!value) {
      return;
    }
    setMessages([...messages, value]);
  };

  return (
    <section className="grid flex-1 place-content-center">
      {/* mobile phone */}
      <motion.div
        initial={{
          clipPath: "polygon(-20% -20%, -20% -20%, -20% 100%, -20% 100%)",
          scale: 1,
        }}
        animate={{
          clipPath: "polygon(-20% -20%, 120% -20%, 120% 110%, -20% 120%)",
          scale: [1.1, 1],
          transition: { duration: 1.5 },
        }}
        className="relative flex flex-col w-[290px] shadow-2xl border-8 border-white outline-white rounded-3xl h-[540px] bg-appBackground overflow-hidden"
      >
        {/* mobile notch */}
        <div className="absolute left-0 right-0 z-30 w-[60%] h-5 mx-auto bg-white rounded-b-3xl"></div>
        {/* mobile screen header wrapper */}
        <UserPanel />
        <ChatWindow messages={messages} />
        <InputBar handleSubmit={handleSubmit} />
      </motion.div>
    </section>
  );
}

export default Mobile;
