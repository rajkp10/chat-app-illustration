import React from "react";
import UserPanel from "./UserPanel";
import ChatWindow from "./ChatWindow";
import InputBar from "./InputBar";

function Mobile() {
  return (
    <section className="grid flex-1 place-content-center">
      {/* mobile phone */}
      <div className="relative flex flex-col w-[290px] border-white shadow-2xl border-8 rounded-3xl h-[540px] bg-appBackground overflow-hidden">
        {/* mobile notch */}
        <div className="absolute left-0 right-0 z-30 w-1/2 h-5 mx-auto bg-white rounded-b-3xl"></div>
        {/* mobile screen header wrapper */}
        <UserPanel />
        <ChatWindow />
        <InputBar />
      </div>
    </section>
  );
}

export default Mobile;
