
import React, { useState } from "react";

interface TextboxProp {
author: string,
body: string,
releaseDate: string,
}
export default function Textbox({author , body, releaseDate}:TextboxProp) {

    const [showless , setShowless] = useState<boolean>(false)
        
  return (
    <>
      <div className="relative bg-slate-50 border-slate-800 px-2 py-1 rounded-md mx-2 border-b-2 ">
        {/* Author Name */}
        <p>{author}</p>
        {/* Data 23/1/22 */}
        <p className="text-slate-500">{releaseDate}</p>
        <div className="w-auto p-1 my-2 mx-1 mb-6">
            {/* paragraph body */}
          <p className={(showless ? "" : "line-clamp-3") }>
            {body}
          </p>
        </div>
        <p className="pb-1">Channel Name</p>
        <button 
        onClick={() => {setShowless(!showless)}}
        className="absolute right-0 bottom-0 p-2 m-2 text-slate-500 hover:text-slate-950 hover:underline">{showless ? "Show Less" : "Show More"}</button>
      </div>
    </>
  );
}
