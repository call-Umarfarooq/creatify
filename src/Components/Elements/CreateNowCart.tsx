import Image from "next/image";
import React from "react";
import { Cap } from "../utils/SvgIcons";
import Link from "next/link";

const CreateNowCart = ({title,text,url}:any) => {
  return (
    <div className="relative flex mt-5 w-full cursor-pointer">
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
  );
};

export default CreateNowCart;
