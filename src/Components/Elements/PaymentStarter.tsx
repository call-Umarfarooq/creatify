import React from "react";
import { Check, Info, Caution } from "@icon-park/react";
import { ImageIcon22 } from "../utils/SvgIcons";

const PaymentStarter = ({selectedOption}:{selectedOption:string}) => {

  const isMonthly = selectedOption === "monthly" ? true : false;


  const features = [
    { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: isMonthly 
      ? "100 Credits /mo (≈ 20 videos)" 
      : "1200 Credits /yr (≈ 240 videos)", tooltip: "5 credits is charged for every 30s of video, rounded up.", subtext: "Credits expire yearly" },
    // { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "1 Seat", tooltip: "", subtext: "" },
    { icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />, text: "0 Custom Avatars", tooltip:"", subtext: "" },
  ];

  const additionalFeatures = [
    { text: "Remove Watermark", gradient: true, tooltip: "Remove Creatify watermark on the videos you render." },
    { text: "Advanced Avatar Library (170+ Avatars)", gradient: false },
    { text: "Premium Stock Footage", gradient: false },
    { text: "Up to 2mins Duration Per Video", gradient: false },
    { text: "Commercial Music Library", gradient: false },
    { text: "9:16, 16:9, and 1:1 Aspect Ratio", gradient: false },
  ];

  return (
    <div className="relative w-full h-[634px] flex-col gap-4 rounded-3xl border border-line-1 border-solid bg-bg-3 p-6 ">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="font-bold text-4xl text-white">Starter</div>
        
        {!isMonthly &&<div className="flex h-6 w-[68px] items-center justify-center rounded-full bg-purple-900 text-color-title text-title-h8">
          15% OFF
        </div>
}
      </div>

      {/* Pricing */}
      <div className="flex mt-6 mb-6 items-baseline gap-2">
      {!isMonthly && <div className="text-color-support min-w-max text-title-h6 line-through">$39 USD</div>}
        <div className={` ${isMonthly ? 'text-white':'text-purple-500'}  min-w-max text-title-h1 `}> ${isMonthly ? 39 : 33} USD</div>
        <div className="text-color-title text-title-h5">/mo</div>
      </div>

      {/* Features */}
      <div className="flex-col gap-2 w-full">
        {features.map(({ icon, text, tooltip, subtext }, index) => (
          <div key={index} className="flex-col flex gap-1">
            <div className="flex w-full  items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center">{icon}</div>
              <div className="flex mt-3 items-center  justify-center text-color-body text-sm font-semibold">{text}</div>
              {tooltip && (
                <div
                  data-tooltip-id="tooltip"
                  data-tooltip-place="top"
                  data-tooltip-html={`<div style='font-size:14px;max-width:250px;background:#1E2024;color:#FFFFFFB2;font-weight:400;overflow-wrap: break-word;'>${tooltip}</div>`}
                  className="flex items-center justify-center"
                >
                  <Info theme="outline" size="16" fill="#FFFFFFB2" />
                </div>
              )}
            </div>
            {subtext && <div className="ml-6 text-body-sm text-color-support">{subtext}</div>}
          </div>
        ))}
        <div className="flex mt-6 h-6 items-center gap-2 text-body-md">
          <div className="text-color-body">$396 billed yearly</div>
          <div className="flex h-6 items-center justify-center rounded-full bg-gradient-to-r from-[#0C78D1] to-[#67A226] px-2 text-body-sm text-color-title">
            Save $72
          </div>
        </div>
      </div>

      {/* Select Button */}
      <div className="h-12 my-3 w-full">
        <button
          data-loading="false"
          className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-12 rounded-2xl px-5 w-full"
        >
          <div>Select</div>
        </button>
      </div>

      {/* Additional Features */}
      <div className="flex-col flex gap-3">
        <div className="text-color-title text-title-h7">Everything in Free Plan, plus:</div>
        <div className="flex-col flex gap-3">
          {additionalFeatures.map(({ text, gradient, tooltip }, index) => (
            <div key={index} className="flex-col gap-1">
              <div className="flex w-full items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center">
                  <Check theme="outline" size="16" fill="#FFFFFFB2" />
                </div>
                <div
                  className={`flex items-center justify-center ${
                    gradient ? "bg-gradient-to-r from-[#E6E6FF] to-[#8080FF] bg-clip-text font-semibold text-transparent" : "text-color-body"
                  } text-title-h8`}
                >
                  {text}
                </div>
                {tooltip && (
                  <div
                    data-tooltip-id="tooltip"
                    data-tooltip-place="top"
                    data-tooltip-html={tooltip}
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

export default PaymentStarter;
