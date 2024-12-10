import React from 'react';
import NavTwo from '../Elements/NavTwo';
import { ImageIcon18, ImageIcon19 } from '../utils/SvgIcons';

const DesignYourAvatar: React.FC = () => {
    return (
        <div className="bg2 gradient-bg1">
        <div className="relative  linearG h-screen w-screen flex-col overflow-x-hidden sm:pt-[98px] lg:pt-[72px]">
          <NavTwo />
          <div className="relative  top-0 left-0 h-full overflow-y-auto">
            <div className="flex  mx-auto flex-col text-white h-full max-w-[720px]  ">

            <div className="mx-auto w-full max-w-[724px] p-8">
      <div className="w-full flex-col gap-3">
        <div>
          <button
            data-loading="false"
            className="inline-flex items-center mb-3 justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress bg-transparent text-color-support hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent disabled:text-color-disable h-8 rounded-lg px-2"
            color="white"
          >
            <ImageIcon18/>
            <div>Back</div>
          </button>
        </div>
        <div className="w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div className="font-bold mb-11 text-4xl">Describe your avatar</div>
          <div className="relative w-fit">
            <button
              data-loading="false"
              className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-area-container hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-area-container disabled:bg-area-container h-12 rounded-2xl px-5"
            >
              <div>Start from a Demo Avatar</div>
            </button>
            <div className="-top-6 absolute right-1 cursor-pointer">
              <div className="relative" style={{ width: 136, height: 32 }}>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="size-full flex-center overflow-hidden rounded-full border-[2px] border-neutral-600 border-solid bg-neutral-800 absolute top-0"
                    style={{ width: 32, height: 32, left: `${index * 26}px` }}
                  >
                    <img
                      className="size-full object-cover absolute top-0"
                      src={`/assets/demo_sm_1.png`}
                      alt="avatar"
                    />
                  </div>
                ))}
                <div
                  className="size-full flex-center overflow-hidden rounded-full border-[2px] border-neutral-600 border-solid bg-neutral-800 absolute top-0"
                  style={{ width: 32, height: 32, left: 104 }}
                >
                  <div className="size-full flex justify-center items-center font-medium text-xs">
                    16+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm mt-3 text-white/50">
          Shape your avatar by filling the details below
        </div>
      </div>
      <div className="flex-col gap-8 py-8">

      <div className="w-full flex-col gap-3">
      <div className="font-semibold mb-2 text-color-body/70 text-sm">Age*</div>
      <div data-headlessui-state="">
        <div
          className="inline-flex cursor-pointer bg-transparent focus:border-none focus:outline-none w-full"
          id="headlessui-popover-button-age"
        >
          {/* Dropdown Button */}
          <div className="w-full relative flex-row gap-1 rounded-2xl bg-area-container px-4 py-3">
            <div className="flex text-sm">Young Adult</div>
            <div className='absolute right-4 top-4'>
            <ImageIcon19/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full flex-col gap-3">
      <div className="font-semibold mb-2 text-color-body/70 text-sm">Gender*</div>
      <div data-headlessui-state="">
        <div
          className="inline-flex cursor-pointer bg-transparent focus:border-none focus:outline-none w-full"
          id="headlessui-popover-button-age"
        >
          {/* Dropdown Button */}
          <div className="w-full relative flex-row gap-1 rounded-2xl bg-area-container px-4 py-3">
            <div className="flex text-sm">Male</div>
            <div className='absolute right-4 top-4'>
            <ImageIcon19/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex-col gap-3 pt-2">
      {/* Header Section */}
      <div className="flex-row flex justify-between">
        <div className="font-semibold text-color-body/70 text-sm">More details</div>
        <button
          data-loading="false"
          className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress bg-transparent text-color-support hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent disabled:text-color-disable h-12 rounded-2xl px-3"
        >
          <div>Try a sample</div>
        </button>
      </div>
      
      {/* Textarea Section */}
      <p
        data-slot="text"
        className="font-normal text-white relative block w-full has-[[data-disabled]]:opacity-50 font-sans"
      >
        <textarea
          className="text-base/6 placeholder:text-zinc-500 sm:text-sm/6 font-sans border border-zinc-950/10 data-[hover]:border-zinc-950/20 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 disabled:border-zinc-950/20 bg-area-container p-4 text-white relative block h-full w-full resize-none appearance-none rounded-2xl transition duration-200 ease-out focus:shadow-focus-form"
          placeholder="Add details about the avatar's physical appearance like facial features, hair color, and body shape."
          rows={2}
          id="headlessui-textarea-:rc:"
          data-headlessui-state=""
        ></textarea>
      </p>
    </div>
        {['Appearance', 'Outfit', 'Background'].map((section, index) => (
          <div key={index} className="flex-col gap-3">
            <div className="flex-row flex justify-between">
              <div className="font-semibold text-base">{section}</div>
              <button
                data-loading="false"
                className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress bg-transparent text-color-support hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent disabled:text-color-disable h-12 rounded-2xl px-3"
              >
                <div>Try a sample</div>
              </button>
            </div>
            <p
              data-slot="text"
              className="font-normal text-white relative block w-full has-[[data-disabled]]:opacity-50 font-sans"
            >
              <textarea
                className="text-base/6 placeholder:text-zinc-500 sm:text-sm/6 font-sans border border-zinc-950/10 data-[hover]:border-zinc-950/20 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 disabled:border-zinc-950/20 bg-area-container p-4 text-white relative block h-full w-full resize-none appearance-none rounded-2xl transition duration-200 ease-out focus:shadow-focus-form"
                placeholder={`Describe the avatar's ${section.toLowerCase()}...`}
                rows={section === 'Appearance' ? 2 : 3}
              />
            </p>
          </div>
        ))}
        <div className="flex justify-center items-center mt-5">
          <button
            data-loading="false"
            className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-12 rounded-2xl px-5"
            disabled
          >
            <div>Generate preview</div>
          </button>
        </div>
      </div>
    </div>

                </div>
                </div>
                </div>
                </div>
    );
};

export default DesignYourAvatar;