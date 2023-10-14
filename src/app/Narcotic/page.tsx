"use client"
//in this page all the content of Narcotic are placed here

import { useState } from "react";
import CategoryPage from "./main/page";
import { channelInstance } from "../InstanceData";
import SidebarItem from "../components/SidebarItem";

const channelData = channelInstance;
export default function Narcotic() {

  //Controlling Sidebar Visibility in Responsive Mode
  const [sidebarIsActive , setSidebarIsActive] = useState<boolean>(false)
  //this State is used for holding Data(name) that is being received from a child Component (Side Bar Items)
  const [ItemName , setItemName] = useState("")
  const [ItemTitle, setItemTitle] = useState("")
  const [ItemImage , setItemImage] = useState("")

  function handleActiveHumbergerSidebar(){
    setSidebarIsActive(!sidebarIsActive);
  }

  //handling data that comes from each Item in sidebar and set them 
  function handlePassItemName(recievedName:any , recievedtitle:any ,receivedImage: any){
    setItemName(recievedName)
    setItemTitle(recievedtitle)
    setItemImage(receivedImage)
    console.log("handlePassItemName in Narcotic SideBar is working", recievedName);
  }
  
  return (
    <>
      <button
      onClick={handleActiveHumbergerSidebar}
        className={(sidebarIsActive? " focus:border-2" : "inline-flex") +" items-center p-2 mt-2 ml-3 text-sm rounded-sm lg:hidden  text-gray-900 hover:text-white hover:bg-gray-950 focus:border-gray-900 "}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="flex relative ">
      <aside
        onMouseLeave={handleActiveHumbergerSidebar}
        //w-2/4
        // 
          className={(sidebarIsActive ? "" : "max-lg:hidden") + " relative max-lg:border-2 justify-center border-black bg-slate-50 z-40 max-lg:absolute top-0 left-0 w-1/3 max-lg:w-2/3 max-xl:w-1/2 max-2xl:w-2/5 h-full"}
        >
          <div className=" items-center md:absolute mx-auto w-full h-full px-1 py-4 pt-0 relative">
            <ul className=" space-y-2 min-w-full font-medium bg-white my-4 text-slate-900">
              {/* Displaying Items base on datas in InstanceData.js that are related to each page */}
            {channelData.map(channel => {           
              return(
                <>
                <SidebarItem 
                onItemClicked={handlePassItemName} 
                channel={{
                  id: channel.id,
                  name: channel.name,
                  channelImageUrl: channel.channelImageUrl,
                  channelDescription: channel.channelDescription,
                  title: channel.title
                }}/>
                </>
              )
            })}      
            </ul>
          </div>
        </aside>
        {/* this part is the mainpage of Narcotic which Contents are held within */}
        {/* Name and Title are being passed from sidebar Items into Categorypage */}
        <CategoryPage PassedSidebarName={ItemName} PassedSidebarTitle={ItemTitle} passedImage={ItemImage}/>
      </div>
    </>
  );
}
