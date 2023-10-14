import React from "react";

import { ImagePageInstances } from "@/app/InstanceData";

const firstCols = ImagePageInstances.firstCol;
const secondCols = ImagePageInstances.secondCol;
const thirdCols = ImagePageInstances.thirdCol;

export default function ImagePage({ passedName, passedTitle }: any) {
  const Mcard = ({ source }: any) => (
    <li className="text-sm leading-6  hover:cursor-pointer hover:scale-105 transition-all duration-150">
      <img className="h-auto max-w-full rounded-sm" src={source} alt="" />
    </li>
  );
  return (
    <>
      <div className="relative">
        <span className="my-2 text-sm">
         {passedName ?  passedName + " " + passedTitle : "No channel is Selected!" }        
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ul className="space-y-3">
          {firstCols.map((item) => (
            <Mcard source={item.imagesource} />
          ))}
        </ul>
        <ul className="space-y-3">
          {secondCols.map((item) => (
            <Mcard source={item.imagesource} />
          ))}
        </ul>
        <ul className="space-y-3">
          {thirdCols.map((item) => (
            <Mcard source={item.imagesource} />
          ))}
        </ul>
      </div>
    </>
  );
}
