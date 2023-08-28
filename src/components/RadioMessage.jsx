import React from "react";

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

function RadioMessage() {
  return (
    <>
      {options.map((option) => {
        return (
          <label
            htmlFor={option.id}
            key={option.id}
            className="p-2 mx-2 flex justify-between items-center rounded-xl rounded-es-sm w-[75%] bg-gradient-to-r from-gradientColor1 to-gradientColor2 text-white"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="option"
                id={option.id}
                className="hidden peer"
              />
              <div className="w-3 h-3 rounded-full outline outline-1 outline-offset-1 outline-white peer-checked:bg-white"></div>
              <span className="text-[10px]">{option.message}</span>
            </div>
            <span className="text-sm font-bold">&#x24;{option.price}</span>
          </label>
        );
      })}
    </>
  );
}

export default RadioMessage;
