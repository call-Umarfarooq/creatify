"use client";
import React, { useState } from "react";
import Layout from "../Elements/Layout";
import Image from "next/image";
import { Lock, More } from "@icon-park/react";
import CoustomAvtrCard from "../Elements/CoustomAvtrCard";
import CustomAvtrCard from "../Elements/CoustomAvtrCard";
import { avatarData } from "../utils/Array";
import LazyLoad from "../Elements/LazyLoad";
import LimitexceededModel from "../Elements/LimitexceededModel";

const CustomAvatars = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedRoute, setSelectedRoute] = useState("design");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  const handleRouteChange = (cat: any) => {
    setSelectedRoute(cat);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <div className="no-scrollbar relative h-[93vh] flex-col overflow-y-auto rounded-2xl bg-white/5">
        <div className="page-in h-full text-white p-5">
          <div className="font-bold text-[32px] text-white">Custom Avatars</div>
          <div className="w-full">
            <div className="mt-4 w-full select-none flex flex-row gap-[72px] font-bold text-2xl">
              <div
                onClick={() => handleRouteChange("design")}
                className={`relative flex-center cursor-pointer pt-2 pb-3 font-semibold text-xl leading-[26px] ${
                  selectedRoute === "design"
                    ? "shadow-[0_4px_0_0_#6C6CF5]"
                    : "text-color-support/50"
                } `}
              >
                <div className="flex-center rounded-full bg-area-container px-2 py-0.5 text-white/90 text-xs absolute top-0 right-0 h-6 translate-x-[110%] bg-gradient-to-br from-[#4868d5] to-[#bd4cc2] font-extrabold italic">
                  NEW
                </div>
                Design your own avatar
              </div>
              <div
                onClick={() => handleRouteChange("bring")}
                className={`relative  flex-center cursor-pointer pt-2 pb-3 font-semibold text-xl leading-[26px]  ${
                  selectedRoute === "bring"
                    ? "shadow-[0_4px_0_0_#6C6CF5]"
                    : "text-color-support/50"
                } `}
              >
                Bring your own avatar
              </div>
            </div>
            <div className="mt-[3px] h-[1px] bg-line-1"></div>

            <div className=" h-[calc(100%-300px)] pb-5 overflow-y-auto">
              <div className="infinite-scroll-component__outerdiv  ">
                <div
                  className="infinite-scroll-component  no-scrollbar"
                  style={{ height: "430px", overflow: "auto" }}
                >
                  <div className="flex-center flex items-center gap-4 py-8">
                    <div
                      className="w-full max-w-[1330px]"
                    
                    >
                      <div className="size-full flex cursor-pointer flex-row overflow-hidden rounded-3xl bg-area-container duration-200 hover:bg-area-container/10 h-[200px] w-full flex-1">
                        <div className=" h-full w-[300px] flex-center bg-black/50 text-white ">
                          <div className="relative h-full w-full">
                            <Image
                              alt="Design Your Own Avatar"
                              src="/assets/dyoa-entrance.jpg"
                              fill
                              priority={false}
                              quality={75}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1  flex-col items-start justify-center p-6">
                          {/* Title Section */}
                          <div className="flex-row flex items-center gap-2">
                            <div className="font-semibold text-sm text-white/90 lg:text-lg">
                              Design Your Own Avatar
                            </div>
                            <div className="flex-center rounded-full bg-area-container px-2 py-0.5 font-bold text-white/90 text-xs">
                              Beta
                            </div>
                          </div>
                          <div className="pt-2 text-sm text-white/50">
                            Simply describe your avatar and watch it come to
                            life.
                          </div>
                          <div className="flex-1 mt-4 flex-col justify-center gap-4">
                            <button
                              data-loading="false"
                              className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-12 rounded-2xl px-5"
                            >
                              <div onClick={handleOpenModal} >Create now</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex w-full  flex-col gap-6">
                    <div className=" font-semibold text-color-title/90 text-xl">
                      Community Avatar
                    </div>
                    {selectedRoute === "design" && (
                      <>
                        <div className="flex-row flex items-center gap-2">
                          <div className="relative">
                            <div
                              onClick={() => handleCategoryChange("general")}
                              className={`flex-center cursor-pointer rounded-lg px-3 py-1 font-semibold text-sm border-[1px] border-solid ${
                                selectedCategory === "general"
                                  ? " hover:border-brand border-brand bg-ux-purple-select text-brand"
                                  : " bg-area-platform border-brand1 text-white/90 border-line-1"
                              } `}
                            >
                              General
                            </div>
                          </div>
                          <div className="relative">
                            <div
                              onClick={() => handleCategoryChange("holidays")}
                              className={`flex-center cursor-pointer  rounded-lg px-3 py-1  font-semibold text-sm border-[1px] border-solid bg-area-platform border-brand1 text-white/90 border-line-1  ${
                                selectedCategory === "holidays"
                                  ? " hover:border-brand border-brand bg-ux-purple-select text-brand"
                                  : " bg-area-platform border-brand1 text-white/90 border-line-1"
                              }`}
                            >
                              Holidays
                            </div>
                            <div className="flex-center rounded-full bg-area-container px-2 py-0.5 text-white/90 -translate-x-[15%] -translate-y-1/2 absolute top-0 left-full text-nowrap bg-gradient-to-br from-[#2C7A34] to-[#A23331] font-bold text-title-h9">
                              Christmas Special🎅
                            </div>
                          </div>
                        </div>
                        <div className="infinite-scroll-component__outerdiv">
                          <div
                            className="infinite-scroll-component !overflow-x-hidden no-scrollbar flex-1"
                            style={{ height: "auto", overflow: "auto" }}
                          >
                            <div className="grid w-full auto-rows-auto grid-cols-2 gap-6 pr-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                              {selectedCategory === "general" &&
                                avatarData.map((avatar, index) => (
                                  <LazyLoad key={index}>
                                    <CustomAvtrCard
                                      videoSrc={avatar.videoSrc}
                                      posterSrc={avatar.posterSrc}
                                      userName={avatar.userName}
                                    />
                                  </LazyLoad>
                                ))}
                              {selectedCategory === "holidays" &&
                                avatarData.map((avatar, index) => (
                                  <LazyLoad key={index}>
                                    <CustomAvtrCard
                                      holiday={true}
                                      holidayText="Christmas"
                                      videoSrc={avatar.videoSrc}
                                      posterSrc={avatar.posterSrc}
                                      userName={avatar.userName}
                                    />
                                  </LazyLoad>
                                ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {selectedRoute === "bring" && (
                      <div>
                        {" "}
                        <div className="relative w-full">
                          <div className="flex size-full flex-1 flex-col items-center justify-center">
                            <div className="flex size-full flex-1 flex-col items-center justify-center">
                              <img
                                className="h-[168px] w-[150px]"
                                src="/assets/empty-folder.svg"
                                alt="Empty Folder"
                              />
                              <div className="font-semibold text-color-title text-sm">
                                You don't have your own avatar yet
                              </div>
                              <button
                                data-loading="false"
                                className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-12 rounded-2xl px-5 mt-6"
                              >
                                <div onClick={handleOpenModal}>Create one</div>

                                <LimitexceededModel
                                  title={"Limit exceeded"}
                                  isOpen={isModalOpen}
                                  onClose={handleCloseModal}
                                >
                                  <div className="flex flex-col ">
                                    <div className="font-normal mt-6 text-pretty text-white font-sans">
                                      You’ve reached the maximum number of
                                      custom avatars for your current plan.
                                    </div>
                                    <button
                                      className="rounded-full text-white mt-6 bg-[#5c54ff] border-0 border-none shadow-md py-4 cursor-pointer"
                                      type="button"
                                      data-headlessui-state=""
                                    >
                                      Got it
                                      <span
                                        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
                                        aria-hidden="true"
                                      ></span>
                                    </button>
                                  </div>
                                </LimitexceededModel>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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

export default CustomAvatars;
