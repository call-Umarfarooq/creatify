"use client";

import { Lock } from "@icon-park/react";
import { useRef } from "react";
import { ThreeDot } from "../utils/SvgIcons";

interface CustomAvtrCardProps {
  videoSrc: string;
  posterSrc: string;
  userName: string;
  lockIcon?: boolean;
  holiday?:boolean;
  holidayText?:string
  onClickMoreOptions?: () => void;
}

const CustomAvtrCard: React.FC<CustomAvtrCardProps> = ({
  videoSrc,
  posterSrc,
  userName,
  lockIcon = true,
  holiday,
  holidayText,
  onClickMoreOptions,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className="flex-col group relative overflow-hidden rounded-2xl bg-black/20 cursor-pointer duration-200 hover:shadow-md m-2 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group relative aspect-square w-full">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster={posterSrc}
          src={videoSrc}
          loop
          muted
        />
        {lockIcon && (
          <div className="absolute bottom-3 left-3 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-400/40 backdrop-blur-md">
            <Lock theme="outline" size="16" />
          </div>
        )}
        {holiday && (
        <div className="absolute top-0 right-0 z-20">
          <div className="flex-center bg-area-container px-2 py-0.5 font-bold text-white/90 text-xs w-fit  rounded-bl-lg bg-gradient-to-br from-[#2C7A34] via-20% to-[#A23331] backdrop-blur-sm">
           {holidayText}
          </div>
        </div>
           )}
      </div>

      <div className="flex items-center justify-between h-14 px-4 bg-black/10">
        <span className="text-sm text-color-title font-medium truncate">
          {userName}
        </span>

        <button
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent hover:bg-gray-600"
          onClick={onClickMoreOptions}
        >
          <ThreeDot />
        </button>
      </div>
      <div className="absolute border-[2px] border-[#6c6cf5] flex top-0 left-0 z-10 h-full w-full flex-col items-center gap-y-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Optional hover content */}
      </div>
    </div>
  );
};

export default CustomAvtrCard;
