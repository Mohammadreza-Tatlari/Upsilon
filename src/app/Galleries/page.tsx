import React from "react";
import ArticleCard from "@/app/components/ArticleCard";
import { GalleryInfoInstance } from "../../app/InstanceData";
import Link from "next/link";
const inUseData = GalleryInfoInstance;

export default function GalleryPage() {

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className=" gap-2 grid lg:grid-cols-2 ">
          {inUseData.map((data) => {
            return (
              <>
                <Link href={`/Galleries/${data.id}`}>
                  <ArticleCard key={data.id} galleryProps={data} />
                </Link>
              </>
            );
          })}
          container
        </div>
      </div>
    </>
  );
}
