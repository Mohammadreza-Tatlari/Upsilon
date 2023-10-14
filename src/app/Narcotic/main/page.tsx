"use client"
//all 3 categories are placed here and it flows data between Narcotic Page and each Category section
import CategoryCard from "@/app/components/CategoryCard";
import { useState, useEffect } from "react";
import ScriptPage from "./[script]/ScriptPage";
import ImagePage from "./[images]/ImagePage";
import MusicPage from "./[music]/MusicPage";

// Name and Title are being passed from sidebar Items into Categorypage
export default function CategoryPage({
  PassedSidebarName,
  PassedSidebarTitle,
  passedImage
}: any) {
  //this const is a mock to map over it and display the category Cards base on Content
  const AllMediaTypes = ["Image", "Music", "Script"];
  //checks each categroy type and then display the content that is related to that kind of category
  const [mediaType, setMediaType] = useState<
    "Music" | "Script" | "Image" | null
  >(null);

  console.log("type of", typeof PassedSidebarName);
  
  
  //this function recieves the category name and its type then accessibility to the data can be feasible
  function handleSelectedCategory(receivedMediaType: any, recievedName: any) {
    console.log(
      "Data that comes from Each Categroy Section",
      "media:",
      receivedMediaType,
      "name:",
      recievedName
    );
    setMediaType(receivedMediaType);
  }

  
  //this useEffect function is here only for sanity cheking
  useEffect(() => {
    console.log("mainpage Narcotic MediaType is:", mediaType);
  }, [mediaType]);

  return (
    <>
    
    {/* if media type is Image which it means that Image Category is selected. then set the page styling to this property */}
      <div className={(mediaType === "Image" ? "w-2/3 lg:w-full" : "") + "w-2/3 max-lg:w-full pl-2 h-screen border-l-2 border-black "}>
        {/* if the mediatype is NUll then display categroy list so user can select */}
        { PassedSidebarName ? mediaType == null && (
          <div className="mt-10 space-y-3 mx-auto">
            {AllMediaTypes.map((Content) => (
              <CategoryCard
                onCategoryClick={handleSelectedCategory}
                Property={{
                  OriginName: PassedSidebarName,
                  //channelName: "ChannelName",
                  channelTitle: PassedSidebarTitle,
                  media: Content,
                  imageOfSidebarItem:passedImage
                }}
              />
            ))}
          </div>
        )  : <div className="flex justify-center items-center h-full"> 
        <h3 className="text-lg font-serif rounded-full bg-gray-400 text-white text-center py-1 px-3">no channel is selected...</h3>
        </div>} 
        {}
        {/* IF any Category is Selected display that specific data which is related to that category */}
        {mediaType != null && (
          //when user clicks on previous page the MediaType returns to null so the category list will be displayed
          <button
            onClick={() => setMediaType(null)}
            className="border-2 border-slate-900 rounded-xl p-1 hover:bg-slate-100"
          >
            Return To Category Page - {mediaType} Page
          </button>
        )}
        {mediaType == "Script" && (
          <>
            <ScriptPage passedTitle={PassedSidebarTitle} passedName={PassedSidebarName} />
          </>
        )}
        {mediaType == "Music" && (
          <>
            <MusicPage passedTitle={PassedSidebarTitle} passedName={PassedSidebarName}/>
          </>
        )}
        {mediaType == "Image" && (
          <>
            <ImagePage passedTitle={PassedSidebarTitle} passedName={PassedSidebarName}/>
          </>
        )}
      </div>
    </>
  );
}
