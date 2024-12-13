import React, { useState } from "react";
import Modal from "react-modal";
import { Check, Diamond, Info, Caution } from "@icon-park/react";
import { CloseIcn, Offer } from "../utils/SvgIcons";
import PaymentStarter from "./PaymentStarter";
import FreePlan from "./FreePlan";
import PaymentPro from "./PaymentPro";
import Enterprise from "./Enterprise";

const customStyles = {
  content: {
    backgroundColor: "#181818",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    overflow: "hidden",
    // transform: "translate(-50%, -50%)",
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const comp = [<PaymentStarter selectedOption={selectedOption} />, <PaymentPro selectedOption={selectedOption} />, <Enterprise selectedOption={selectedOption} />];
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comp.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + comp.length) % comp.length
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="flex dialogWidth1  h-10  items-center justify-between bg-bg-2">
        <div className="flex items-center justify-center gap-2 text-color-title text-title-h4">
          <span className="flex items-center">
            <Diamond theme="outline" size="24" fill="#FFFFFF" />
          </span>
          <span className="min-w-max1 hide-text">
            Upgrade to remove watermark.
          </span>
        </div>
        <div className="flex flex-row items-center justify-center w-[100vh] md:w-[600px]">
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

          <div className="h-[29px] hide-text w-[197px] text-center relative right-[5px] my-auto">
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
          onClick={onClose}
          data-loading="false"
          className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress bg-transparent text-color-support hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent disabled:text-color-disable rounded-2xl p-0 h-10 w-10"
        >
          <CloseIcn />
        </button>
      </div>

      <div className="max-h-[calc(100vh-100px)] hide-component1 dialogWidth1  overflow-x-scroll no-scrollbar overflow-y-scroll">
        <div>
          <div className="flex items-center flex-col  justify-center py-4">
            <div className="mt-2 mb-4 flex items-center justify-center text-amber-300 text-label-md">
              We're rolling out new upgrades every week, adding features to
              ensure you stay impressed and satisfied with our product.
            </div>
          </div>
          <div className="grid mx-auto min-w-[1000px] no-scrollbar overflow-scroll justify-center  items-center grid-cols-[29%_38%_29%] gap-5">
            <div className="">
              {" "}
              <PaymentStarter selectedOption={selectedOption}/>
            </div>
            <div className="">
              {" "}
             <PaymentPro selectedOption={selectedOption} />
            </div>
            <div className="">
              {" "}
              <Enterprise selectedOption={selectedOption}/>
            </div>
          </div>
          <div className="w-full min-w-[900px]  no-scrollbar overflow-scroll mt-5 mb-8 flex justify-center items-center">
            <FreePlan />
          </div>
        </div>
      </div>

      
      <div className="h-[800px] hide-component pb-40">
     
        <div className="max-h-[calc(100vh-100px)] pb-28 overflow-y-scroll  px-10 mx-auto  ">
        <div className="flex items-center  hide-component  justify-center py-4">
            <div className="mt-2 mb-4 flex items-center justify-center text-amber-300 text-label-md">
              We're rolling out new upgrades every week, adding features to
              ensure you stay impressed and satisfied with our product.
            </div>
          </div>
          <div
            className="carousel w-[1200px] flex transition-transform duration-500 gap-3"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {comp.map((image, index) => (
              <div className="carousel-item  w-[800px] " key={index}>
                {image}
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black rounded-full p-2"
            onClick={prevImage}
          >
            <svg
              className="text-white"
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
                  fill="#fff"
                  d="m20.308 24.363 10.012 9.792c.347.338.52.508.6.697.107.252.107.535 0 .787-.08.188-.253.358-.6.697-.346.338-.52.508-.712.586a1.074 1.074 0 0 1-.805 0c-.193-.078-.366-.248-.713-.586l-10.012-9.792a3.542 3.542 0 0 1 0-5.088l10.012-9.791c.347-.34.52-.508.713-.587.258-.104.547-.104.805 0 .193.079.366.248.712.587.347.338.52.508.6.697.107.251.107.534 0 .786-.08.19-.253.359-.6.697l-10.012 9.792a.506.506 0 0 0 0 .726Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </button>

        
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black rounded-full p-2"
            onClick={nextImage}
          >
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
                  fill="#fff"
                  d="M27.692 23.637 17.68 13.845c-.347-.338-.52-.508-.6-.697a1.007 1.007 0 0 1 0-.787c.08-.189.253-.358.6-.697.346-.338.52-.508.712-.586.258-.104.547-.104.805 0 .193.079.366.248.713.587l10.012 9.79a3.542 3.542 0 0 1 0 5.09l-10.012 9.79c-.347.34-.52.508-.713.587a1.074 1.074 0 0 1-.805 0c-.193-.078-.366-.248-.712-.586-.347-.34-.52-.508-.6-.697a1.007 1.007 0 0 1 0-.787c.08-.19.253-.358.6-.697l10.012-9.792a.506.506 0 0 0 0-.726Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SubscriptionModel;
