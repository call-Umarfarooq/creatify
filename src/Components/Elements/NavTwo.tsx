import React from 'react';
import { Icon } from '@iconify/react'; 
import { LogoSm } from '../utils/SvgIcons';

const NavTwo: React.FC = () => {
  return (
    <div className="fixed top-0  left-0 z-20 box-border w-full flex flex-row items-center justify-between pt-[12px] pb-[12px]">
      <a className="h-[48px] w-auto flex items-center pl-[30px] cursor-pointer" href="/">
        <div className="flex items-center">
        <LogoSm />
          <div className="mx-6 sm:block hidden h-6 w-px bg-line-1"></div>
          <h2 className="font-semibold hidden sm:block text-color-title text-lg">
            Create video via URL
          </h2>
        </div>
      </a>
      <div className="flex flex-row items-center md:gap-4 md:pr-10">
        {/* Discord Link */}
        <div
        
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/VjMAuueteM"
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-lg bg-white/[0.04]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5892 9.67497C25.863 8.89249 24.0173 8.32379 22.0877 8C21.8506 8.41511 21.5738 8.97343 21.3829 9.4176C19.3317 9.11872 17.2992 9.11872 15.2857 9.4176C15.0949 8.97343 14.8117 8.41511 14.5726 8C12.6409 8.32379 10.7931 8.89457 9.06688 9.67912C5.58516 14.7767 4.64132 19.7477 5.11324 24.648C7.4225 26.3188 9.66045 27.3337 11.8606 27.9979C12.4039 27.2736 12.8884 26.5036 13.3058 25.692C12.5108 25.3993 11.7495 25.0382 11.0301 24.6189C11.2209 24.482 11.4076 24.3387 11.588 24.1914C15.9758 26.1797 20.7432 26.1797 25.0786 24.1914C25.261 24.3387 25.4477 24.482 25.6365 24.6189C24.915 25.0402 24.1515 25.4014 23.3566 25.6941C23.774 26.5036 24.2564 27.2757 24.8017 28C27.004 27.3358 29.244 26.3209 31.5533 24.648C32.1071 18.9672 30.6074 14.0419 27.5892 9.67497ZM13.9035 21.6343C12.5864 21.6343 11.5062 20.4429 11.5062 18.9922C11.5062 17.5413 12.5633 16.3479 13.9035 16.3479C15.2438 16.3479 16.3239 17.5392 16.3009 18.9922C16.303 20.4429 15.2438 21.6343 13.9035 21.6343ZM22.7631 21.6343C21.4459 21.6343 20.3657 20.4429 20.3657 18.9922C20.3657 17.5413 21.4228 16.3479 22.7631 16.3479C24.1033 16.3479 25.1835 17.5392 25.1604 18.9922C25.1604 20.4429 24.1033 21.6343 22.7631 21.6343Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>
        </div>

        {/* Credits Section */}
        <div className='hidden sm:block'>
          <div className="flex h-[48px] cursor-pointer items-center justify-between rounded-xl border-2 border-[#5C54FF] border-solid bg-[#5C54FF]/[0.2] px-3 text-sm text-white hover:bg-[#5C54FF]/[0.1]">
            <div className="flex items-center pr-2 h-[46px] w-fit rounded-lg">
              <div className="flex items-center justify-center text-white">
                <Icon icon="outline:credits" width={24} height={24} />
              </div>
              <p className="font-normal text-white ml-1 truncate">0 credits</p>
            </div>
            <div className="mx-1 h-4 w-[1px] bg-white/20"></div>
            <div className="cursor-pointer rounded-lg p-2 font-bold hover:bg-[#5C54FF]/40">
              Upgrade
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="relative flex-none mr-4 ml-4 overflow-hidden rounded-3xl bg-white/[0.05]">
          <div>
            <div
              className="inline-flex cursor-pointer bg-transparent focus:border-none focus:outline-none w-full"
              aria-expanded="false"
            >
              <div>
                <div className="flex cursor-pointer items-center justify-center h-[48px] w-[48px]">
                  <div className="flex items-center justify-center bg-[#5e2991] text-white h-[48px] w-[48px] rounded-full">
                    <p className="text-white font-bold leading-4">M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
