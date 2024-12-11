import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import { Crossicon } from "../utils/SvgIcons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "transparent",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s",
    overflow: "visible",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  overlay: { zIndex: 1000 },
};

interface IModalProps {
  isOpen: boolean;
  children: any;
  onClose: (e?: React.MouseEvent) => void;
}

function CreaditHistoryModel({
  isOpen,
  children,
  onClose,
}: IModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
    >
      <div
        id="popular-tools-modal"
        className="row-start-2 w-full min-w-0   bg-[#181818] pt-10 pr-7 pb-5 pl-7 ring-1 ring-zinc-950/10 sm:mb-auto sm:rounded-[19px] shadow-unsubscription-modal sm:max-w-4xl"
      >
        

      </div>
    </Modal>
  );
}

export default CreaditHistoryModel;
