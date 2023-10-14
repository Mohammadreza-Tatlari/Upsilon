import React from "react";

interface CategoryProps{
  Property:{
  media: string | null,
  //channelName: string | null,
  OriginName: string | null,
  channelTitle:string | null,
  imageOfSidebarItem: string
};
onCategoryClick: ( CategoryMedia: any , categoryTitle: any) => void
}
export default function CategoryCard({Property , onCategoryClick}:CategoryProps) {
  function handleCategoryInfo(){
    onCategoryClick(Property.media , Property.channelTitle)
  }
  return (
    <>
      <div onClick={handleCategoryInfo} className="max-w-2xl  bg-white rounded-sm shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg hover:cursor-pointer">
        <div className="hover:scale-95 transition-all duration-150">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={Property.imageOfSidebarItem}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8 relative my-auto">
            <div className="uppercase tracking-wide my-auto text-xl text-black font-semibold">
              {Property.media}
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-slate-500">
              {/* Origin Name is the name that is passed from Sidebar Items */}
              Latest {Property.media}s that has been shared in <span className="text-black font-extrabold">{Property.OriginName}</span>
            </p>
            {/* <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p> */}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
