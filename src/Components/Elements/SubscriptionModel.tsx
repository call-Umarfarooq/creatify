import React, { useState } from "react";
import Modal from "react-modal";
import { Check, Diamond, Info, Caution } from "@icon-park/react";
import { CloseIcn, Offer } from "../utils/SvgIcons";
import PaymentStarter from "./PaymentStarter";
import FreePlan from "./FreePlan";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#181818",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "20px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};
interface IModalProps {
  isOpen: boolean;
  children: any;
  onClose: (e?: React.MouseEvent) => void;
}

const SubscriptionModel = ({ isOpen, children, onClose }: IModalProps) => {
  const [selectedOption, setSelectedOption] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="flex w-[1200px] h-10  items-center justify-between bg-bg-2">
        <div className="flex items-center justify-center gap-2 text-color-title text-title-h4">
          <span className="flex items-center">
            <Diamond theme="outline" size="24" fill="#FFFFFF" />
          </span>
          <span className="min-w-max">Upgrade to remove watermark.</span>
        </div>
        <div className="flex flex-row items-center justify-center w-[600px]">
          <div className="relative w-full text-orange-600">
            <div className="p-1 h-[48px] rounded-xl">
              <div className="relative left-0 h-full w-full overflow-hidden text-lg text-white rounded-xl bg-[#FFFFFF14]">
                <div
                  className="absolute top-0 bottom-0 left-0 w-0 bg-white transition-all rounded-xl"
                  style={{
                    left: selectedOption === "yearly" ? "50%" : "0%",
                    width: "50%",
                  }}
                ></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 box-border flex items-stretch justify-between font-semibold">
                  <div
                    onClick={() => setSelectedOption("monthly")}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-sm rounded-xl ${
                      selectedOption === "monthly"
                        ? "text-white mix-blend-exclusion"
                        : "text-white/[.50]"
                    }`}
                  >
                    Monthly
                  </div>
                  <div
                    onClick={() => setSelectedOption("yearly")}
                    className={`flex flex-1 cursor-pointer items-center justify-center text-sm rounded-xl ${
                      selectedOption === "yearly"
                        ? "text-white mix-blend-exclusion"
                        : "text-white/[.50]"
                    }`}
                  >
                    Yearly
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[29px] w-[197px] text-center relative right-[5px] my-auto">
            <Offer />
            <div className="absolute top-[50%] left-0 w-full translate-y-[-50%] pl-7 text-sm text-white">
              <div className="-skew-x-12 flex items-center gap-1">
                <div className="font-semibold">50% OFF</div>
                <div className="text-[10px]">(Limited Time Offer)</div>
              </div>
            </div>
          </div>
        </div>
        <button
          data-loading="false"
          className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress bg-transparent text-color-support hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent disabled:text-color-disable rounded-2xl p-0 h-10 w-10"
        >
          <CloseIcn />
        </button>
      </div>

      <div className="max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
        <div className="infinite-scroll-component__outerdiv no-scrollbar">
          <div
            className="infinite-scroll-component no-scrollbar"
            style={{ overflow: "auto" }}
          >
            <div className="flex items-center flex-col  justify-center py-4">
              <div className="mt-2 mb-4 flex items-center justify-center text-amber-300 text-label-md">
                We're rolling out new upgrades every week, adding features to
                ensure you stay impressed and satisfied with our product.
              </div>
            </div>
            <div className="grid mx-auto justify-center items-center grid-cols-[29%_38%_29%] gap-5">
              <div className="">
                {" "}
                <PaymentStarter />
              </div>
              <div className="">
                {" "}
                <PaymentStarter />
              </div>
              <div className="">
                {" "}
                <PaymentStarter />
              </div>
            </div>
            <div className="w-full mt-5 flex justify-center items-center">
                <FreePlan/>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscriptionModel;
