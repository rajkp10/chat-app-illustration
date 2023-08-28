import React from "react";

function TextMessage({ align, message }) {
  const alignMessage = align === "end" ? "self-end" : "self-start";
  const textColor =
    align === "end" ? "text-textChatRight" : "text-textChatLeft";
  const bg = align === "end" ? "bg-white" : "bg-bgChatLeft";
  const shadow = align === "end" ? "shadow-md" : "";
  const drop = align === "end" ? "rounded-ee-sm" : "rounded-es-sm";
  console.log(align);
  return (
    <span
      className={`p-[0.3rem] px-2 mx-2 rounded-xl w-fit max-w-[60%] ${drop} ${alignMessage} ${bg} ${textColor} ${shadow} text-[10px]`}
    >
      {message}
    </span>
  );
}

export default TextMessage;
