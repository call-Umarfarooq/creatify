import React from "react";
import { ThreeDotIonP } from "../utils/SvgIcons";
import Link from "next/link";

interface ProjectCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  editedDate: string;
  onOptionsClick?: () => void; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  videoUrl,
  thumbnailUrl,
  title,
  editedDate,
  onOptionsClick,
}) => {
  return (
    <Link href={"/projects/detail"} className="w-full relative group">
      <div className="group relative">
        <span
          data-slot="control"
          className="group-hover:visible invisible absolute top-2 left-2 z-30 group inline-flex focus:outline-none"
          role="checkbox"
          aria-checked="false"
          tabIndex={0}
          data-headlessui-state=""
        >
          <div className="relative isolate flex items-center justify-center rounded-[0.3125rem] border border-white/85 border-solid w-6 h-6"></div>
        </span>
        <div className="flex-col hover:shadow-focus-md fade-in animate-in cursor-pointer overflow-hidden rounded-2xl bg-area-container duration-200">
          <div className="relative aspect-[7/4] max-w-full">
            <div className="h-full w-full">
              <div className="relative h-full w-full">
                <video
                  preload="metadata"
                  poster={thumbnailUrl}
                  className="h-full w-full bg-white/5"
                  controlsList="nodownload"
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className=" bg-white/[0.03] ">
            <div className="flex h-[56px] items-center px-3 py-2">
              <div className="group/itf relative w-full overflow-hidden">
                <input
                  className="w-full text-ellipsis bg-transparent py-[2px] pr-5 text-color-title placeholder-color-support duration-200 peer outline-none"
                  value={title}
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center justify-between px-3 pb-2">
              <div className="w-full flex flex-row items-center gap-2">
                <div className="flex-none flex-row items-center gap-2">
                  <div className="rounded bg-white/[0.1]">
                    <p
                      data-slot="text"
                      className="font-normal pt-0.5 pr-1 pb-0.5 pl-1 text-white/[0.5] text-xs font-sans"
                    >
                      Video
                    </p>
                  </div>
                </div>
                <p
                  data-slot="text"
                  className="font-normal w-full flex-auto truncate text-nowrap text-[#FFFFFF]/[0.6] text-xs font-sans"
                >
                  Edited {editedDate}
                </p>
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg p-0 h-8 w-8 flex-none"
                  type="button"
                  onClick={onOptionsClick}
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <ThreeDotIonP />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-[2px] border-[#6c6cf5] flex top-0 left-0 z-10 h-full w-full flex-col items-center gap-y-2 rounded-2xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
     
      </div>
    </Link>
  );
};

export default ProjectCard;
