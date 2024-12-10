import React from "react";
import { ImageIcon16, ImageIcon17 } from "../utils/SvgIcons";

const Login = () => {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      {/* Left Side - Video Section */}
      <div className="relative flex bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <div className="flex w-full items-center justify-center">
          <video
            className="aspect-video w-[80%] rounded-2xl shadow-lg"
            src="https://dpbavq092lwjh.cloudfront.net/creatify-made-videos/fa_2.mp4"
            loop
            autoPlay
            playsInline
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-black text-white px-12">
        <h1 className="text-3xl font-bold mb-6">Ready to use Creatify?</h1>

        <form className="w-full max-w-sm space-y-4">
          <div className="relative w-full">
            <div
              className="group border-transparent w-full truncate flex gap-2 items-center justify-between bg-area-platform border border-solid hover:border-brand focus-within:border-brand focus-within:bg-area-platform disabled:border-line-1 h-12 rounded-2xl pl-3 pr-2"
              data-focus="false"
            >
              <span className="text-color-support">
              <ImageIcon16/>
              </span>
              <input
                className="h-full w-full select-none truncate bg-transparent placeholder:text-color-support placeholder:text-label-md focus:placeholder:text-color-disable disabled:cursor-not-allowed disabled:text-color-disable disabled:placeholder:text-color-disable"
                placeholder="Email"
                type="email"
                name="email"
                defaultValue=""
              />
            </div>
          </div>
          <button
            data-loading="false"
            className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-brand hover:bg-ux-brand-hover active:bg-ux-brand-press data-[loading=true]:bg-ux-brand-disable disabled:bg-ux-brand-disable h-12 rounded-2xl px-5 w-full"
            type="submit"
          >
            <div>Continue with email</div>
          </button>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-3 text-sm text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-center text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
           <ImageIcon17/>
            Continue with Google
          </button>

          <button
            data-loading="false"
            className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 select-none text-label-md text-color-title transition-opacity ease-out focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed data-[loading=true]:cursor-progress disabled:text-color-disable bg-transparent hover:bg-ux-hover active:bg-ux-press data-[loading=true]:bg-transparent disabled:bg-transparent h-12 rounded-2xl px-3 w-full"
            type="button"
          >
            <div>Legacy account? Continue with password</div>
          </button>

          <div className="text-body-sm text-color-support">
            By continuing, you agree to our{" "}
            <span className="cursor-pointer text-brand underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="cursor-pointer text-brand underline">
              Privacy Policy
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
