"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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
} from "../utils/SvgIcons";
import ProfileModel from "./ProfileModel";
import SubscriptionModel from "./SubscriptionModel";
import NavBar from "./NavBar";

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

const Layout = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [toggal, setToggal] = useState(false);

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (id: number) => {
    setActiveIndex(id);
  };
  useEffect(() => {
    if (toggal) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [toggal]);
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed  hidden sm:block rounded-lg top-0 sm:m-6 left-0 side-color z-40 w-[300px]  sm:w-[100px] lg:w-[310px] h-[93vh]  transition-transform sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <a
          className="mt-[10px] h-16 flex items-center justify-center rounded-xl p-5 cursor-pointer"
          href="/"
        >
          <img
            className="hidden lg:block"
            src="/assets/new_logo.webp"
            alt="creatify logo"
            width="250px"
          />

          <div className="lg:hidden">
            <LogoSm />
          </div>
        </a>

        {/* User Profile */}
        <div className="relative px-4 flex-none mr-4 ml-4 overflow-hidden rounded-xl bg-white/[0.05] py-3">
          <div className="w-full flex cursor-pointer flex-row items-center justify-between pt-2 pb-2">
            <div>
              <div className="flex-row flex items-center">
                <div className="flex items-center justify-center bg-[#5e2991] text-white w-[33px] h-[33px] rounded-full">
                  <p className="text-white font-bold leading-4 font-sans">M</p>
                </div>
                <div className="ml-3 flex-grow flex-col gap-1 hidden lg:block md:pr-4">
                  <p className="text-white font-bold text-sm leading-4 font-sans">
                    Demo User
                  </p>
                  <p className="text-white max-w-[140px] truncate font-normal text-xs opacity-50 font-sans">
                    demouser@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={handleOpenModal}
              className=" h-full hidden lg:flex items-center justify-center"
            >
              <ThreeDotsIcon />
            </div>
            <ProfileModel isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-2 flex-none mx-4 my-2 overflow-hidden rounded-xl bg-white/[0.05] py-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`h-full w-full py-4 flex-row-items-center flex px-4 ${
                activeIndex === item.id
                  ? "bg-white/[0.05] rounded-lg h-[48px] flex-row items-center"
                  : ""
              }`}
              onClick={() => handleClick(item.id)}
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
                <div className="lg:flex hidden items-center pr-4">
                  <div className="flex-center rounded-full bg-area-container px-2 py-0.5 text-white/90 text-xs bg-gradient-to-br from-[#4868d5] to-[#bd4cc2] italic font-extrabold">
                    NEW
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href={""}
          className="h-[56px] flex hover:opacity-70 bg-white/[0.05] flex-row mx-4 items-center overflow-hidden rounded-lg pl-6 no-underline"
        >
          <LearningC />
          <p
            data-slot="text"
            className="font-normal ml-2 hidden lg:block text-white font-sans"
          >
            Learning Center
          </p>
        </Link>
        <div className="mx-4 absolute flex gap-6 mt-4">
          <div
            onClick={handleOpenModal1}
            className="flex h-[48px] cursor-pointer items-center justify-between rounded-lg border-2 border-[#5C54FF] border-solid bg-[#5C54FF]/[0.2] px-3 text-sm text-white hover:bg-[#5C54FF]/[0.1]"
          >
            <div className="flex items-center pr-2 h-[46px] w-fit rounded-lg">
              <div
                className="flex-center "
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <IconifyIcon />
              </div>
              <p
                data-slot="text"
                className="font-normal hidden lg:block text-white ml-1 truncate text-nowrap font-sans"
              >
                10 credits
              </p>
            </div>
            <div className="mx-1 hidden lg:block h-4 w-[1px] bg-white/20"></div>
            <div className="cursor-pointer hidden lg:block rounded-lg p-2 font-bold hover:bg-[#5C54FF]/40">
              Upgrade
            </div>
          </div>
          <SubscriptionModel isOpen={isModalOpen1} onClose={handleCloseModal1}>
            <div></div>
          </SubscriptionModel>
          <Link
            target="_blank"
            href="https://discord.gg/VjMAuueteM"
            rel="noopener noreferrer"
          >
            <div className="lg:flex h-[46px] hidden  w-[46px] items-center justify-center overflow-hidden rounded-lg bg-white/[0.04]">
              <DiscourtIcon />
            </div>
          </Link>
        </div>
      </aside>

      {toggal && (
        <div className="fixed sm:hidden z-50 inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 flex max-w-full left-0">
              <div
                className="pointer-events-auto max-w-md bg-[#111315]  pr-2 transform transition duration-100 ease-in-out"
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
                    <div className="px-2 flex-none mx-4 mt-6 mb-2 overflow-hidden rounded-xl bg-white/[0.05] py-3">
                      {menuItems.map((item) => (
                        <div
                          onClick={() => handleClick(item.id)}
                          key={item.id}
                          className={`h-full w-full py-4 flex-row-items-center flex px-4 ${
                            activeIndex === item.id
                              ? "bg-white/[0.05] rounded-lg h-[48px] flex-row items-center"
                              : ""
                          }`}
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
      )}

      <div className="lg:ml-[360px] ml-[150px] hidden sm:block">
        <div className="mr-6 rounded-lg my-6 side-color">
          <div>{children}</div>
        </div>
      </div>

      <div className="w-[100%] sm:hidden mx-auto ">
        <div
          className=" fixed w-full top-0  z-50
        "
        >
          {" "}
          <NavBar setToggal={setToggal} />
        </div>
        <div className={`relative z-0 ${toggal ? "blur-sm pointer-events-none" : ""}`}>
          <div className={`rounded-lg mx-4 mt-24 side-color ${toggal ? "overflow-hidden" : ""}`}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
