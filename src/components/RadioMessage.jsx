import React from "react";
import { motion } from "framer-motion";

const options = [
  {
    id: 1,
    message: "30 minute walk",
    price: "29",
  },
  {
    id: 2,
    message: "1 hour walk",
    price: "49",
  },
];

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

function RadioMessage() {
  return (
    <>
      {options.map((option) => {
        return (
          <motion.label
            variants={child}
            whileTap={{ scale: 0.9 }}
            htmlFor={option.id}
            key={option.id}
            className="p-2 mx-2 flex justify-between items-center rounded-xl rounded-es-sm w-[75%] bg-gradient-to-r from-gradientColor1 to-gradientColor2 text-white cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="option"
                id={option.id}
                className="hidden peer"
              />
              <div className="w-3 h-3 transition duration-200 rounded-full outline outline-1 outline-offset-1 outline-white peer-checked:bg-white"></div>
              <span className="text-[10px]">{option.message}</span>
            </div>
            <span className="text-sm font-bold">&#x24;{option.price}</span>
          </motion.label>
        );
      })}
    </>
  );
}

export default RadioMessage;
