import React from "react";
import { Check, Info, Caution } from "@icon-park/react";
import { ImageIcon21, ImageIcon22 } from "../utils/SvgIcons";

const Enterprise = ({selectedOption}:any) => {
  const features = [
    {
      icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />,
      text: "1200 Credits /yr (≈ 240 videos)",
      tooltip: "5 credits is charged for every 30s of video, rounded up.",
      subtext: "Credits expire yearly",
    },
    // { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "1 Seat", tooltip: "", subtext: "" },
    {
      icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />,
      text: "0 Custom Avatars",
      tooltip: "",
      subtext: "",
    },
  ];

  const additionalFeatures = [
    {
      text: "Unlimited Video Generationk",
      
      tooltip: " ",
    },
    { text: "Maximum Custom Avatars", },
    { text: "Tailored Solution", },
    { text: "Managed Service",  },
    { text: "Dedicated Account Manager",  },
    { text: "Fastest Video Processing",  tooltip: " ",  },
  ];

  return (
    <div className="relative w-full h-[634px] flex-col gap-4 rounded-3xl border border-line-1 border-solid bg-bg-3 p-6 ">
   
      <div className="flex items-center gap-3">
        <div className="font-bold text-4xl text-white">Enterprise</div>
      </div>


      <div className=" mt-5 mb-7 text-color-body text-title-h3">Custom</div>
      <div className="flex flex-col justify-between">
        <div className="flex-1">
          <div className="h-full w-full flex-col flex justify-center gap-4">
            <div className="size-full flex  flex-col justify-between">
              <div className="text-body-sm mb-6 text-color-support">
                For teams and individuals who need unlimited generation and
                edits to scale content creation without worrying about usage
                limits or extra costs
              </div>
              <button
                data-loading="false"
                className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-12 rounded-2xl px-5 w-full"
              >
                <div>Contact sales</div>
              </button>
            </div>
            <button
                data-loading="false"
                className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-12 rounded-2xl px-5 w-full"
              >
                <div>Contact sales</div>
              </button>
          </div>
        </div>
      </div>

      {/* Select Button */}
    

      {/* Additional Features */}
      <div className="flex-col mt-4 flex gap-3">
        <div className="text-color-title text-title-h7">
        All features, plus:
        </div>
        <div className="flex-col flex gap-3">
          {additionalFeatures.map(({ text,  tooltip }, index) => (
            <div key={index} className="flex-col gap-1">
              <div className="flex w-full items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center">
                  <Check theme="outline" size="16" fill="#FFFFFFB2" />
                </div>
                <div
                  className={`flex items-center justify-center ${
                  
                      "text-color-body"
                  } text-title-h8`}
                >
                  {text}
                </div>
                {tooltip && (
                  <div
                    className="flex items-center justify-center"
                  >
                     <ImageIcon22 />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
