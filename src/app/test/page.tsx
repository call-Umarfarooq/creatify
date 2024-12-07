import React from "react";
import { useState } from "react";
import {
  ThreeDotsIcon,
  CoustomAV,
  CreateIcon,
  ProductIcon,
  ProjectsIcon,
  LearningC,
  IconifyIcon,
  DiscourtIcon,
  LogoSm,
} from "../../Components/utils/SvgIcons";
import Link from "next/link";
const Sidebar: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      href: "/",
      icon: <CreateIcon />,
      label: "Create",
    },
    {
      id: 2,
      href: "/projects",
      icon: <ProjectsIcon />,
      label: "Projects",
    },
    {
      id: 3,
      href: "/products",
      icon: <ProductIcon />,
      label: "Products",
    },
    {
      id: 4,
      href: "/custom-avatars",
      icon: <CoustomAV />,
      label: "Custom Avatars",
      isNew: true,
    },
  ];
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 flex max-w-full left-0">
          <div
            className="pointer-events-auto max-w-md bg-[#111315]  transform transition duration-100 ease-in-out"
            id="headlessui-dialog-panel"
            data-headlessui-state="open"
            style={{ transform: "translateX(0)" }}
          >
            <div className="flex h-full flex-col overflow-y-scroll bg-white/[0.05] shadow-xl">
              <div className="w-[310px]  max-w-[310px] flex-grow flex-col justify-between gap-4  backdrop-blur-sm transition-all duration-300 ease-in-out">
                <a
                  className="mt-[10px] h-16 flex items-center justify-center rounded-xl p-5 cursor-pointer"
                  href="/"
                >
                  <img
                    className=""
                    src="/assets/new_logo.webp"
                    alt="creatify logo"
                    width="250px"
                  />
                </a>
                <div className="px-2 flex-none mx-4 my-2 overflow-hidden rounded-xl bg-white/[0.05] py-3">
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      className={`h-full w-full py-4 flex-row-items-center flex px-4 ${"bg-white/[0.05] rounded-lg h-[48px] flex-row items-center"}`}
                    >
                      <Link
                        href={item.href}
                        className="h-full hover:opacity-70 w-full flex-row items-center flex"
                      >
                        {item.icon}
                        <p className="font-normal  sm:hidden lg:block ml-2 truncate text-nowrap text-white font-sans">
                          {item.label}
                        </p>
                      </Link>
                      {item.isNew && (
                        <div className="flex items-center pr-4">
                          <div className="flex-center rounded-full bg-area-container px-2 py-0.5 text-white/90 text-xs bg-gradient-to-br from-[#4868d5] to-[#bd4cc2] italic font-extrabold">
                            NEW
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mx-4 h-[29%] flex gap-6 justify-end items-end mt-4">
                  <div className="flex h-[48px] cursor-pointer items-center justify-between rounded-lg border-2 border-[#5C54FF] border-solid bg-[#5C54FF]/[0.2] px-3 text-sm text-white hover:bg-[#5C54FF]/[0.1]">
                    <div className="flex items-center pr-2 h-[46px] w-fit rounded-lg">
                      <div
                        className="flex-center "
                        style={{ color: "rgb(255, 255, 255)" }}
                      >
                        <IconifyIcon />
                      </div>
                      <p
                        data-slot="text"
                        className="font-normal  text-white ml-1 truncate text-nowrap font-sans"
                      >
                        10 credits
                      </p>
                    </div>
                    <div className="mx-1  h-4 w-[1px] bg-white/20"></div>
                    <div className="cursor-pointer  rounded-lg p-2 font-bold hover:bg-[#5C54FF]/40">
                      Upgrade
                    </div>
                  </div>

                  <Link
                    target="_blank"
                    href="https://discord.gg/VjMAuueteM"
                    rel="noopener noreferrer"
                  >
                    <div className="flex h-[46px]  w-[46px] items-center justify-center overflow-hidden rounded-lg bg-white/[0.04]">
                      <DiscourtIcon />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Bottom Buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
