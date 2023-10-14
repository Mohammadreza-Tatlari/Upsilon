import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ galleryProps }: any) {
  return (
    <>
      <div className="max-w-2xl my-auto mx-auto bg-slate-50 rounded-s shadow-sm overflow-hidden hover:shadow-lg cursor-pointer">
        <div className="md:flex">
          <div className="md:shrink-0 ">
            {" "}
            {/* md:w-48 */}
            <img
              className="h-48 w-full object-cover  md:w-48" /* md:w-48 */
              alt={galleryProps.title}
              src={galleryProps.imageUrl}
            />
          </div>
          <div className="p-3 relative">
            <h2 className=" text-lg block tracking-wide  text-indigo-900">
              {/* name of the gallery */}
              {galleryProps.name}
            </h2>
            <div className="pb-4">
              {/* CLean UP needed */}
              <p className="text-slate-600 line-clamp-3 ">
                {/* {inUseData[1].description} */}
                {galleryProps.description}
                {/* Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that. */}
              </p>
            </div>
            {/* <p className="pt-1">location:Tehran</p> */}
            {/* <button className=" px-2 py-1 m-1 mb-2 float-right bg-white rounded-sm border-black border-2 hover:shadow-md">More information</button> */}
            <div className=" relative bottom-0 right-0 flex row-auto pb-2 pr-2 text-slate-500  md:absolute miniMobile:bg-inherit">
              <svg height={24} width={24} className="fill-slate-500">
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>{" "}
              <p>
                {/* Tehran */}
                {galleryProps.location}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//680px
