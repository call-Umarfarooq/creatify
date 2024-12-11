import React from "react";
import { ThreeDot } from "../utils/SvgIcons";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  numImages: number;
  numVideos: number;
  onThreeDotClick?: () => void; // Optional callback for the ThreeDot button
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  numImages,
  numVideos,
  onThreeDotClick,
}) => {
  return (
    <div className="no-scrollbar relative mt-2 h-full w-full overflow-y-auto group">
      <div className="infinite-scroll-component__outerdiv">
        <div
          className="infinite-scroll-component"
          style={{ height: "auto", overflow: "auto" }}
        >
          <div className="flex-col hover:shadow-focus-md fade-in animate-in cursor-pointer overflow-hidden rounded-2xl bg-area-container duration-200">
            {/* Image Section */}
            <div className="relative h-40 w-full">
              <img
                className="h-full w-full rounded-t-2xl object-cover"
                src={imageSrc}
                alt="Product Thumbnail"
              />
            </div>

            {/* Title Section */}
            <div className="bg-white/[0.05]">
              <div className="flex h-[56px] items-center px-3 py-2">
                <div className="group/itf relative w-full overflow-hidden">
                  <input
                    className="w-full text-ellipsis bg-transparent py-[2px] pr-5 text-color-title placeholder-color-support duration-200 peer caret-brand selection:bg-ux-purple-select border-[1px] border-transparent border-solid outline-none hover:cursor-pointer focus:cursor-text focus:!border-solid focus:border-b-brand group-hover/itf:border-b-brand group-hover/itf:border-dashed"
                    value={title}
                    readOnly
                  />
                  <div className="translate-x-5 overflow-hidden duration-200 -translate-y-1/2 absolute top-1/2 right-0 w-5 flex-center hover:translate-x-0 peer-hover:translate-x-0 peer-focus:translate-x-5">
                    {/* Placeholder for Icon Component */}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 pb-2">
                <p className="font-normal text-white/[.60] text-xs font-sans">
                  <span>{numImages}</span>&nbsp;images, <span>{numVideos}</span>
                  &nbsp;videos
                </p>
                <div>
                  <div
                    className="inline-flex w-auto cursor-pointer bg-transparent focus:border-none focus:outline-none"
                    aria-expanded="false"
                  >
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out rounded-lg p-0 h-8 w-8"
                      onClick={onThreeDotClick}
                    >
                      <ThreeDot />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hover Overlay */}
      <div className="absolute border-[2px] border-[#6c6cf5] flex top-0 left-0 z-10 h-full w-full flex-col items-center gap-y-2 rounded-2xl bg-[#000000]/[.80] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={'/link-to-video/edit-product'}
          data-loading="false"
          className="inline-flex bg-[#6c6cf5] mt-5 items-center justify-center whitespace-nowrap gap-2.5 h-12 rounded-2xl px-5 w-32"
        >
          <div>Create video</div>
        </Link>
        <button
          data-loading="false"
          className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 border border-current hover:text-white/[0.5] active:text-white/[0.3] :border-white/[0.24] disabled:text-white/[0.24] h-12 rounded-2xl px-5 w-32"
        >
          <Link href={'products/detail'} >Manage assets</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
