"use client";

import React, { useState } from "react";
import { ImageIcon16, ImageIcon17, ImageIcon23 } from "../utils/SvgIcons";
import { auth } from "../utils/firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      window.location.href = "/";
    } catch (error: any) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const actionCodeSettings = {
      url: "http://localhost:3000/",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setIsEmailSent(true);
    } catch (error: any) {
      console.error("Email sign-in error:", error);
      alert("Failed to send sign-in link. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full grid grid-cols-2">
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
        {!isEmailSent ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Ready to use Creatify?</h1>

            <form
              className="w-full max-w-sm space-y-4"
              onSubmit={handleEmailSignIn}
            >
              <div className="relative w-full">
                <div className="group w-full flex gap-2 items-center bg-area-platform border border-solid h-12 rounded-2xl pl-3 pr-2">
                  <span className="text-color-support">
                    <ImageIcon16 />
                  </span>
                  <input
                    className="h-full w-full bg-transparent placeholder:text-color-support"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button
                data-loading="false"
                className="inline-flex items-center justify-center bg-brand hover:bg-ux-brand-hover h-12 rounded-2xl px-5 w-full"
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
                onClick={handleGoogleSignIn}
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-medium text-black hover:bg-gray-100"
              >
                <ImageIcon17 />
                Continue with Google
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
          </>
        ) : (
          <div className="flex flex-col items-center    ">
            <h1 className="text-3xl font-bold mb-6">Ready to use Creatify?</h1>
            <ImageIcon23 />

            <h1 className="text-2xl text-blue-500 font-bold text-center mb-2">
              Email sent
            </h1>
            <p className="text-center text-gray-400 mb-6">
              We've sent you a login link. Check your email please.
            </p>
            <p className="text-center text-gray-400">
              Didn’t receive an email?{" "}
              <button className="text-blue-500 hover:underline">
                Resend email
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
