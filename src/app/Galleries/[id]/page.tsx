"use client";
import { GalleryInfoInstance } from "@/app/InstanceData";
import { useEffect, useState } from "react";

interface GalleryInfo{
  id: any,
  name: string,
  imageUrl: string;
  description: string,
  location: string
}

const inUseData = GalleryInfoInstance;
export default function Article({ params }: {params: {id: number}}) {
  const filteredItem = inUseData.filter(item => item.id == params.id);

  console.log("filtered data ",filteredItem);
  
  return (
    <>
      <div>single Article {params.id}</div>
      {filteredItem.map(itmes => {
      return(
        <>
        <ol key={itmes.id}>
        <li> {itmes.name}</li>
        <li> {itmes.description}</li>
        <li> {itmes.location}</li>
        <li> <img className="h-80 w-80W" src={itmes.imageUrl} alt={itmes.imageUrl} /></li>
        </ol>
        </>
      )
      })}
      <button>Back</button>
    </>
  );
}
