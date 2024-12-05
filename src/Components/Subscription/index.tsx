import React from 'react'
import Layout from '../Elements/Layout'

const Subscription = () => {
  return (
    <Layout>
       <div className="no-scrollbar relative h-full flex-col overflow-y-auto rounded-2xl bg-white/[0.05]">
      <div className="mt-[30px] flex w-full justify-center text-white lg:mt-[90px]">
        <div className="w-full max-w-4xl px-4">
          <div className="mb-[45px] font-bold text-[32px]">Subscription</div>
          <div className="mb-6 space-y-6">
            <div className="flex items-center">
              <span className="mr-6 text-lg">Current plan</span>
              <div className="flex flex-wrap items-end text-base leading-[28px]">
                Free
                <span className="ml-2 block rounded bg-white/[0.1] px-2 py-[2px] text-[12px] md:text-base">
                  10 credits / mo
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-white/[0.05]"></div>
            <div className="flex items-center">
              <span className="mr-6 text-lg">Remaining credits</span>
              <div className="text-base">0</div>
            </div>
            <div className="h-[1px] bg-white/[0.05]"></div>
            <div className="flex items-center">
              <div className="mr-6 flex gap-x-2">
                <span className="text-lg">Renews on</span>
              </div>
              <div className="mt-2 text-base md:text-2xl">December 29, 2024</div>
            </div>
          </div>
          <div className="options mb-[45px] pt-1">
            <button
              className="border-0 border-transparent [--btn-icon:theme(colors.black)] data-[active]:[--btn-icon:theme(colors.black)] data-[hover]:[--btn-icon:theme(colors.black)] relative isolate gap-x-2 text-base/6 font-sans hover:opacity-80 data-[disabled]:opacity-50 [&> [data-slot=icon]]:-mx-0.5 [&> [data-slot=icon]]:my-0.5 [&> [data-slot=icon]]:size-5 [&> [data-slot=icon]]:shrink-0 [&> [data-slot=icon]]:text-[--btn-icon] [&> [data-slot=icon]]:sm:my-1 [&> [data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] focus:outline-none mt-4 flex w-full items-center justify-between rounded-2xl bg-white/10 px-8 py-6 font-normal text-white cursor-pointer"
              type="button"
            >
              <div className="text-left">
                <div className="text-xl">Upgrade plan</div>
                <p className="mt-1 text-[12px]">
                  Enjoy unlimited access to all AI tools & priority video processing
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 14 22"><path fill="none" stroke="currentColor" d="M.75.5 13 11 .75 21.5"></path></svg>              <span
                className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Subscription