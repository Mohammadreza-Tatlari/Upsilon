import Player from "@/app/components/Player";
import Track from "@/app/components/Track";
import { MusicInstances } from "@/app/InstanceData";
import { useState } from "react";

const MusicData = MusicInstances;

export default function MusicPage({ passedName, passedTitle }: any) {
  //MusicPage Global States
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedMusic, setSelectedMusic] = useState<any>();
  const [trackDetail , setTrackDetail] = useState<any>()


  return (
    <>
      <div className="relative">
        <span className="my-2 text-sm">
         {passedName ?  passedName + " " + passedTitle : "No channel is Selected!" }        
        </span>
        <div className="relative">
          <Player
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            selectedMusic={selectedMusic}
            trackDetail={trackDetail}
          />
        </div>
        <div>
          <ul className="space-y-1 p-2 m-2 pb-32">
            {MusicData.map((track, index) => (
              <li key={track.id}>
                <Track
                  //passing data.js within iteration
                  track={track}
                  //passing MusicPage global states
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  selectedMusic={selectedMusic}
                  setSelectedMusic={setSelectedMusic}
                  isFirstTrack={index === 0}
                  setTrackDetail={setTrackDetail}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}


