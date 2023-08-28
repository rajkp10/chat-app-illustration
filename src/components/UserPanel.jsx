import React from "react";
import Avatar from "../assets/avatar.jpg";

function UserPanel() {
  return (
    <div className="z-20 h-[15%] flex items-end w-full bg-gradient-to-r from-gradientColor2 to-gradientColor1 shadow-lg rounded-b-lg">
      {/* mobile header section */}
      <div className="flex items-center justify-between w-full px-2 mb-2">
        {/* chevron-left */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 font-bold text-white cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
          {/* user avatar */}
          <img
            src={Avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full cursor-pointer outline-1 outline-white outline"
          />
          {/* user name and status */}
          <div className="flex flex-col">
            <span className="text-xs font-medium text-white">Samuel Green</span>
            <span className="text-[10px] text-textSubHeading">
              Available to Walk
            </span>
          </div>
        </div>
        {/* ellipsis-vertical */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-white cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default UserPanel;
