"use client";
import React, { useState } from "react";
import Layout from "../Elements/Layout";

const Settings = () => {
  const [value, setValue] = useState("M Umar Farooq");
  return (
    <Layout>
      <div className="no-scrollbar relative h-full flex-col overflow-y-auto rounded-2xl bg-white/[0.05]">
        <main>
          <div className="page-in mx-auto mt-7 w-full max-w-screen-md flex-col items-center gap-8 pr-4 pb-4 pl-4 h-[calc(100vh_-_73px)] sm:pr-10 sm:pl-10">
            <div className="relative h-32 w-full">
              <div className="-bottom-8 absolute mb-4">
                <div className="flex items-center justify-center bg-[#5e2991] text-white h-16 w-16 rounded-full">
                  <p
                    data-slot="text"
                    className="text-white font-bold leading-4 font-sans"
                  >
                    M
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[40px] flex w-full flex-col gap-2 md:w-auto">
              <div className="flex-col flex items-center gap-[30px] md:flex-row md:gap-[70px]">
                <div className="h-[80px] w-full flex-col flex gap-4 md:w-[300px]">
                  <div className="flex-row flex items-center gap-3">
                    <div
                      className="flex-center"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path d="M2.5 3A1.5 1.5 0 001 4.5v.793l.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185.076-.032V4.5A1.5 1.5 0 0013.5 3z"></path>
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 01-1.956 0L1 6.954V11.5A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5z"></path>
                        </g>
                      </svg>
                    </div>
                    <p
                      data-slot="text"
                      className="text-white font-bold font-sans"
                    >
                      Name
                    </p>
                  </div>
                  <div className="relative w-full">
                    <div className="w-full">
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full px-4 py-2 bg-transparent   rounded-lg focus:outline-none  bg-area-platform  focus:ring-[0.6px] focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-gray-500"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-col flex items-center gap-[30px] md:flex-row md:gap-[70px]">
                  <div className="h-[80px] w-full flex flex-col gap-4 md:w-[300px]">
                    <div className="flex-row flex items-center gap-3">
                      <div
                        className="flex-center flex"
                        style={{ color: "rgb(255, 255, 255)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M18.685 19.097A9.72 9.72 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.72 9.72 0 003.065 7.097A9.72 9.72 0 0012 21.75a9.72 9.72 0 006.685-2.653m-12.54-1.285A7.49 7.49 0 0112 15a7.49 7.49 0 015.855 2.812A8.22 8.22 0 0112 20.25a8.22 8.22 0 01-5.855-2.438M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-slot="text"
                        className="text-white font-bold font-sans"
                      >
                        Email
                      </p>
                    </div>
                    <div className="relative w-full">
                      <div className="w-full max-w-md">
                        <input
                          type="email"
                         
                          className="w-full px-4  bg-area-platform  py-2 bg-[#2E2E2E]   border-[0.5px]  border-gray-500 rounded-lg focus:outline-none focus:ring-0  placeholder:text-gray-400"
                          placeholder="demo@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex-col flex gap-3 md:flex-row">
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-12 rounded-2xl px-5 w-full md:w-[200px]"
                >
                  <div>Save</div>
                </button>
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-12 rounded-2xl px-5 w-full md:w-[200px]"
                >
                  <div>Change Password</div>
                </button>
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container rounded-2xl px-5 h-[50px] w-full md:w-[200px]"
                >
                  <div>Delete Account</div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Settings;
