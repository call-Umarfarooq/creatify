import React, { useState } from "react";
import { ThreeDotIonP } from "../utils/SvgIcons";
import Link from "next/link";

interface ProjectCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  editedDate: string;
  onOptionsClick?: () => void;
  ischeck?:any
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  videoUrl,
  thumbnailUrl,
  title,
  editedDate,
  onOptionsClick,
  ischeck
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Link href={"/projects/detail"} className="w-full relative group">
      <div className="group relative">
        <span
          data-slot="control"
          className={`group-hover:visible ${(isChecked || ischeck )? 'visible':'invisible '} absolute top-2 left-2 z-30 group inline-flex focus:outline-none `}
          role="checkbox"
        >
          <div
            className={`relative isolate flex items-center justify-center rounded-[0.3125rem] border border-white/85 border-solid w-6 h-6 ${
              (isChecked || ischeck) ? "bg-[#6c6cf5]" : "bg-transparent"
            }`}
            onClick={(e) => {
              e.preventDefault(); // Prevent the link click
              setIsChecked((prev) => !prev);
            }}
          >
            {/* Checkmark Icon */}
            {(isChecked || ischeck) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </span>
        <div className={`absolute border-[2px] border-[#6c6cf5] flex top-0 left-0 z-10 h-full w-full flex-col items-center gap-y-2 rounded-2xl ${(isChecked || ischeck )? 'opacity-100':''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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
    </Link>
  );
};

export default ProjectCard;
