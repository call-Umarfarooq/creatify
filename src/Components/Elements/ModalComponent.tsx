import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "transparent",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s",
    overflow: "visible",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  overlay: { zIndex: 1000 },
};

interface IModalProps {
  isOpen: boolean;
  children: any;
  onClose: (e?: React.MouseEvent) => void;
}

function ModalComponent({
  isOpen,
  children,
  onClose,
}: IModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
    >
      <div
        id="popular-tools-modal"
        className="row-start-2 w-full min-w-0 rounded-3xl border-[1px] border-white/[0.2] bg-[#181818] pt-10 pr-7 pb-5 pl-7 ring-1 ring-zinc-950/10 sm:mb-auto sm:rounded-[19px] shadow-unsubscription-modal sm:max-w-4xl"
      >
        <div className="flex flex-row items-center justify-between">
          <p className="text-pretty font-bold text-lg/6 text-white sm:text-3xl/6 font-sans">
            Popular tools
          </p>
          <button
          onClick={onClose}
            className="rounded-full text-white bg-white/[0.1] shadow-md border-0 [--btn-icon:theme(colors.white)] data-[active]:[--btn-icon:theme(colors.white)] data-[hover]:[--btn-icon:theme(colors.white)] relative isolate inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans hover:opacity-80 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 cursor-pointer"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
            <span
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div className=" no-scrollbar relative mt-5 grid max-h-[500px] min-h-[300px] w-full grid-cols-1 gap-6 overflow-y-auto sm:grid-cols-2 md:grid-cols-3">
          {children}
        </div>
      </div>
    </Modal>
  );
}

export default ModalComponent;
