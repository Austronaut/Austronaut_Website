import React from "react";

export default function Popup() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md text-white px-4 py-3 flex justify-between items-center shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-row space-between items-center">
        <span className="text-sm sm:text-md font-inter-bold tracking-tight">
         APPLICATIONS OPEN FOR MARKETING TEAM
        </span>
        <a
          href="https://forms.gle/z7KMGXxQh3BNH6oj6"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-sm text-center sm:text-md font-inter-bold tracking-tight px-3 py-1 rounded-lg border border-white bg-black text-white hover:border-yellow-400 hover:text-yellow-400 transition"
        >
          APPLY NOW!
        </a>
      </div>
    </div>
  );
}
