'use client'

import React, { useState } from "react";
import Layout from "../Elements/Layout";
import { ArrowBk, ThreeDotIonP } from "../utils/SvgIcons";
import { button, buttons } from "../utils/Array";
import SubscriptionModel from "../Elements/SubscriptionModel";

const Details = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = (buttonId: string) => {
    if (buttonId === "remove-watermark") {
        setIsModalOpen(true);
      } 
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <div className="no-scrollbar relative h-full flex-col overflow-y-auto rounded-2xl bg-white/[0.05]">
        <div className="page-in relative h-full flex-col text-white">
          <div className="w-full px-7 py-5">
            <button
              className="rounded-full text-white border-0 bg-transparent border-transparent relative isolate inline-flex items-center justify-center gap-x-2 text-base font-semibold font-sans data-[disabled]:opacity-50 opacity-50 hover:opacity-100 cursor-pointer px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm -ml-3"
              type="button"
            >
              <div className="h-[24px] w-[24px]">
                <ArrowBk />
              </div>
              <p className="font-normal text-[#9B9C9E] text-sm font-sans">
                M Umar Farooq's Workspace
              </p>
            </button>
            <div className="mt-4 line-clamp-1 font-bold text-3xl">vnvn</div>
            <div className="mt-3 flex flex-row justify-between">
              <div className="flex">
                <div className="flex-row flex gap-3">
                  {button.map((button) => (
                    <button
                
                      key={button.id}
                      className="text-black border-0 bg-transparent border-transparent [--btn-icon:theme(colors.black)] data-[active]:[--btn-icon:theme(colors.black)] data-[hover]:[--btn-icon:theme(colors.black)] relative isolate inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans hover:opacity-80 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none cursor-pointer"
                      type="button"
                    >
                      <div
                        className={`flex-row items-center gap-1 ${button.styles}`}
                      >
                        {button.icon}
                        <p
                          data-slot="text"
                          className="font-normal text-white font-sans"
                        >
                          {button.label}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
     
              {/* Button Group 2 */}
              <div className="flex-row items-center gap-3">
                <div className="flex gap-3">
                  {buttons.map((button) => (
                    <button
                    
                      key={button.id}
                      className="lg:inline-flex hidden  items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed bg-transparent border hover:text-white/[0.5] h-10 px-3 rounded border-white/20 font-bold"
                      onClick={() => handleOpenModal(button.id)}
                    >
                      {button.icon}
                      <div>{button.label}</div>
                    </button>
                  ))}
                  <button
                    className={`flex items-center justify-center hover:bg-slate-400 rounded-lg h-8 w-8`}
                    type="button"
                  >
                    <ThreeDotIonP />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <SubscriptionModel isOpen={isModalOpen} onClose={handleCloseModal}>
         <div className="text-white">vxcvcxvcx</div>
          </SubscriptionModel>
          <div className="h-[1px] bg-white/[0.05]"></div>
          {/* Video Section */}
          <div className="h-[calc(100%-300px)] overflow-y-auto">
            <div className="infinite-scroll-component__outerdiv">
              <div
                className="infinite-scroll-component no-scrollbar"
                style={{ height: "385px", overflow: "auto" }}
              >
                {/* Content goes here */}
                <div className="flex flex-row overflow-auto no-scrollbar">
                  <div className=" h-[400px] w-full flex items-stretch p-5 flex-col justify-start pr-5">
                    <div className="min-h-[400px] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black">
                      <div className="relative flex aspect-[9/16] h-full w-full">
                        <div className="h-full w-full">
                          <div className="relative h-[400px] w-full">
                            <video
                              preload="metadata"
                              controls
                              autoPlay
                              poster="https://dpbavq092lwjh.cloudfront.net/amzptv/b23a7c52-8708-46b9-886d-8db5927cbc0b-1733003670/thumbnail.jpg"
                              className="h-full w-full"
                              src="https://v16m-default.akamaized.net/463a0326cd1a705f8652dfba8a05b01b/674f1b49/video/tos/alisg/tos-alisg-ve-0051c001-sg/oAsbLAO6coQGyiEzlpifAAwiPiLKTbIzmGB8BM/?a=0&amp;bti=Nzg3NWYzLTQ6&amp;ch=0&amp;cr=0&amp;dr=0&amp;cd=0%7C0%7C0%7C0&amp;br=4622&amp;bt=2311&amp;cs=0&amp;ds=4&amp;ft=.cwOVInz7Thg1TSOXq8Zmo&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZjtoNDs4OmVpPDZlODk4OkBpamk7dXY5cjlydzMzODYzNEAwMmA2NDUvNTExLmE0L2FeYSNhcDNtMmRjZzJgLS1kMC1zcw%3D%3D&amp;vvpl=1&amp;l=20241203085235EEFBE4C9126B0211CF3B&amp;btag=e000b8000"
                              controlsList="nodownload"
                            ></video>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-5 w-full flex-col p-0 lg:mt-0 lg:p-5">
                        <p
                          data-slot="text"
                          className="text-white pb-4 font-bold text-sm font-sans"
                        >
                          More Videos
                        </p>
                        <div className="no-scrollbar w-full flex-1 flex-col items-center justify-center overflow-y-auto">
                          <div className="flex group h-full w-full flex-col flex-nowrap gap-[20px]">
                            <div
                              className="relative cursor-pointer hover:opacity-70"
                              id="ccc45782-15bd-4f06-9282-29dbccf310bb"
                              data-tooltip-id="tooltip"
                              data-tooltip-content=""
                              data-tooltip-place="top"
                            >
                              <div className="group w-full flex-col gap-4">
                                <div className="flex h-[90px] gap-5">
                                  <div className="relative">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                      data-slot="icon"
                                      className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[24px] w-[24px] transform text-white"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                      ></path>
                                    </svg>
                                    <video
                                      className="h-full w-[160px] rounded-[7px] bg-black"
                                      src="https://v16m-default.akamaized.net/089c8bb5064f3c4744213b4e5c9ca765/674f1b4b/video/tos/alisg/tos-alisg-ve-0051c001-sg/o8AgXFd2mS66DEUWNfrB4ZD3gQEeByMIynXpQc/?a=0&amp;bti=Nzg3NWYzLTQ6&amp;ch=0&amp;cr=0&amp;dr=0&amp;cd=0%7C0%7C0%7C0&amp;br=7630&amp;bt=3815&amp;cs=0&amp;ds=4&amp;ft=.cwOVInz7Thg1TSOXq8Zmo&amp;mime_type=video_mp4&amp;qs=0&amp;rc=Z2RmZ2ZkO2c5PDs8NzVkPEBpM3Nsb3U5cmdydzMzODYzNEAzXy5iXi8uXzIxYy4yLjEwYSM0cWJyMmRrZzJgLS1kMC1zcw%3D%3D&amp;vvpl=1&amp;l=20241203085235EEFBE4C9126B0211CF3B&amp;btag=e000b8000"
                                    ></video>
                                  </div>
                                  <div className="h-full w-[170px] flex flex-col justify-between text-white lg:w-[195px]">
                                    <div className="line-clamp-2 w-full text-left">
                                      vnvn
                                    </div>
                                    <div className="flex items-center justify-between text-white/50">
                                      <div className="flex h-6 w-[54px] items-center justify-center rounded bg-white/5 text-xs">
                                        Video
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
