import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import { Crossicon } from "../utils/SvgIcons";

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
  title?:any
}

function LimitexceededModel({
  isOpen,
  children,
  onClose,
  title
}: IModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
    >
      <div
        id="popular-tools-modal"
        className=""
      >
        <div className="flex flex-row items-center justify-between">
          <p className="text-pretty font-bold text-lg/6 text-white sm:text-3xl/6 font-sans">
           {title}
          </p>
          <button
          onClick={onClose}
            className="rounded-full text-white bg-white/[0.1] shadow-md border-0 [--btn-icon:theme(colors.white)] data-[active]:[--btn-icon:theme(colors.white)] data-[hover]:[--btn-icon:theme(colors.white)] relative isolate inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans hover:opacity-80 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 cursor-pointer"
            type="button"
          >
          <Crossicon/>
            <span
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </Modal>
  );
}

export default LimitexceededModel;
