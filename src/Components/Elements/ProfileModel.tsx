import React, { useState } from "react";
import Modal from "react-modal";
import { CreaditIcn, DashboardIn, HIcon, LogoutIcon, SettinIn, SubIcn } from "../utils/SvgIcons";
import Link from "next/link";
import CreaditHistoryModel from "./CreaditHistoryModel";
import { Left } from "@icon-park/react";

const customStyles = {
  content: {
    left: "320px",
    top: "80px",
    bottom: "auto",
    backgroundColor: "#181818",
    border: "1px solid #181818",
    borderRadius: "12px",
    padding: "0px",
    width: "300px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

interface IModalProps {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent) => void;
}



const workspaceItems = [
  { icon: <HIcon />, label: "Demo User's  Workspace",href:"/projects"}
];

function ProfileModel({ isOpen, onClose }: IModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const menuItems = [
    { icon: <DashboardIn />, label: "Dashboard", href:"/" },
    { icon: <CreaditIcn />, label: "Credits history", href:"", onClick: handleOpenModal },
    { icon: <SettinIn />, label: "Workspace Settings" , href:""},
    { icon: <SubIcn />, label: "Subscription", href:"/subscription" },
  ];

  return (
    <Modal isOpen={isOpen} onRequestClose={() => onClose()} style={customStyles}>
      <div className="p-4 ">
        {/* Profile Header */}
        <div className="self-start mb-4 text-white/80 text-xs">Demo User</div>
        <Link href={"/account/settings"} className=" ">
          <div className="flex h-10 w-full items-center p-2 text-sm text-white hover:cursor-pointer hover:rounded-lg hover:bg-white/5">
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <div className="flex items-center justify-center bg-[#5e2991] text-white h-[24px] w-[24px] rounded-full">
                <p className="text-white font-bold leading-4 font-sans">D</p>
              </div>
            </div>
            <div className="flex-1 pl-2 text-left">Demo User</div>
          </div>
        </Link>

        {/* Menu Items */}
        <div className="space-y-4 mt-4">
          {menuItems.map((item, index) => (
            <Link href={`${item.href}`}
              key={index}
              onClick={item.onClick}
              className="flex h-10 w-full items-center p-2 text-sm text-white hover:cursor-pointer hover:rounded-lg hover:bg-white/5"
            >
              <div className="flex h-[24px] w-[24px] items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1 pl-2 text-left">{item.label}</div>
            </Link>
          ))}
        </div>
     <CreaditHistoryModel isOpen={isModalOpen} onClose={handleCloseModal}>
      <div>sdasdasd</div>
     </CreaditHistoryModel>
        <div className="h-[1px] my-3 w-full bg-white/5"></div>

        {/* Workspace Items */}
        <div className="mt-3 w-full flex-col gap-3">
          <div className="self-start text-white/80 text-xs">Workspace</div>
          <div className="flex w-full my-3 flex-wrap flex-col gap-[10px]">
            {workspaceItems.map((item, index) => (
              <div key={index} className="relative cursor-pointer hover:opacity-70">
                <Link  href={item.href} className="flex h-10 w-full items-center p-2 text-sm text-white hover:cursor-pointer hover:rounded-lg hover:bg-white/5 rounded-lg bg-white/5">
                  <div className="flex h-[24px] w-[24px] items-center justify-center">
                    <div className="flex items-center justify-center bg-[#5e2991] text-white h-[24px] w-[24px] rounded-full">
                      <p className="text-white font-bold leading-4 font-sans">M</p>
                    </div>
                  </div>
                  <div className="flex-1 pl-2 text-left">{item.label}</div>
                  <div className="justify-center flex h-[24px] w-[24px] items-center">
                    {item.icon}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="h-[1px] w-full bg-white/5"></div>
        </div>

        {/* Logout Button */}
        <div className="flex h-10 mt-5 w-full items-center p-2 text-sm text-white hover:cursor-pointer hover:rounded-lg hover:bg-white/5">
          <div className="flex h-[24px] w-[24px] items-center justify-center">
            <LogoutIcon />
          </div>
          <div className="flex-1 pl-2 text-left">Logout</div>
        </div>
      </div>
    </Modal>
  );
}

export default ProfileModel;
