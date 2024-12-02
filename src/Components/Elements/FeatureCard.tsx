import Image from "next/image";
import React from "react";
import { Arrow, Feature } from "../utils/SvgIcons";

interface FeatureCardProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  imageSrc,
  imageAlt,
  label,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl cursor-pointer"
      id={id}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-2xl bg-black/25 shadow-2xl backdrop-blur-md">
        <div className="relative w-full h-[228px] aspect-square">
          <Image
            alt={imageAlt}
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute right-4 bottom-2 flex h-[32px] w-24 items-center justify-center gap-x-2 rounded-lg bg-[#000]/[.50] backdrop-blur-xl">
          <Feature />
          <p className="font-normal text-white text-sm font-sans">{label}</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between bg-white/[0.05] p-4 pr-2 hover:bg-[#FFFFFF33]">
        <div className="flex flex-wrap">
          <p className="text-white font-medium text-[16px] leading-[20px] mb-1 truncate font-sans">
            {title}
          </p>
          <p className="font-normal text-[12px] leading-[16px] line-clamp-2 h-[32px] w-full text-white/60 font-sans">
            {description}
          </p>
        </div>
        <div className="flex h-[36px] w-[36px] items-center justify-center">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
