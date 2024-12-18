import React from "react";
import NavTwo from "../Elements/NavTwo";
import Image from "next/image";

const AiShorts = () => {
  return (
    <div className="bg2 gradient-bg1">
      <div className="relative linearG h-screen w-screen flex-col overflow-x-hidden sm:pt-[98px] lg:pt-[72px]">
        <NavTwo />
        <main className="flex-1 overflow-y-auto">
          <div className="page-in h-full w-full">
            <div className="no-scrollbar h-full w-full flex-col gap-6 overflow-y-auto lg:flex-col">
              <div className="pb-[200px]">
                <div className="mt-[50px] pl-5 lg:pl-[50px] 2xl:pl-[250px]">
                  <p
                    data-slot="text"
                    className="text-white font-bold text-3xl font-sans"
                  >
                    AI shorts
                  </p>
                </div>

                <div className="mt-9 flex h-[500px] flex-col justify-between gap-10 pr-5 pl-5 lg:grid lg:grid-cols-2 lg:pr-[50px] lg:pl-[50px] 2xl:pr-[250px] 2xl:pl-[250px]">
                  <div className="flex w-full flex-col justify-start">
                    <div className="flex h-[38px] flex-row items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p
                          data-slot="text"
                          className="text-white font-bold font-sans"
                        >
                          Script
                        </p>
                        <div>
                          <div>
                            <div
                              className="flex-center flex justify-center items-center  cursor-pointer rounded-full  p-1"
                              style={{ color: "rgb(78, 128, 238)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.8 3.8 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502a2.3 2.3 0 00.503-.331c.83-.727.83-1.857 0-2.584M12 18a.75.75 0 100-1.5.75.75 0 000 1.5"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-white p-2 bg-[#5C54FF]/[0.2] border-[#5C54FF] border-2 border-solid shadow-md relative inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans hover:opacity-80 data-[disabled]:opacity-50 rounded-lg cursor-pointer">
                          <div className="flex-row items-center gap-2">
                            <p
                              data-slot="text"
                              className="font-normal text-white font-sans"
                            >
                              Feeling lucky
                            </p>
                          </div>
                        </button>
                        <button className="text-white bg-[#371461] border-[#a412ff] border-2 border-solid shadow-md relative inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans hover:opacity-80 data-[disabled]:opacity-50 rounded-lg cursor-pointer">
                          <div className="flex-row flex items-center p-2 gap-2">
                            <div className=" flex " style={{ color: "white" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                              >
                                <g fill="currentColor">
                                  <path
                                    fill-rule="evenodd"
                                    d="M6.5 11.167c0-.466 0-.7.076-.883a1 1 0 01.541-.541c.184-.076.417-.076.883-.076h12.833c.466 0 .7 0 .883.076a1 1 0 01.541.541c.076.184.076.417.076.883s0 .699-.076.882a1 1 0 01-.541.542c-.184.076-.417.076-.883.076H8c-.466 0-.699 0-.883-.076a1 1 0 01-.54-.542c-.077-.183-.077-.416-.077-.882m0 9.166c0-.466 0-.699.076-.882a1 1 0 01.541-.542c.184-.076.417-.076.883-.076h9.167c.466 0 .699 0 .882.076a1 1 0 01.541.542c.077.183.077.416.077.882s0 .7-.077.883a1 1 0 01-.54.541c-.184.076-.417.076-.883.076H8c-.466 0-.699 0-.883-.076a1 1 0 01-.54-.541c-.077-.184-.077-.417-.077-.883m0 9.167c0-.466 0-.699.076-.883a1 1 0 01.541-.54C7.301 28 7.534 28 8 28h12.833c.466 0 .7 0 .883.076a1 1 0 01.541.541c.076.184.076.417.076.883s0 .699-.076.883a1 1 0 01-.541.54c-.184.077-.417.077-.883.077H8c-.466 0-.699 0-.883-.076a1 1 0 01-.54-.541c-.077-.184-.077-.417-.077-.883m0 9.167c0-.466 0-.7.076-.883a1 1 0 01.541-.541c.184-.076.417-.076.883-.076h29.333c.466 0 .7 0 .883.076a1 1 0 01.541.541c.076.184.076.417.076.883s0 .699-.076.882a1 1 0 01-.541.542c-.184.076-.417.076-.883.076H8c-.466 0-.699 0-.883-.076a1 1 0 01-.54-.542c-.077-.183-.077-.416-.077-.882"
                                    clip-rule="evenodd"
                                  ></path>
                                  <path d="m30.213 13.5.231 1.404a9.95 9.95 0 007.87 8.143 9.95 9.95 0 00-7.87 8.142l-.231 1.404-.231-1.404a9.95 9.95 0 00-7.87-8.142 9.95 9.95 0 007.87-8.143zm9.805 12.834.069.419a2.97 2.97 0 002.35 2.433 2.97 2.97 0 00-2.35 2.432l-.07.42-.069-.42a2.97 2.97 0 00-2.35-2.432 2.97 2.97 0 002.35-2.433zM38.201 8l.114.691a4.9 4.9 0 003.876 4.011c-2 .4-3.544 1.998-3.876 4.011l-.114.692-.114-.692a4.9 4.9 0 00-3.876-4.01c2-.4 3.545-1.998 3.876-4.011z"></path>
                                </g>
                              </svg>{" "}
                            </div>
                            <p
                              data-slot="text"
                              className="font-normal text-white font-sans"
                            >
                              AI script writer
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 flex-1 flex-col justify-between">
                      <div
                        tabIndex={0}
                        className="flex-col rounded-2xl border-[1px] border-transparent border-solid bg-white/10 p-4"
                      >
                        <div className="h-full">
                          <div
                            contentEditable="true"
                            translate="no"
                            className="tiptap ProseMirror w-full overflow-auto h-[220px]"
                            tabIndex={0}
                          >
                            <p
                              data-placeholder="Enter your script here..."
                              className="is-empty undefined is-editor-empty"
                            >
                              <br className="ProseMirror-trailingBreak" />
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex gap-3">
                            <div>
                              <div className="inline-flex w-auto cursor-pointer bg-transparent focus:border-none focus:outline-none">
                                <div
                                  data-tooltip-id="tooltip"
                                  data-tooltip-content="Add pause"
                                  data-tooltip-place="top"
                                >
                                  <button className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus bg-area-container hover:bg-ux-hover active:bg-ux-press h-8 rounded-lg px-3">
                                    <svg
                                      preserveAspectRatio="xMidYMid meet"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                    >
                                      <g>
                                        <path
                                          data-follow-fill="currentColor"
                                          d="M21 15v9.257c-.003.303-.007.81.19 1.285.197.476.558.832.775 1.045l.06.06L28.38 33c.33.33.494.494.678.57a1 1 0 0 0 .765 0c.184-.076.349-.24.678-.57.33-.33.494-.494.57-.678a1 1 0 0 0 0-.765c-.076-.184-.24-.349-.57-.678l-6.354-6.354a.5.5 0 0 1-.146-.353V15c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C21 14.301 21 14.534 21 15Z"
                                          fill="currentColor"
                                        ></path>
                                        <path
                                          data-follow-fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M23.5 1.5C11.074 1.5 1 11.574 1 24s10.074 22.5 22.5 22.5S46 36.426 46 24 35.926 1.5 23.5 1.5ZM4 24C4 13.23 12.73 4.5 23.5 4.5S43 13.23 43 24s-8.73 19.5-19.5 19.5S4 34.77 4 24Z"
                                          fill="currentColor"
                                        ></path>
                                      </g>
                                    </svg>{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="inline-flex w-auto cursor-pointer bg-transparent focus:border-none focus:outline-none">
                                <div
                                  data-tooltip-id="tooltip"
                                  data-tooltip-content="Edit pronunciation"
                                  data-tooltip-place="top"
                                >
                                  <button
                                    className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus bg-area-container hover:bg-ux-hover active:bg-ux-press h-8 rounded-lg px-3"
                                    disabled
                                  >
                                    <svg
                                      preserveAspectRatio="xMidYMid meet"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                    >
                                      <g>
                                        <path
                                          data-follow-fill="currentColor"
                                          fill="currentColor"
                                          d="M18 4.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v36c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V6c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077Zm12.883 4.076C30.699 8.5 30.466 8.5 30 8.5s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883v14.38a12.965 12.965 0 0 1 3-1.58V10c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54ZM25.5 15v12.334a12.934 12.934 0 0 0-2.485 7.04 1 1 0 0 1-.439-.491c-.076-.184-.076-.417-.076-.883V15c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883Zm18 8v1.38a12.97 12.97 0 0 0-3-1.58c.002-.337.012-.527.076-.683a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883Zm-6-5v4.086a13.15 13.15 0 0 0-3 0V18c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883ZM12 13.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v18c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V15c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077Zm-5.117 6.076C6.699 19.5 6.466 19.5 6 19.5s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883v6c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-6c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54Z"
                                        ></path>
                                        <path
                                          data-follow-fill="currentColor"
                                          fill="currentColor"
                                          d="M36 45a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 46 35a9.97 9.97 0 0 0-2.929-7.071A9.97 9.97 0 0 0 36 25a9.97 9.97 0 0 0-7.071 2.929A9.97 9.97 0 0 0 26 35a9.97 9.97 0 0 0 2.929 7.071A9.97 9.97 0 0 0 36 45Zm6.06-13.06c.33.329.495.494.571.677a1 1 0 0 1 0 .766c-.076.183-.24.348-.57.678l-4.635 4.634c-.29.29-.603.604-.904.833-.352.269-.855.558-1.522.558s-1.17-.29-1.522-.558c-.3-.229-.614-.543-.904-.833l-1.635-1.634c-.33-.33-.494-.495-.57-.678a1 1 0 0 1 0-.766c.076-.183.241-.348.57-.678.33-.33.495-.494.678-.57a1 1 0 0 1 .766 0c.183.076.348.24.678.57l1.586 1.586a.498.498 0 0 0 .707 0l4.585-4.586c.33-.33.495-.494.678-.57a1 1 0 0 1 .766 0c.183.076.348.24.678.57Z"
                                          clip-rule="evenodd"
                                          fill-rule="evenodd"
                                        ></path>
                                      </g>
                                    </svg>{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-normal text-sm text-white/30">
                            <span className="text-white">0</span>/3600
                          </div>
                        </div>
                      </div>
                      <div className="h-5 flex-none px-3 pt-1 text-body-sm text-ux-red-default"></div>
                      <div className="mt-4 h-full">
                        <div className="flex flex-col">
                          <p
                            data-slot="text"
                            className="text-white font-bold font-sans"
                          >
                            Aspect Ratio
                          </p>
                          <div className="mt-2 flex h-[56px] w-full flex-row justify-between gap-3">
                            <div className="w-full flex-row  flex-wrap grid grid-cols-3 gap-3">
                              <div
                                className="relative cursor-pointer hover:opacity-70"
                                data-tooltip-id="tooltip"
                                data-tooltip-content=""
                                data-tooltip-place="top"
                              >
                                <div className="h-[52px] w-full flex justify-center items-center rounded-lg backdrop-blur-sm bg-white text-black">
                                  <div className="mt-1 flex-col flex justify-start items-center  gap-1">
                                    <div className="h-[16px] w-[8px] rounded-sm border border-solid border-black"></div>
                                    <p
                                      data-slot="text"
                                      className="font-normal text-xs text-black font-sans"
                                    >
                                      9:16
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative cursor-pointer hover:opacity-70"
                                data-tooltip-id="tooltip"
                                data-tooltip-content=""
                                data-tooltip-place="top"
                              >
                                <div className="h-[52px] w-full flex justify-center items-center rounded-lg backdrop-blur-sm bg-white/[0.1] text-white">
                                  <div className="mt-1 flex justify-center items-center flex-col gap-1">
                                    <div className="h-[8px] w-[16px] rounded-sm border border-solid"></div>
                                    <p
                                      data-slot="text"
                                      className="font-normal text-white text-xs font-sans"
                                    >
                                      16:9
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative cursor-pointer hover:opacity-70"
                                data-tooltip-id="tooltip"
                                data-tooltip-content=""
                                data-tooltip-place="top"
                              >
                                <div className="h-[52px] w-full flex justify-center items-center rounded-lg backdrop-blur-sm bg-white/[0.1] text-white">
                                  <div className="mt-1 flex justify-center items-center flex-col gap-1">
                                    <div className="h-[14px] w-[14px] rounded-sm border border-solid"></div>
                                    <p
                                      data-slot="text"
                                      className="font-normal text-white text-xs font-sans"
                                    >
                                      1:1
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex h-full w-full flex-col justify-start">
                    <div className="flex h-[20px] items-center justify-between">
                      <p
                        data-slot="text"
                        className="text-white mb-1 font-bold text-md font-sans"
                      >
                        Style
                      </p>
                    </div>
                    <div className="relative mt-5 grid max-h-[500px] w-full flex-1 auto-rows-max grid-cols-1 gap-4 overflow-y-auto px-4 pt-2 sm:grid-cols-2 md:grid-cols-3">
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-2 border-[#5C54FF]">
                        <div className="absolute top-[-8px] right-[-8px] z-10 h-6 w-6 flex-center rounded-full bg-[#5c54ff]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                            height={500}
                            width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            Collage
                          </p>
                        </div>
                      </div>

                      {/* Repeat for other art styles */}
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                            height={500}
                            width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            Line art
                          </p>
                        </div>
                      </div>

                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                          height={500}
                          width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image 
                          height={500}
                          width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                          height={500}
                          width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                          height={500}
                          width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                          height={500}
                          width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                          height={500}
                          width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                      <div className="relative flex aspect-1/1 w-full cursor-pointer flex-col rounded-2xl border border-solid border-[#fff]/[.0]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/25 shadow-2xl backdrop-blur-md">
                          <Image
                            height={500}
                            width={500}
                            className="h-full w-full"
                            src="/assets/collage.png"
                            alt="cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-[9px] left-[9px] z-[2] flex-center rounded-[4px]"
                          style={{
                            background:
                              "linear-gradient(92.89deg, rgb(244, 118, 98) -9.53%, rgb(241, 184, 125) 26.87%, rgb(233, 97, 194) 63%, rgb(93, 119, 240) 97.82%)",
                          }}
                        >
                          <p
                            data-slot="text"
                            className="pt-0.5 pr-1 pb-0.5 pl-1 font-semibold text-white text-xs font-sans"
                          >
                            4K realistic
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt">
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed  bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press
       disabled:text-color-disable disabled:bg-ux-brand-disable rounded-2xl px-5 h-[50px] w-[150px] lg:w-[226px]`}
                >
                  <div>Next</div>
                  <span className="icon">
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
                          fill="currentColor"
                          d="M28.2 38.338c.333.337.5.506.684.584a.995.995 0 0 0 .773 0c.185-.078.351-.247.683-.584l10.2-10.355.063-.065c.618-.627 1.184-1.201 1.582-1.732.44-.584.815-1.29.815-2.186 0-.895-.376-1.602-.815-2.186-.398-.53-.964-1.105-1.582-1.732L30.34 9.662c-.332-.337-.498-.506-.683-.584a.995.995 0 0 0-.773 0c-.185.078-.351.247-.683.584-.333.338-.499.506-.576.694a1.04 1.04 0 0 0 0 .784c.077.188.243.357.576.695L38.4 22.19c.1.1.029.274-.112.274H6.513c-.47 0-.705 0-.89.078a1.016 1.016 0 0 0-.546.554C5 23.284 5 23.523 5 24c0 .477 0 .716.077.904.102.251.299.45.546.554.185.078.42.078.89.078h31.775c.14 0 .211.173.112.274L28.2 36.166c-.332.337-.498.506-.575.694a1.04 1.04 0 0 0 0 .784c.077.188.243.357.576.694Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AiShorts;
