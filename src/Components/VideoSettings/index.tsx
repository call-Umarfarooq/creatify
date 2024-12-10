import React from "react";
import NavTwo from "../Elements/NavTwo";
import {
  ImageIcon10,
  ImageIcon11,
  ImageIcon12,
  ImageIcon13,
  ImageIcon6,
  ImageIcon7,
  ImageIcon8,
  ImageIcon9,
} from "../utils/SvgIcons";
import Link from "next/link";

const VideoSettings = () => {
  const ratios = [
    { label: "9:16", width: "8px", height: "16px", key: "ratio1" },
    { label: "16:9", width: "16px", height: "8px", key: "ratio2" },
    { label: "1:1", width: "14px", height: "14px", key: "ratio3" },
  ];
  const ImageIcons = [
    { component: <ImageIcon6 />, key: "icon6" },
    { component: <ImageIcon7 />, key: "icon7" },
    { component: <ImageIcon8 />, key: "icon8" },
    { component: <ImageIcon9 />, key: "icon9" },
    { component: <ImageIcon10 />, key: "icon10" },
    { component: <ImageIcon11 />, key: "icon11" },
    { component: <ImageIcon12 />, key: "icon12" },
  ];

  const durations = [
    { time: 15, label: "s" },
    { time: 30, label: "s" },
    { time: 60, label: "s" },
  ];

  return (
    <div className="bg2 gradient-bg1">
      <div className="relative  linearG h-screen w-screen flex-col overflow-x-hidden sm:pt-[98px] lg:pt-[72px]">
        <NavTwo />
        <div className="relative  top-0 left-0 h-full overflow-y-auto">
          <div className="flex  mx-auto flex-col text-white h-full max-w-[720px]  ">
            <div className=" space-y-6">
              <div className="pt-6 text-title-h3">Video settings</div>
              <div className="w-full flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">Platform</div>
                </div>
                <div className="w-full flex-row flex-wrap flex gap-3">
                  <div className="relative cursor-pointer hover:opacity-100">
                    <div className="size-10 flex justify-center items-center cursor-pointer rounded-xl border-[1.5px] border-solid text-white hover:border-brand w-[92px] border-brand bg-area-container-purple">
                      General
                    </div>
                  </div>

                  {ImageIcons.map((icon, index) => (
                    <div
                      className="relative cursor-pointer hover:opacity-100"
                      key={icon.key || index}
                    >
                      <div className="size-10 flex justify-center items-center cursor-pointer rounded-xl border-[1.5px] border-transparent border-solid text-white hover:border-brand bg-area-container">
                        {icon.component}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">
                    Aspect ratio
                  </div>
                </div>

                <div className="w-full flex-row flex-wrap flex gap-3">
                  {ratios.map((ratio, index) => (
                    <div
                      className="relative cursor-pointer hover:opacity-100"
                      key={ratio.key}
                    >
                      <div
                        className={`h-10 w-[92px] flex justify-center items-center cursor-pointer rounded-xl border-[1.5px] border-solid text-white border-brand1 border-transparent   bg-area-container ${
                          index === 0
                            ? "bg-area-container-purple border-brand"
                            : ""
                        } `}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div
                            className="rounded-sm border border-solid"
                            style={{ height: ratio.height, width: ratio.width }}
                          ></div>
                          <p
                            data-slot="text"
                            className="font-normal text-white text-sm font-sans"
                          >
                            {ratio.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">Duration</div>
                </div>
                <div className="flex w-full flex-wrap flex-col gap-3">
                  {durations.map((duration, index) => (
                    <div
                      className="relative cursor-pointer hover:opacity-100"
                      key={index}
                    >
                      <div
                        className={`h-10 w-[92px] flex justify-center items-center cursor-pointer rounded-xl border-[1.5px] border-brand1 border-solid text-white backdrop-blur-sm hover:border-brand ${
                          index === 0
                            ? "border-brand bg-area-container-purple"
                            : "border-transparent bg-area-container"
                        }`}
                      >
                        {duration.time} <span>{duration.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">Language</div>
                </div>
                <button
                  type="button"
                  className="group flex items-center justify-between whitespace-nowrap outline-none select-none disabled:pointer-events-none text-color-title text-body-md bg-area-container border-solid hover:bg-ux-hover active:border-brand border border-transparent data-[state=open]:border data-[state=open]:border-brand disabled:bg-area-container !pr-2 gap-1 data-[placeholder]:text-color-support data-[disabled]:!text-color-disable hover:transition-[background-color] hover:duration-300 ease-in-out h-10 rounded-xl pl-[10px] w-[300px]"
                >
                  <div className="w-fit truncate">
                    <span style={{ pointerEvents: "none" }}>
                      <div className="!truncate w-full">English</div>
                    </span>
                  </div>
                  <ImageIcon13 />
                </button>
              </div>
              <div className="w-full flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">
                    Target audience
                  </div>
                </div>
                <div className="box-border border border-transparent bg-area-platform relative min-h-[60px] flex-col gap-1 hover:border-brand has-[:disabled]:cursor-not-allowed has-[:focus]:border-brand transition-colors rounded-2xl pl-3 py-[14px] pr-3 h-[80px] w-full">
                  <textarea
                    className="h-full resize-none bg-transparent text-body-md text-color-title placeholder:text-color-support focus:outline-none disabled:text-color-disable"
                    placeholder="e.g. outdoor lover"
                  ></textarea>
                </div>
                <div className="flex mt-2 w-full flex-wrap gap-2">
                  {[
                    "Casual fashion enthusiasts",
                    "Urban streetwear fans",
                    "Graphic tee collectors",
                    "Sustainable fashion advocates",
                    "Fitness apparel users",
                    "Local brand supporters",
                    "Trendy lifestyle followers",
                  ].map((label, index) => (
                    <div
                      key={index}
                      className="flex h-6 cursor-pointer items-center justify-center rounded-full bg-area-container px-3 text-body-sm text-color-body hover:bg-ux-hover active:bg-ux-press md:rounded-full"
                    >
                      <span className="h-4 p-0 text-body-sm text-color-body">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex h-20 mt-3 w-full flex-none items-center justify-center gap-4">
                <Link href="/tool/link-to-video/edit-product?flowId=2feb5117-e158-4217-b251-da8ff2f7f025">
                  <button
                    data-loading="false"
                    className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-10 rounded-xl px-3 w-[108px]"
                  >
                    <div>Back</div>
                  </button>
                </Link>
                <Link href="/tool/link-to-video/preparing?flowId=2feb5117-e158-4217-b251-da8ff2f7f025&step=video-setting">
                  <button
                    data-loading="false"
                    className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-10 rounded-xl px-3 w-[108px]"
                  >
                    <div>Next</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSettings;
