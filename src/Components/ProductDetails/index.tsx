"use client";
import React, { useRef, useState } from "react";
import Layout from "../Elements/Layout";
import NavBar from "../Elements/NavBar";

const ProductDetails = () => {
  const [text, setText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxLength = 3000;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const [selectedImages, setSelectedImages] = useState<string[]>([]); 
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      ); 
      setSelectedImages((prevImages) => [...prevImages, ...newImages]); 
    }
  };
  return (
    <Layout>
    
      <div className="no-scrollbar h-full flex-col overflow-y-auto rounded-2xl bg-white/[0.05]">
        <div className="page-in h-full text-white p-10">
          <div className="h-full flex-col rounded-2xl 2xl:bg-transparent">
            <div className="">
              <div className="max-w-4xl mx-auto">
                <button
                  className="rounded-full border-0 bg-transparent border-transparent border-none [--btn-icon:theme(colors.white)] data-[active]:[--btn-icon:theme(colors.white)] data-[hover]:[--btn-icon:theme(colors.white)] relative isolate inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 -ml-3 text-white hover:opacity-100 cursor-pointer"
                  type="button"
                >
                  <div className="h-[24px] w-[24px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p
                    data-slot="text"
                    className="font-medium text-base text-white font-sans"
                  >
                    Products
                  </p>
                  <span
                    className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
                    aria-hidden="true"
                  ></span>
                </button>

                <div className="pb flex flex-col items-center justify-between gap-2 border-[#fff]/[.10] border-b border-solid pb-6 md:flex-row">
                  <p
                    data-slot="text"
                    className="text-white w-full overflow-hidden break-all font-bold text-[32px]/[40px] font-sans"
                  >
                    product
                  </p>
                  <div className="flex w-full shrink-[2] items-center justify-end gap-x-4 md:w-auto">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-solid border-[#82DBF7]">
                      <div
                        className="flex-center"
                        style={{ color: "rgb(130, 219, 247)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path d="M6 16.5c-1.667 0-4-.75-4-3.75C2 9.25 5.5 8.5 6.5 8.5 7 6.75 8 4 12 4c3.5 0 5 2 5.5 3.75 0 0 4.5.5 4.5 4.75 0 3-2 4-4 4"></path>
                            <path d="m9 16.5 3 2.5 4-5"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <button
                      className="border-0 shadow-md [--btn-icon:theme(colors.black)] data-[active]:[--btn-icon:theme(colors.black)] data-[hover]:[--btn-icon:theme(colors.black)] relative isolate inline-flex items-center justify-center gap-x-2 font-sans hover:opacity-80 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 h-11 w-[147px] rounded-lg bg-[#5D54FF] font-medium text-base text-white cursor-pointer"
                      type="button"
                    >
                      Create video
                      <span
                        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <div>
                    <p
                      data-slot="text"
                      className="font-light text-sm/[18px] text-white font-sans"
                    >
                      Product name
                    </p>
                    <div
                      data-slot="control"
                      className="relative block w-full mt-2"
                    >
                      <input
                        className="text-base text-white placeholder:text-white[0.3] bg-white/[0.1] focus:bg-white/[0.1] focus:outline-none border-0 data-[hover]:border-zinc-950/20 data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[disabled]:border-zinc-950/20 mt-2 relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] font-sans sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]"
                        id="headlessui-input-:r7q:"
                        value="product"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mt-5">
                  <p
                    data-slot="text"
                    className="font-light text-sm/[18px] text-white font-sans"
                  >
                    Description
                  </p>
                  <p
                    data-slot="text"
                    className="font-normal text-white relative block w-full has-[[data-disabled]]:opacity-50 font-sans"
                  >
                    <textarea
                      className="text-white placeholder:text-zinc-500 sm:text-sm/6 font-sans border border-zinc-950/10 data-[hover]:border-zinc-950/20 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 disabled:border-zinc-950/20 mt-2 border-none bg-white/5 px-3 py-1.5 text-base relative block h-full w-full resize-none appearance-none rounded-2xl transition duration-200 ease-out focus:shadow-focus-form"
                      rows={4}
                      id="headlessui-textarea-:r7r:"
                      value={text}
                      onChange={handleChange}
                    />
                  </p>
                  <div className="relative right-0 bottom-0 mr-4 px-3 text-right font-normal text-sm">
                    <span>{text.length}</span>
                    <span className="text-[#FFFFFF4D]/[.30]">/{maxLength}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p
                    data-slot="text"
                    className="text-white font-bold text-base font-sans"
                  >
                    Media files
                  </p>
                </div>

                <div className="mt-4">
                  <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
                    <div className="aspect-square rounded-lg border border-white/[.30] border-solid">
                      <div
                        className="relative h-full w-full cursor-pointer"
                        onClick={handleClick}
                      >
                        <input
                          ref={fileInputRef}
                          accept=".jpeg, .png, .jpg, .svg, .webp, .mp4, .mov, .webm, .mp3, .wav, .gif"
                          multiple
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                          <img
                            src="/assets/add.svg"
                            alt="Upload icon"
                            className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]"
                          />
                        </div>
                      </div>
                    </div>
                    {selectedImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square h-full w-full rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`Uploaded ${index + 1}`}
                          className="aspect-square h-full w-full rounded-lg border-2 object-cover hover:border-[#5C54FF] border-[#FFFFFF]/[.0]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
