"use client";
import React, { useState } from "react";
import NavTwo from "../Elements/NavTwo";
import { ImageIcon5 } from "../utils/SvgIcons";

const EditProduct = () => {
  const [isPromoEnabled, setIsPromoEnabled] = useState(false);

  const togglePromo = () => {
    setIsPromoEnabled((prev) => !prev);
  };

  return (
    <div className="bg2 gradient-bg1">
      <div className="relative  linearG h-screen w-screen flex-col overflow-x-hidden sm:pt-[98px] lg:pt-[72px]">
        <NavTwo />
        <div className="relative  top-0 left-0 h-full overflow-y-auto">
          <div className="flex  mx-auto flex-col text-white h-full max-w-[720px]  ">
            <div className="pt-6 text-title-h3">
              Add media and product details
            </div>
            <div className=" flex gap-3">
              <div className="w-full flex-col gap-3">
                {/* Label for Input */}
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">
                    Brand / Product name
                  </div>
                </div>

                {/* Input Field */}
                <div className="relative w-full">
                  <div
                    className="group border-transparent w-full truncate flex gap-2 items-center justify-between bg-area-platform border border-solid hover:border-brand focus-within:border-brand focus-within:bg-area-platform disabled:border-line-1 h-10 rounded-xl pl-[10px] pr-2"
                    data-focus="false"
                  >
                    <input
                      className="h-full w-full select-none truncate bg-transparent placeholder:text-color-support placeholder:text-label-md focus:placeholder:text-color-disable disabled:cursor-not-allowed disabled:text-color-disable disabled:placeholder:text-color-disable"
                      placeholder="Enter product name"
                      disabled={false} // Set to true if the input should be disabled
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">Logo</div>
                </div>

                {/* File Upload */}
                <div className=" relative flex justify-center items-center w-[40px] h-[40px] ">
                  <label className="cursor-pointer flex  flex-col items-center justify-center overflow-hidden bg-area-container hover:bg-ux-hover active:bg-ux-press h-10 w-10 rounded-xl">
                    <input
                      accept=".jpg, .jpeg, .png, .webp, .svg"
                      className="hidden"
                      type="file"
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <ImageIcon5 />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex mt-3 flex-col gap-3">
              <div className="flex gap-2">
                <div className="text-color-title text-title-h7">
                  Product description
                </div>
              </div>
              <div className="box-border rounded-2xl border border-transparent bg-area-platform relative h-full min-h-[60px] w-full flex-col gap-1 py-[14px] pl-3 has-[:disabled:]bg-rea-platform hover:border-brand has-[:disabled]:cursor-not-allowed has-[:focus]:border-brand transition-colors pr-3">
                <textarea
                  className="h-full resize-none bg-transparent text-body-md text-color-title placeholder:text-color-support focus:outline-none disabled:text-color-disable"
                  placeholder="Describe your product"
                  rows={4}
                  maxLength={1000}
                />
                <div className="h-2"></div>
                <div className="absolute right-3 bottom-2 flex h-[14px] justify-end text-body-sm text-color-support">
                  0/1000
                </div>
              </div>
            </div>
            <div className="w-full flex mt-3 flex-col gap-3">
              <div className="flex gap-2">
                <div className="text-color-title text-title-h7">
                  Highlight features
                </div>
              </div>
              <div className="flex-col flex  gap-3">
                <div className="relative w-full">
                  <div
                    className="group border-transparent w-full truncate flex gap-2 items-center justify-between bg-area-platform border border-solid hover:border-brand focus:border-brand focus:bg-area-platform disabled:border-line-1 h-10 rounded-xl pl-[10px] pr-2"
                    data-focus="false"
                  >
                    <input
                      className="h-full w-full select-none truncate bg-transparent placeholder:text-color-support placeholder:text-label-md focus:placeholder:text-color-disable disabled:cursor-not-allowed disabled:text-color-disable disabled:placeholder:text-color-disable"
                      value=""
                      disabled={false}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-full flex-wrap gap-2"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="text-color-title text-title-h7">Assets</div>
                </div>
                <div className="flex w-full items-center gap-3 rounded-2xl bg-orange-950 p-4 font-medium text-color-title text-sm">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <g>
                      <path
                        data-follow-fill="currentColor"
                        fill="currentColor"
                        d="M38.85 38.85A20.941 20.941 0 0 1 24 45a20.934 20.934 0 0 1-14.85-6.15A20.941 20.941 0 0 1 3 24c0-5.799 2.35-11.049 6.15-14.85A20.941 20.941 0 0 1 24 3c5.799 0 11.049 2.35 14.85 6.15A20.941 20.941 0 0 1 45 24c0 5.799-2.35 11.049-6.15 14.85ZM24 10.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v16c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077ZM22 35c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C23.303 33 23.536 33 24 33s.698 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.052.192.052.424.052.889s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C24.697 37 24.464 37 24 37s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C22 35.696 22 35.464 22 35Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <span>
                    To get started, please upload a minimum of 3 images or 1
                    video. This helps us ensure the best quality for your final
                    video.
                  </span>
                </div>
                <div className="flex-col  gap-3">
                  <div className="flex  h-5 items-center">
                    ⭐ &nbsp;
                    <div className="bg-gradient-to-r from-[#E5E5FF] to-[#8080FF] bg-clip-text text-label-md text-transparent">
                      Confirm the assets you want to use. Higher-quality clips
                      and images result in better results.
                    </div>
                  </div>
                  <div className="grid max-h-[320px] w-full mt-2 grid-cols-5 flex-wrap items-start gap-3 overflow-hidden overflow-y-auto rounded-2xl bg-area-container p-4 ">
                    <div className="cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-area-container hover:bg-ux-hover active:bg-ux-press aspect-1/1 h-auto w-full border-2 border-transparent border-solid">
                      <input
                        multiple
                        accept=".png, .jpg, .jpeg, .gif, .mp4, .mov, .m4v"
                        className="hidden"
                        type="file"
                      />
                      <div className="flex-col gap-2">
                        <div className="cursor-pointer flex flex-col items-center justify-center  h-24 rounded-2xl border-2 border-transparent">
                          <input
                            type="file"
                            accept=".png, .jpg, .jpeg, .gif, .mp4, .mov, .m4v"
                            multiple
                            className="hidden"
                          />
                          <div className="flex flex-col items-center gap-1">
                            <div className="text-2xl text-white">+</div>
                            <div className="text-sm text-white">Upload</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="DndDescribedBy-0" style={{ display: "none" }}>
                    To pick up a draggable item, press the space bar. While
                    dragging, use the arrow keys to move the item. Press space
                    again to drop the item in its new position, or press escape
                    to cancel.
                  </div>
                  <div
                    id="DndLiveRegion-0"
                    role="status"
                    aria-live="assertive"
                    aria-atomic="true"
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "1px",
                      height: "1px",
                      margin: "-1px",
                      border: "0px",
                      padding: "0px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      clipPath: "inset(100%)",
                      whiteSpace: "nowrap",
                    }}
                  ></div>
                  <div className="flex items-center mt-2 gap-3">
                    <button
                      data-loading="false"
                      className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-8 rounded-lg px-3"
                    >
                      <div>Select all</div>
                    </button>
                    <button
                      data-loading="false"
                      className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-8 rounded-lg px-3"
                    >
                      <div>Unselect all</div>
                    </button>
                    <button
                      data-loading="false"
                      className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-8 rounded-lg px-3"
                    >
                      <div>Delete all</div>
                    </button>
                  </div>

                  <div
                    className={`flex-col mb-5 mt-3  mb gap-6 bg-area-container1  transition-all  ${
                      isPromoEnabled
                        ? "py-4 rounded-2xl "
                        : "p-4  rounded-2xl "
                    }`}
                  >
                    {/* Toggle Switch */}
                    <div className="flex h-5 items-center gap-3 rounded-2xl">
                      <div
                        className={`text-white  text-sm ${
                          isPromoEnabled ? "px-4 " : " "
                        } `}
                      >
                        Promotional info
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isPromoEnabled}
                        onClick={togglePromo}
                        className={`peer inline-flex shrink-0 cursor-pointer items-center border border-gray-600 shadow-sm transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded-full w-[40px] h-[20px] ${
                          isPromoEnabled
                            ? "bg-purple-600 border-purple-600"
                            : "bg-gray-700"
                        }`}
                      >
                        <span
                          className={`pointer-events-none block rounded-full bg-white shadow-lg transition-transform w-[16px] h-[16px] ${
                            isPromoEnabled
                              ? "translate-x-[21px]"
                              : "translate-x-[1px]"
                          }`}
                        ></span>
                      </button>
                    </div>

                    {/* Promo Details */}
                    {isPromoEnabled && (
                      <div className="w-full px-4   rounded-br-2xl pb-2    gap-4 mt-4">
                        {/* Original Price */}

                        <div className="flex gap-2">
                          <div className="w-full flex-col gap-3">
                            <div className="flex gap-2">
                              <div className="text-white text-sm">
                                Original price
                              </div>
                            </div>
                            <div className="relative w-full">
                              <div className=" group w-full flex gap-2 items-center justify-between bg-area-container border-none hover:border-purple-600 h-10 rounded-xl pl-[10px] pr-2">
                                <input
                                  className="h-full w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
                                  placeholder="Example: $ 19.99"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Promo Price */}
                          <div className="w-full flex-col gap-3">
                            <div className="flex gap-2">
                              <div className="text-white text-sm">
                                Promo price
                              </div>
                            </div>
                            <div className="relative w-full">
                              <div className="group w-full flex gap-2 items-center justify-between bg-area-container border-none hover:border-purple-600 h-10 rounded-xl pl-[10px] pr-2">
                                <input
                                  className="h-full w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
                                  placeholder="Example: $ 9.90"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Promotion Details */}
                        <div className="w-full flex-col gap-3">
                          <div className="flex gap-2">
                            <div className="text-white text-sm">
                              Promotion details
                            </div>
                          </div>
                          <div className="box-border rounded-2xl border-none bg-area-container  hover:border-purple-600 flex-col gap-1 p-3">
                            <textarea
                              className="h-full w-full bg-transparent text-white placeholder:text-gray-400 resize-none focus:outline-none"
                              rows={2}
                              placeholder="Add promotion details..."
                            ></textarea>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex w-full flex-wrap gap-2 mt-4">
                          {[
                            "Free shipping",
                            "New users: 15% off",
                            "Double rewards today only",
                            "App orders: 20% off",
                            "Bundle offers: Free shipping",
                          ].map((tag) => (
                            <div
                              key={tag}
                              className="flex h-6 cursor-pointer items-center justify-center rounded-full bg-area-container px-3 text-sm text-white hover:bg-gray-600"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex h-20 w-full flex-none items-center justify-center gap-4">
      <button
        data-loading="false"
        className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-10 rounded-xl px-3 w-[108px]"
      >
        <div>Back</div>
      </button>
      <button
        data-loading="false"
        className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-10 rounded-xl px-3 w-[108px]"
      >
        <div>Next</div>
      </button>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EditProduct;
