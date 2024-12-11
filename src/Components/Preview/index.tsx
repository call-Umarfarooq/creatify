import React from "react";
import NavTwo from "../Elements/NavTwo";

const Preview = () => {
  return (
    <div className="bg2 gradient-bg1">
      <div className="relative linearG h-screen w-screen flex-col overflow-x-hidden sm:pt-[98px] lg:pt-[72px]">
        <NavTwo />
        <div className="relative top-0 left-0 h-full overflow-y-auto">
          <div className="fixed top-[80px]  w-full flex-col items-center justify-center pt-1">
            <div className="z-[40] flex w-full mx-auto  max-w-[1200px] flex-row items-center justify-between pr-[24px] pl-[24px]">
              <div className="flex flex-col gap-1">
                <div className="line-clamp-1 text-white text-title-h4">
                  11 videos are generated! Select one or more to render
                </div>
                <div className="flex flex-row gap-1">
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
                        d="M24 14.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v13c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.541-.541c-.076-.184-.076-.417-.076-.883V16c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077ZM22 36c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C23.303 34 23.536 34 24 34s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.052.192.052.424.052.889s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06c-.192.052-.424.052-.89.052-.464 0-.697 0-.887-.051a1.5 1.5 0 0 1-1.061-1.06C22 36.696 22 36.464 22 36Z"
                        fill="currentColor"
                      ></path>
                      <path
                        data-follow-fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 7.933c-.973 1.225-2.064 3.107-3.63 5.817l-10.392 18c-1.565 2.71-2.649 4.596-3.223 6.051-.57 1.442-.47 2.05-.24 2.449.23.398.706.788 2.24 1.016 1.548.23 3.723.234 6.853.234h20.784c3.13 0 5.305-.004 6.852-.234 1.535-.227 2.011-.618 2.242-1.016.23-.398.329-1.007-.24-2.449-.576-1.455-1.66-3.34-3.225-6.051l-10.392-18C28.064 11.04 26.973 9.158 26 7.933 25.037 6.718 24.46 6.5 24 6.5c-.46 0-1.037.218-2 1.433Zm-2.35-1.866C20.802 4.615 22.15 3.5 24 3.5c1.85 0 3.197 1.115 4.35 2.567 1.128 1.421 2.328 3.5 3.812 6.07l10.523 18.226c1.484 2.57 2.684 4.649 3.35 6.336.681 1.724.973 3.45.049 5.051-.925 1.602-2.565 2.212-4.399 2.484-1.794.266-4.194.266-7.162.266H13.477c-2.968 0-5.368 0-7.162-.266-1.834-.273-3.474-.882-4.399-2.484-.924-1.602-.633-3.327.049-5.051.666-1.687 1.866-3.765 3.35-6.336l10.523-18.226c1.484-2.57 2.684-4.649 3.812-6.07Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <div className="line-clamp-1 text-[#F97316] text-sm">
                    Accurate lip sync will be available after rendering
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-10 rounded-xl px-3 pr-6 pl-6"
                >
                  <div>Back</div>
                </button>
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-gradient-to-br from-[#9763FF] to-[#549CE3] text-color-title hover:opacity-70 active:opacity-50 disabled:opacity-30 data-[loading=true]:bg-area-container h-10 rounded-xl px-3"
                >
                  <div>
                    Render (
                    <span>
                      <span>1 video</span>
                    </span>
                    )
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex w-full flex-col items-center overflow-y-scroll pr-2 pl-2 top-[85px] h-[calc(100%-85px)] sm:top-[150px] sm:h-[calc(100%-150px)] md:top-[45px] md:h-[calc(100%-45px)] lg:top-[70px] lg:h-[calc(100%-70px)] xl:top-[70px] xl:h-[calc(100%-70px)]">
            <div className="w-full flex-row flex-wrap grid max-w-[1200px] gap-x-[24px] gap-y-[24px] pr-[24px] pb-[48px] pl-[24px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="shadow-focus-md cursor-pointer hover:shadow-focus-md relative mt-3 box-content h-full w-full overflow-hidden rounded-2xl border border-line-2 border-solid">
                <div className="w-full bg-area-platform aspect-9/16">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "1080 / 1920",
                      maxWidth: "100%",
                      height: "100%",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "242.734px",
                        height: "431.528px",
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        left: "0px",
                        top: "0.0095486px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="__remotion-player"
                        style={{
                          position: "absolute",
                          width: "1080px",
                          height: "1920px",
                          display: "flex",
                          transform: "scale(0.224754)",
                          marginLeft: "-418.633px",
                          marginTop: "-744.236px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            opacity: 1,
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              background: "#fff",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                opacity: 1,
                              }}
                            >
                              <div
                                style={{
                                  width: "1080px",
                                  height: "1920px",
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transformOrigin: "center center",
                                  transform:
                                    "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(1, 1)",
                                  opacity: 1,
                                }}
                              >
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    transformOrigin: "center center",
                                    position: "relative",
                                    transform:
                                      "translate(0px, 0px) translate(0%, 0%) rotate(0deg) scale(1, 1)",
                                    opacity: 1,
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      inset: 0,
                                      width: "100%",
                                      height: "100%",
                                      display: "flex",
                                      opacity: 1,
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "1920px",
                                        height: "1920px",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transformOrigin: "center center",
                                        transform:
                                          "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(1, 1)",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          transformOrigin: "center center",
                                          position: "relative",
                                          transform:
                                            "translate(0px, 0px) translate(0%, 0%) rotate(0deg) scale(1, 1)",
                                          opacity: 1,
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        >
                                          <div
                                            style={{
                                              position: "absolute",
                                              inset: 0,
                                              width: "100%",
                                              height: "100%",
                                              display: "flex",
                                              overflow: "hidden",
                                            }}
                                          >
                                            <video
                                              playsInline
                                              src="https://dpbavq092lwjh.cloudfront.net/creators/285923a8-25b1-4ad1-a5ea-40ad8cbcaf9d/squared_video_s_720x720.mp4#t=0,5.67"
                                              disableRemotePlayback
                                              poster="https://dpbavq092lwjh.cloudfront.net/creators/285923a8-25b1-4ad1-a5ea-40ad8cbcaf9d/squared_preview_image_thumbnail_Thumbnail-69.png"
                                              preload="metadata"
                                              style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                                transformOrigin: "0px 0px",
                                                opacity: 1,
                                              }}
                                            ></video>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress hover:bg-purple-600 hover:text-color-title active:text-color-title active:bg-purple-800 data-[loading=true]:text-color-title data-[loading=true]:bg-purple-950 disabled:text-color-disable p-0 h-8 w-8 absolute top-3 left-2 rounded-lg border-[2px] border-solid text-white border-white bg-brand"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M44.063 9.942c.329.33.493.495.569.68a1 1 0 0 1-.002.765c-.076.183-.242.348-.572.676L23.503 32.52c-1.268 1.262-2.326 2.315-3.278 3.038-1.005.763-2.066 1.299-3.35 1.299-1.284 0-2.345-.536-3.35-1.3-.952-.722-2.01-1.775-3.278-3.037l-6.305-6.275c-.33-.329-.495-.493-.572-.677a1 1 0 0 1-.002-.765c.076-.184.24-.349.569-.68.329-.33.493-.495.676-.571a1 1 0 0 1 .766-.002c.184.076.349.24.68.569l6.23 6.201c1.362 1.355 2.278 2.262 3.05 2.849.739.56 1.168.688 1.536.688.368 0 .797-.127 1.536-.688.773-.587 1.689-1.494 3.05-2.848l20.48-20.385c.33-.329.495-.493.68-.569a1 1 0 0 1 .765.002c.183.077.348.242.676.572Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </button>
                <div className="absolute flex flex-row items-center gap-2 bottom-3 left-3">
                  <div className="bg-[#707580] h-[24px] flex-center rounded-full">
                    <span className="pr-[8px] pl-[8px] text-xs">13s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
