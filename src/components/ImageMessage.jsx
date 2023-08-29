import React from "react";
import dog1 from "../assets/dog-image-1.jpg";
import dog2 from "../assets/dog-image-2.jpg";
import dog3 from "../assets/dog-image-3.jpg";
import { motion } from "framer-motion";

const dogs = [
  {
    id: 1,
    img: dog1,
  },
  {
    id: 2,
    img: dog2,
  },
  {
    id: 3,
    img: dog3,
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

function ImageMessage() {
  return (
    <motion.div variants={child} className="flex self-end gap-1 mx-2">
      {dogs.map((dog) => {
        return (
          <img
            key={dog.id}
            src={dog.img}
            alt={dog.id}
            className="w-12 h-12 rounded-xl"
          />
        );
      })}
    </motion.div>
  );
}

export default ImageMessage;
