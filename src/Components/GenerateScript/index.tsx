"use client";
import React, { useState } from "react";
import NavTwo from "../Elements/NavTwo";
import { ImageIcon14, ImageIcon15 } from "../utils/SvgIcons";

const GenerateScript = () => {
  const [isAiScript, setIsAiScript] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleScriptSelection = (isAi: boolean) => {
    setIsAiScript(isAi);
  };
  return (
    <div className="bg2 gradient-bg1">
      <div className="relative  linearG h-screen w-screen flex-col overflow-x-hidden sm:pt-[98px] lg:pt-[72px]">
        <NavTwo />
        <div className="relative  top-0 left-0 h-full overflow-y-auto">
          <div className="flex  mx-auto flex-col text-white h-full max-w-[720px]  ">
            <div className="mt-6 text-title-h3">
              Choose or create your script
            </div>
            <div className="p-1 h-10 w-full rounded-xl my-8 bg-area-platform">
              <div className="relative left-0 h-full w-full overflow-hidden text-lg text-white rounded-lg bg-transparent">
                <div
                  className="absolute top-0 bottom-0 left-0 w-0 transition-all rounded-lg bg-area-platform"
                  style={{
                    left: isAiScript ? "0%" : "50%",
                    width: isAiScript ? "50%" : "50%",
                  }}
                ></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 box-border flex items-stretch justify-between font-semibold">
                  <div
                    className="flex flex-1 cursor-pointer items-center justify-center text-sm !mix-blend-normal text-color-title mix-blend-exclusion"
                    onClick={() => handleScriptSelection(true)}
                  >
                    Choose script from AI
                  </div>
                  <div
                    className="flex flex-1 cursor-pointer items-center justify-center text-sm text-color-body"
                    onClick={() => handleScriptSelection(false)}
                  >
                    Use your own script
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative w-full rounded-2xl border-[1.5px] border-solid bg-area-platform hover:border-brand transition duration-200 ease-out border-brand">
              <div className="flex items-center justify-between px-4 pt-3 pb-1">
                <div className="relative  flex items-center">
                  <div className="absolute top-0 left-0 size-[24px] flex-col rounded-full bg-white text-brand transition-opacity opacity-100">
                    <ImageIcon14 />
                  </div>
                  <div className="text-color-title text-title-h4 transition-transform translate-x-[34px]">
                    Call To Action
                  </div>
                </div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="group flex items-center justify-between whitespace-nowrap outline-none select-none disabled:pointer-events-none text-color-title text-body-md bg-area-container border-solid hover:bg-ux-hover active:border-brand border border-transparent data-[state=open]:border data-[state=open]:border-brand disabled:bg-area-container !pr-2 gap-1 data-[placeholder]:text-color-support data-[disabled]:!text-color-disable hover:transition-[background-color] hover:duration-300 ease-in-out h-8 rounded-lg pl-2 w-44"
                >
                  <div className="w-fit truncate">
                    <span style={{ pointerEvents: "none" }}>
                      <div className="!truncate w-full">Inspiring tone</div>
                    </span>
                  </div>
                  <ImageIcon15 />
                </button>
              </div>
              <div className="relative px-[6px] pb-3">
                <div className="box-border  rounded-2xl border border-transparent relative h-full min-h-[60px] w-full flex-col gap-1 py-[14px] pl-3 has-[:disabled:] has-[:disabled]:cursor-not-allowed transition-colors pr-3 bg-area-container2  has-[:focus]:border-transparent has-[:focus]:bg-area-platform">
                  <textarea
                    className="h-full w-full  resize-none bg-transparent text-body-md text-color-title placeholder:text-color-support focus:outline-none disabled:text-color-disable overflow-hidden"
                    style={{ height: "40px" }}
                    disabled={false}
                    placeholder="e.g. Imagine the feeling of pure success..."
                  >
                    Imagine the feeling of pure success—it's yours with cxzczxc.
                    From the first moment, I felt unstoppable. Start your
                    journey today and redefine what's possible. Discover your
                    potential with cxzczxc now.
                  </textarea>
                </div>
              </div>
              
            </div>

            <div className="flex h-20 mt-8 w-full flex-none items-center justify-center gap-4">
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
  );
};

export default GenerateScript;
