import React, { useState } from "react";
import { Check, Info, Caution } from "@icon-park/react";
import { ImageIcon20, ImageIcon21, ImageIcon22 } from "../utils/SvgIcons";

const PaymentPro = ({ selectedOption }: any) => {
  const isMonthly = selectedOption === "monthly" ? true : false;

  const [selectTab, setSelectTab] = useState(1);

  const handelTab = (tab: number) => {
    setSelectTab(tab);
  };

  const additionalFeatures = [
    {
      text: "Remove Watermark",
      gradient: true,
      tooltip: "Remove Creatify watermark on the videos you render.",
    },
    { text: "Advanced Avatar Library (170+ Avatars)", gradient: false },
    { text: "Premium Stock Footage", gradient: false },
    { text: "Up to 2mins Duration Per Video", gradient: false },
    { text: "Commercial Music Library", gradient: false },
    { text: "9:16, 16:9, and 1:1 Aspect Ratio", gradient: false },
  ];

  return (
    <div className="relative w-full h-[634px] flex flex-col bg-area-container-purple1 rounded-xl border border-line-1 border-solid bg-bg-3 p-6 ">
      <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#9763FF] to-[#549CE3] px-3 py-2 text-color-title text-title-h7 drop-shadow">
        Best Seller
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="font-bold text-4xl text-white">Pro</div>
        {!isMonthly &&<div className="flex h-6 w-40 items-center justify-center rounded-full bg-gradient-to-r from-[#5C54FF] to-[#8F4AFF]/65 text-color-title text-title-h8">
          Limited time - 50% OFF
        </div>}
      </div>

      {/* Pricing */}
      <div className="flex mt-6 mb-6 items-baseline gap-2">
      {!isMonthly &&  <div className="text-color-support min-w-max text-title-h6 line-through">
          $39 USD
        </div>}
        <div className={`${isMonthly ? 'text-white':'text-purple-500'} min-w-max text-title-h1`}>$249 USD</div>
        <div className="text-color-title text-title-h5">/mo</div>
      </div>

      <div className="mb-5 flex flex-row items-center justify-center">
        <div className="relative h-auto w-full">
          <div className="h-[56px] rounded-lg p-0">
            <div className="relative left-0 w-full overflow-hidden text-lg text-white h-[56px] rounded-xl bg-[#FFFFFF14]">
              <div
                className="absolute top-0 bottom-0 left-0 w-0 transition-all rounded-lg bg-transparent"
                style={{ left: "0%", width: "33.3333%" }}
              ></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 box-border flex items-stretch justify-between font-semibold">
                {[
                  { id: 1,  credits: isMonthly ? 200 : 2400, videos: "≈ 480 videos" },
                  { id: 2,  credits: isMonthly ? 600 : 7200, videos: "≈ 960 videos" },
                  { id: 3, credits: isMonthly ? 1000 : 12200, videos: "≈ 1220 videos" },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => handelTab(plan.id)}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-sm rounded-lg ${
                      selectTab === plan.id
                        ? "text-[#fff] font-medium bg-white/[.08] m-1"
                        : "text-white/[.50]"
                    }`}
                  >
                    {selectTab === plan.id ? (
                      <div className="flex-col items-center justify-center">
                        <div className="text-color-title px-1 min-w-max">
                          <span className="text-title-h5">{plan.credits} </span>
                          <span className="text-title-h8">
                            credits/<span> {isMonthly ? "mo" : "yr"} </span>
                          </span>
                        </div>
                        <div className="flex items-center justify-center font-normal text-[10px] text-color-support">
                          <div>{plan.videos}</div>
                          <span
                            className="ml-[2px] flex items-center justify-center"
                            data-state="closed"
                          >
                            <ImageIcon21 />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center gap-1">
                        {plan.credits}
                        <div className="flex-center text-white/[.50]">
                          <ImageIcon21 />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-col gap-2">
        <div className=" text-body-sm text-color-support">
          Credits expire yearly
        </div>

        <div className="flex mt-3 h-6 items-center gap-2 text-body-md">
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
        <div className="text-color-title text-title-h7">
          Everything in Free Plan, plus:
        </div>
        <div className="flex-col flex gap-3">
          {additionalFeatures.map(({ text, gradient, tooltip }, index) => (
            <div key={index} className="flex-col gap-1">
              <div className="flex w-full items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center">
                  <Check theme="outline" size="16" fill="#FFFFFFB2" />
                </div>
                <div
                  className={`flex items-center justify-center ${
                    gradient
                      ? "bg-gradient-to-r from-[#E6E6FF] to-[#8080FF] bg-clip-text font-semibold text-transparent"
                      : "text-color-body"
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

export default PaymentPro;
