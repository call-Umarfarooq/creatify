import Image from "next/image";
import React from "react";
import { Cap } from "../utils/SvgIcons";
import Link from "next/link";

const CreateNowCart = ({title,text,url}:any) => {
  return (
    <>
    <div className="relative hidden  sm:flex mt-5 w-full cursor-pointer">
      <Image
        src="/assets/featured-product-background.png"
        alt=""
        layout="fill"
        className="absolute h-full w-full rounded-xl object-cover 2xl:bg-[#3c354a]"
      />
      <div className="relative z-10 flex w-full items-center overflow-hidden rounded-xl bg-bottom bg-contain bg-white/5 shadow-2xl backdrop-blur-sm md:flex-row xl:bg-cover xl:bg-right-top h-[255px]">
        <div className="h-full w-full flex-col justify-center align-center sm:p-[40px] xl:h-auto p-6">
          <div className="flex w-full flex-col items-center justify-center text-white md:items-start">
            <p className="text-white font-bold tracking-[2%] mb-3 w-full text-left text-xl md:mt-0 md:text-2xl 2xl:text-2xl font-sans">
          {title}
            </p>
            <p className="font-normal text-white text-[16px] leading-[20px] -mt-1 -tracking-[.0em] w-full max-w-[197px] text-left xl:text-sm 2xl:text-base font-sans">
              {text}
            </p>
            <div className="flex w-full justify-start md:mt-10 md:mb-0 mt-5 mb-8 gap-4">
            
              <Link href={'/link-to-video'}
                color="primary"
                className="text-white bg-[#5c54ff]  shadow-md  relative  inline-flex items-center justify-center  text-base/6 font-semibold font-sans  sm:text-sm/6 rounded-lg px-6 py-4 h-[44px] w-[137px] cursor-pointer"
                type="button"
              >
                <p className="text-white font-medium text-[16px] leading-[20px] font-sans">
                  Create now
                </p>
                <span
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
                  aria-hidden="true"
                />
              </Link>
             
              <div className="flex cursor-pointer items-center justify-center rounded-lg bg-[#000]/[.40] h-[44px] w-[44px]">
               <Cap/>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <div className="absolute z-10 right-0 w-full h-full max-w-[200px] rounded-xl ">
        <Image
          alt=""
          src={`${url}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl "
          objectPosition="left"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>

    <div
    className="relative sm:hidden flex w-full items-center overflow-hidden rounded-xl bg-bottom bg-contain bg-white/5 shadow-2xl backdrop-blur-sm md:flex-row xl:bg-cover xl:bg-right-top h-[361px]"
    style={{ backgroundImage: 'url("/assets/featured-product-background.png")', backgroundSize: 'cover' }}
  >
    <div className="h-full w-full flex-col p-6 align-center sm:p-[40px] xl:h-auto text-center">
      <div className="flex w-full flex-col items-center justify-center text-white md:items-start">
        <p
          data-slot="text"
          className="text-white font-bold tracking-[2%] mb-3 w-full text-xl md:mt-0 md:text-2xl 2xl:text-2xl mt-1 text-center font-sans"
        >
          AI Video Ads
        </p>
        <p
          data-slot="text"
          className="font-normal -mt-1 -tracking-[.0em] w-full xl:text-sm 2xl:text-base text-center text-[#fff]/[.50] text-sm font-sans"
        >
          Make engaging video ads with a few clicks
        </p>
        <div className="mt-5 mb-8 flex w-full gap-4 md:mt-10 md:mb-0 justify-center">
          <button
            className="text-white bg-[#5c54ff] border-0 border-none shadow-md relative isolate inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold font-sans hover:opacity-80 focus:outline-none sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 h-[44px] w-[137px] rounded-lg px-6 py-4 cursor-pointer"
            type="button"
          >
            <p
              data-slot="text"
              className="text-white font-medium text-[16px] leading-[20px] font-sans"
            >
              Create now
            </p>
            <span
              className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] hidden pointer-events-none"
              aria-hidden="true"
            ></span>
          </button>
          <div className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-lg bg-[#000]/[.40]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.7L11.5111 4.5L22.0222 8.7L11.5111 12.9L1 8.7Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
              <path
                d="M22.0222 8.75488V13.3665"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.77783 10.9131V17.1338C5.77783 17.1338 8.18288 19.5004 11.5112 19.5004C14.8395 19.5004 17.2445 17.1338 17.2445 17.1338V10.9131"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default CreateNowCart;
