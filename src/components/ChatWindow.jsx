import React, { useEffect } from "react";
import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";
import RadioMessage from "./RadioMessage";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 2,
      when: "beforeChildren",
    },
  },
};

function ChatWindow({ messages }) {
  useEffect(() => {
    document.querySelector("#chat_window").scrollTop =
      document.querySelector("#chat_window").scrollHeight;
  }, [messages]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parent}
      id="chat_window"
      className="flex flex-col gap-2 py-3 overflow-y-scroll"
    >
      <TextMessage
        align={"start"}
        message={"That sounds great. I'd be happy with that."}
      />
      <TextMessage
        align={"start"}
        message={"Could you send over some pictures of your dog, please?"}
      />
      <ImageMessage />
      <TextMessage
        align={"end"}
        message={"Here are a few pictures. She's a happy girl!"}
      />
      <TextMessage align={"end"} message={"Can you make it?"} />
      <TextMessage
        align={"start"}
        message={
          "She looks so happy! The time we discussed works. How long shall I take her out for?"
        }
      />
      <RadioMessage />
      {messages.length !== 0 &&
        messages.map((message, i) => {
          return <TextMessage key={i} align={"end"} message={message} />;
        })}
    </motion.div>
  );
}

export default ChatWindow;
