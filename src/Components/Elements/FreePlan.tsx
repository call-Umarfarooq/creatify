import React from "react";
import { Check, Caution, Info } from "@icon-park/react";

const FreePlan = () => {
  const features = [
    { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "10 Credits /mo (≈ 2 videos)", tooltip: "5 credits is charged for every 30s of video, rounded up.", subtext: "Credits expire every 2 months" },
    { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "1 Seat", subtext: "" },
    { icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />, text: "0 Custom Avatar", subtext: "" },
  ];

  const additionalFeatures = [
    { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "Realistic Avatars" },
    { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "140+ Realistic Voices" },
    { icon: <Check theme="outline" size="16" fill="#FFFFFFB2" />, text: "29 Languages" },
    { icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />, text: "Exports With Watermark" },
    { icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />, text: "Limited Avatar Library" },
    { icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />, text: "Limited AI Tools" },
    { icon: <Caution theme="outline" size="16" fill="#FFFFFFB2" />, text: "9:16 Aspect Ratio Only" },
  ];

  return (
    <div className="mb-8 flex min-h-[218px] w-full justify-between rounded-s-3xl border border-line-1 bg-bg-3 p-6">
      {/* Plan Information */}
      <div className="h-full w-[356px] flex-col gap-5">
        <div className="text-title-h1 text-white">Free</div>
        <div className="flex h-[42px] items-baseline gap-2">
          <div className="text-color-title text-title-h1">$0 USD</div>
          <div className="h-full text-color-title text-title-h5">/mo</div>
        </div>
        <button
          data-loading="false"
          className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-12 rounded-2xl px-5 w-[124px]"
          disabled
        >
          <div>Current Plan</div>
        </button>
      </div>

      {/* Features Section */}
      <div className="flex-1">
        <div className="flex h-full w-full items-center">
          <div className="flex-col gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex-col gap-1">
                <div className="flex w-full items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center">{feature.icon}</div>
                  <div className="flex items-center justify-center text-color-body text-sm font-semibold">{feature.text}</div>
                  {feature.tooltip && (
                    <div
                      data-tooltip-id="tooltip"
                      data-tooltip-place="top"
                      data-tooltip-html={feature.tooltip}
                      className="flex items-center justify-center"
                    >
                      <Info theme="outline" size="16" fill="#FFFFFFB2" />
                    </div>
                  )}
                </div>
                {feature.subtext && <div className="ml-6 text-body-sm text-color-support">{feature.subtext}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="h-full  w-[356px]">
        <div className="flex-col flex justify-between  gap-3">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex-col gap-1">
              <div className="flex w-full items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center">{feature.icon}</div>
                <div className="flex items-center justify-center text-color-body text-title-h8">{feature.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreePlan;
