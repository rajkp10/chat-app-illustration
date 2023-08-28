import React from "react";
import dog1 from "../assets/dog-image-1.jpg";
import dog2 from "../assets/dog-image-2.jpg";
import dog3 from "../assets/dog-image-3.jpg";

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

function ImageMessage() {
  return (
    <div className="flex self-end gap-1 mx-2">
      {dogs.map((dog) => {
        return (
          <img
            key={dog.id}
            src={dog.img}
            alt={dog.id}
            className="w-10 h-10 rounded-xl"
          />
        );
      })}
    </div>
  );
}

export default ImageMessage;
