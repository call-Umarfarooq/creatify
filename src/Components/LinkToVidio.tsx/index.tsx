import React from 'react'
import NavTwo from '../Elements/NavTwo'

import { AlfaIcon, AmazonIcon, DotedLine, Eby, EbyIcon, PlayStore, ShopifIcon1, SosialIcon, WordPress } from '../utils/SvgIcons';
import Link from 'next/link';

const LinkToVidio = () => {
  const icons = [
    { component: <AmazonIcon />,  },
    { component: <ShopifIcon1 />, },
    { component: <Eby />,  },
    { component: <EbyIcon />, },
    { component: <AlfaIcon />, },
    { component: <PlayStore /> },
    { component: <WordPress /> },
    { component: <SosialIcon />, },
  ];
  return (
    <div className='bg2 gradient-bg1'>
    <div className='relative linearG h-screen w-screen flex-col overflow-x-hidden '>
        <NavTwo/>
        <div className=" h-full ">
      <div className="flex h-full justify-center">
        <div className=" h-full flex flex-col justify-center gap-8  ">
          <div className="text-color-title mt-12 md:text-[28px] lg:text-[32px] font-[700] ">
            Share your <span className="text-brand">product link</span> to generate a video
          </div>

          <div className="w-full flex flex-col flex-wrap items-center justify-center gap-1">
            <div className="text-body-md text-color-body">Creatify supports:</div>
            <div className="flex flex-row gap-2">
            {icons.map((icon, index) => (
          <div
            key={index}
            className={`flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white`}
          >
            {icon.component}
          </div>
        ))}
            <span className='text-white'>  <DotedLine/></span>
            </div>
          </div>

          <div>
            <div className="relative h-14">
              <div className="relative block h-14 w-full truncate rounded-2xl bg-white/[0.1]">
                <input
                  autoComplete="off"
                  className="text-base text-white placeholder:text-white/[0.3] focus:outline-none border-0 h-14 truncate relative block appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] font-sans bg-transparent focus:bg-transparent w-5/6"
                  placeholder="e.g. amazon product link, shopify product link, app store link, etc."
                  id="product-link-input"
                />
              </div>
              <div className="absolute top-0 right-3 bottom-0 my-auto h-8">
                <button
                  data-loading="false"
                  className="inline-flex items-center justify-center gap-2.5 text-label-md text-brand bg-ux-purple-hover1 active:bg-ux-purple-press h-8 rounded-lg px-2 opacity-80 hover:opacity-100"
                >
                  <div>Try some links?</div>
                </button>
              </div>
            </div>
            <p className="font-normal text-red-500 text-sm"> </p>
          </div>

          <div className="flex flex-col-reverse items-center justify-center gap-4 lg:flex-row">
            <button
              data-loading="false"
              className="inline-flex bg-ux-hover1 items-center justify-center gap-2.5 text-label-md text-color-title bg-area-container  active:bg-ux-press h-10 rounded-xl px-3 w-[152px]"
            >
              <Link href={'/link-to-video/edit-product'}>Upload manually</Link>
            </button>
            <button
              data-loading="false"
              className="inline-flex items-center justify-center gap-2.5 text-label-md text-color-title bg-brand bg-ux-brand-hover1 active:bg-ux-brand-press h-10 rounded-xl px-3 w-[152px]"
            >
              <div>Analyze URL</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LinkToVidio