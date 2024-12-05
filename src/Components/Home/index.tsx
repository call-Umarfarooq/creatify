import React from "react";
import Layout from "../Elements/Layout";
import Image from "next/image";
import CreateNowCart from "../Elements/CreateNowCart";
import { Arrow, Feature } from "../utils/SvgIcons";
import FeatureCard from "../Elements/FeatureCard";
import NavBar from "../Elements/NavBar";

const Home = () => {
  const handleClick = () => {
    console.log("Card clicked!");
  };

  return (

    <>
        {/* < NavBar/> */}
    <Layout>
   
      <main>
        <div className="relative h-full w-full">
          <div className="no-scrollbar h-full w-full rounded-2xl p-6">
            <div className="no-scrollbar  h-full w-full  overflow-y-auto rounded-2xl">
              <p
                data-slot="text"
                className="text-white text-[24px] font-bold leading-[32px] tracking-[2%] font-sans"
              >
                Featured Product
              </p>

              <div className="flex flex-col md:flex-row gap-5 ">
                <CreateNowCart
                  url="/assets/link-to-video.webp"
                  title="AI Video Ads"
                  text="Make engaging video ads with a few clicks"
                />
                <CreateNowCart
                  url="/assets/ai-avatar.webp"
                  title="AI Avatar"
                  text="Create realistic avatar from script"
                />
              </div>
              <p
                data-slot="text"
                className="text-white py-9 text-[24px] font-bold leading-[32px] tracking-[2%] font-sans"
              >
                Featured Product
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <FeatureCard
                  id="ai-shorts"
                  imageSrc="/assets/optimize-ai-shorts.jpg"
                  imageAlt="AI Shorts Cover"
                  label="Tutorial"
                  title="AI Shorts"
                  description="Transform idea into viral videos"
                 
                />
                <FeatureCard
                  id="ai-shorts"
                  imageSrc="/assets/optimize-ai-shorts.jpg"
                  imageAlt="AI Shorts Cover"
                  label="Tutorial"
                  title="AI Shorts"
                  description="Transform idea into viral videos"
                
                />
                <FeatureCard
                  id="ai-shorts"
                  imageSrc="/assets/optimize-ai-shorts.jpg"
                  imageAlt="AI Shorts Cover"
                  label="Tutorial"
                  title="AI Shorts"
                  description="Transform idea into viral videos"
                  
                />
                <FeatureCard
                  id="ai-shorts"
                  imageSrc="/assets/optimize-ai-shorts.jpg"
                  imageAlt="AI Shorts Cover"
                  label="Tutorial"
                  title="AI Shorts"
                  description="Transform idea into viral videos"
                
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
    </>
  );
};

export default Home;
