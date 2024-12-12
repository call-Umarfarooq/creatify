
'use client'
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import { Crossicon } from "../utils/SvgIcons";
import { BackgroundColor } from "@icon-park/react";

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
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  }
};

interface IModalProps {
  isOpen: boolean;
  children: any;
  onClose: (e?: React.MouseEvent) => void;
}

function CreaditHistoryModel({ isOpen, children, onClose }: IModalProps) {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
    >
      <div
        id="popular-tools-modal"
        className="row-start-2 w-full  p-5 bg-[#181818] ring-1 ring-zinc-950/10 sm:mb-auto  shadow-unsubscription-modal sm:max-w-4xl"
      >
        <div className="flex justify-between items-center ">
          <h2
            id="radix-:r1j:"
            className="font-semibold text-lg text-white leading-none tracking-tight"
          >
            Credits history
          </h2>

          <button
          onClick={onClose}
            data-loading="false"
            className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-transparent hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent rounded-xl p-0 h-10 w-10"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 48 48"
            >
              <g>
                <path
                  data-follow-fill="currentColor"
                  d="M38.322 39.57c.184-.076.348-.24.678-.57.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678L26.121 24 39 11.121c.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678-.33-.33-.494-.494-.678-.57a1 1 0 0 0-.765 0c-.184.076-.349.24-.678.57L24 21.879 11.121 9c-.33-.33-.494-.494-.678-.57a1 1 0 0 0-.765 0c-.184.076-.349.24-.678.57-.33.33-.494.494-.57.678a1 1 0 0 0 0 .765c.076.184.24.349.57.678L21.879 24 9 36.879c-.33.33-.494.494-.57.678a1 1 0 0 0 0 .765c.076.184.24.349.57.678.33.33.494.494.678.57a1 1 0 0 0 .765 0c.184-.076.349-.24.678-.57L24 26.121 36.879 39c.33.33.494.494.678.57a1 1 0 0 0 .765 0Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>{" "}
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg bg-white/5 p-4">
          <div className="flex flex-1 items-center">
            <div className="flex items-center gap-1">
              <p
                data-slot="text"
                className="font-normal  text-[12px] leading-[16px] text-white/60 font-sans"
              >
                Current credits:
              </p>
              <p
                data-slot="text"
                className="font-normal  text-white text-[12px] leading-[16px] font-sans"
              >
                Free(10 credits/<span>mo</span>)
              </p>
              <div className="cursor-pointer" id="current-plan">
                <div
                  className="flex-center"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="m11.25 11.25.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0Zm-9-3.75h.008v.008H12z"></path></svg>
                </div>
              </div>
            </div>
            <div className="mx-4 h-[18px] w-[1px] bg-white/15"></div>
            <div className="flex items-center gap-1">
              <p
                data-slot="text"
                className="font-normal  text-[12px] leading-[16px] text-white/60 font-sans"
              >
                Next renewal:
              </p>
              <p
                data-slot="text"
                className="font-normal  text-white text-[12px] leading-[16px] font-sans"
              >
                December 29, 2024
              </p>
            </div>
            <div className="mx-4 h-[18px] w-[1px] bg-white/15"></div>
            <div className="flex items-center gap-1">
              <p
                data-slot="text"
                className="font-normal  text-[12px] leading-[16px] text-white/60 font-sans"
              >
                Credits left:
              </p>
              <p
                data-slot="text"
                className="font-normal text-white text-[12px] leading-[16px] font-sans"
              >
                0
              </p>
            </div>
          </div>
          <button
            className="text-white border-0 shadow-md bg-[#5D54FF] md:text-base data-[hover]:bg-[#7D76FF] data-[active]:bg-[#4F48D5] data-[disabled]:bg-[#423DAB] rounded-full md:py-2 md:px-4 h-[36px] md:leading-[18px] relative isolate inline-flex items-center justify-center gap-x-2 font-sans hover:opacity-80 data-[disabled]:opacity-50 [&> [data-slot=icon]]:-mx-0.5 [&> [data-slot=icon]]:my-0.5 [&> [data-slot=icon]]:size-5 [&> [data-slot=icon]]:shrink-0 [&> [data-slot=icon]]:text-[--btn-icon] [&> [data-slot=icon]]:sm:my-1 [&> [data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] w-[84px] font-medium text-[14px] sm:text-[14px] lg:text-[14px] cursor-pointer"
            type="button"
          >
            Upgrade
            <span
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <div className="h-[428px] mt-4 overflow-y-auto overflow-x-hidden rounded-lg border border-white/20 border-solid">
      <div className="page-in w-full p-5">
        <div className="">
          <div className="-mx-[--gutter] overflow-x-auto md:whitespace-nowrap">
            <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
              <table className="border-0 border-collapse min-w-full text-left text-sm/6">
                <thead className="text-zinc-500">
                  <tr>
                    <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium ">
                      Item
                    </th>
                    <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium ">
                      Description
                    </th>
                    <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium ">
                      Credits
                    </th>
                    <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium ">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className="mt-1 text-white/[0.6]">
                  <tr className="border-b border-b-white border-solid">
                    <td className="font-medium relative px-4 border-zinc-950/5 border-b py-4 ">
                      use_credit
                    </td>
                    <td className=" px-4  border-zinc-950/5 border-b py-4 ">
                      Link to Video (ccc45782-15bd-4f06-9282-29dbccf310bb)
                    </td>
                    <td className="relative px-4  border-zinc-950/5 border-b py-4 ">
                      -5
                    </td>
                    <td className="relative px-4  border-zinc-950/5 border-b py-4 ">
                      Dec 01, 2024
                    </td>
                  </tr>
                  <tr className="border-b border-b-white border-solid">
                    <td className="font-medium relative px-4  border-zinc-950/5 border-b py-4 ">
                      use_credit
                    </td>
                    <td className="relative px-4  border-zinc-950/5 border-b py-4 s">
                      Link to Video (b23a7c52-8708-46b9-886d-8db5927cbc0b)
                    </td>
                    <td className="relative px-4 border-zinc-950/5 border-b py-4 ">
                      -5
                    </td>
                    <td className="relative px-4  border-zinc-950/5 border-b py-4 ">
                      Dec 01, 2024
                    </td>
                  </tr>
                  <tr className="border-b border-b-white border-solid">
                    <td className="font-medium relative px-4 ] border-zinc-950/5 border-b py-4 ">
                      free_credit
                    </td>
                    <td className="whitespace-pre-line relative px-4  border-zinc-950/5 border-b py-4 ">
                      Monthly grant of free
                    </td>
                    <td className="relative px-4  border-zinc-950/5 border-b py-4">
                      10
                    </td>
                    <td className="relative px-4  border-zinc-950/5 border-b py-4 ">
                      Nov 29, 2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex w-full items-center justify-between pr-2">
            <div className="flex w-full items-center">
              <button
                className="rounded-lg text-white bg-white/10 shadow-md border-white/60 border-solid md:text-base data-[hover]:bg-white/40 data-[hover]:border-white data-[active]:border-white data-[active]:bg-[#fff]/30 data-[disabled]:bg-white/20 border-0 md:py-2 md:px-4 h-[36px] md:leading-[18px] relative isolate inline-flex items-center justify-center gap-x-2 font-sans hover:opacity-80 data-[disabled]:opacity-50"
                type="button"
              >
                &lt; Back
                <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
              </button>
              <div className="flex mx-1 rounded-[2px] justify-center w-8 h-8 items-center text-base hover:text-white cursor-pointer hover:bg-white hover:bg-opacity-20 bg-white bg-opacity-20 text-white">
                {page}
              </div>
              <button
                className="rounded-lg text-white bg-white/10 shadow-md border-white/60 border-solid md:text-base data-[hover]:bg-white/40 data-[hover]:border-white data-[active]:border-white data-[active]:bg-[#fff]/30 data-[disabled]:bg-white/20 border-0 md:py-2 md:px-4 h-[36px] md:leading-[18px] relative isolate inline-flex items-center justify-center gap-x-2 font-sans hover:opacity-80 data-[disabled]:opacity-50"
                type="button"
                onClick={() => handlePageChange(page + 1)}
              >
                Next &gt;
                <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
              </button>
            </div>
            <div className="flex flex-auto items-center justify-center">
              <p data-slot="text" className="text-[14px] leading-[18px] mr-2 font-normal text-white font-sans">
                Page
              </p>
              <div data-slot="control" className="relative block h-9 w-[60px] border-0 text-[14px] sm:w-[60px]">
                <input
            
                  className="text-white placeholder:text-white[0.3] bg-[#393939] focus:bg-[#393939] focus:outline-none border-zinc-950/10 data-[hover]:border-zinc-950/10 sm:border-0 sm:rounded-md sm:py-2.5 sm:px-5 sm:w-[60px]"
                  name="text"
                  placeholder="10"
                  type="text"
                  maxLength={3}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </Modal>
  );
}

export default CreaditHistoryModel;
