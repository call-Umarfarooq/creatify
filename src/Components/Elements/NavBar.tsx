import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = ({setToggal}:any) => {
const [toggalValue , setToggaleValue]= useState(false)
 
const HandleTogle =()=>{
  setToggaleValue((prevValue)=> !prevValue)
  setToggal(toggalValue)
}



  return (
    <div className=" flex m-4 box-border  flex-row items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
      {/* Menu Icon */}
      <div onClick={HandleTogle} className=" cursor-pointer">
        <div className="flex-center" style={{ color: "white" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M4 12h16M4 18h16M4 6h16"></path></svg>
        </div>
      </div>

      {/* Logo */}
      <Link href="/home" className="h-6 w-[164px] flex-center cursor-pointer">
        <img src="/assets/new_logo.webp" alt="creatify logo" width="164px" />
      </Link>

      {/* User Avatar */}
      <div className=" ">
        <div>
          <button
            className="inline-flex cursor-pointer bg-transparent focus:border-none focus:outline-none w-full"
            aria-expanded="false"
            id="headlessui-popover-button"
          >
            <div className="flex items-center justify-center bg-[#5e2991] text-white h-[30px] w-[30px] rounded-full">
              <p className="text-white font-bold leading-4 font-sans">M</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar