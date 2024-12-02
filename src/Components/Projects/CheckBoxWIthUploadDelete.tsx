
'use client'
import React, { useState } from 'react'
import { DeleteIcon2, Uploadicon } from '../utils/SvgIcons'

const CheckBoxWIthUploadDelete = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="mt-6 no-scrollbar flex h-[44px] items-center justify-between">
    <div className="flex cursor-pointer items-center gap-3 font-medium text-base">
      <span className="group inline-flex focus:outline-none">
      <div
      className="relative isolate flex items-center justify-center rounded-[0.3125rem] 
        border border-white/85 border-solid
        w-5 h-5"
      onClick={() => setIsChecked(!isChecked)}
      style={{
        backgroundColor: isChecked ? "#524cd5" : "transparent", 
      }}
    >
      
    </div>
      </span>
      Total 2 videos
    </div>
    <div className="flex gap-4">
      <button
        data-tooltip-id="tooltip"
        data-tooltip-content="Only rendered videos can be exported"
        className="text-white bg-transparent border-[1px] border-solid shadow-md 
    
     relative isolate inline-flex items-center justify-center 
    gap-x-2 text-base/6 font-sans hover:opacity-80 
   
    [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] 
    [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 
    
    focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] 
    sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] 
    sm:text-sm/6 rounded border-white/20 font-bold cursor-not-allowed"
        type="button"
        disabled
      >
       <Uploadicon/>
        Upload
        <span
          className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
          aria-hidden="true"
        />
      </button>
      <button
        data-tooltip-id="tooltip"
        className="text-white bg-transparent border-[1px] border-solid shadow-md 
    [--btn-icon:theme(colors.white)] data-[active]:[--btn-icon:theme(colors.white)] 
    data-[hover]:[--btn-icon:theme(colors.white)] relative isolate inline-flex items-center 
    justify-center gap-x-2 text-base/6 font-sans hover:opacity-80 data-[disabled]:opacity-50 
    [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 
    focus:outline-none px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] 
    sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 
    rounded border-white/20 font-bold cursor-pointer"
        type="button"
      >
       < DeleteIcon2/>
        <span
          className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden"
         
        />
      </button>
    </div>
  </div>
  )
}

export default CheckBoxWIthUploadDelete