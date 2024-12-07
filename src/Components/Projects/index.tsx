"use client";
import React, { useState } from "react";
import Layout from "../Elements/Layout";
import {
  AddBtnicon,
  DeleteIcon2,
  Search,
  ThreeDotIonP,
  Uploadicon,
} from "../utils/SvgIcons";
import CheckBoxWIthUploadDelete from "./CheckBoxWIthUploadDelete";
import ProjectCard from "./ProjectCard";
import ModalComponent from "../Elements/ModalComponent";
import FeatureCard from "../Elements/FeatureCard";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ischeck, setIscheck] = useState(false)

  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const featureCardData = [
    {
      id: "ai-shorts-1",
      imageSrc: "/assets/optimize-ai-shorts.jpg",
      imageAlt: "AI Shorts Cover",
      label: "Tutorial",
      title: "AI Shorts",
      description: "Transform idea into viral videos",
    },
    {
      id: "ai-shorts-2",
      imageSrc: "/assets/optimize-ai-shorts.jpg",
      imageAlt: "AI Shorts Cover",
      label: "Tutorial",
      title: "AI Shorts",
      description: "Transform idea into viral videos",
    },
    {
      id: "ai-shorts-3",
      imageSrc: "/assets/optimize-ai-shorts.jpg",
      imageAlt: "AI Shorts Cover",
      label: "Tutorial",
      title: "AI Shorts",
      description: "Transform idea into viral videos",
    },
    {
      id: "ai-shorts-4",
      imageSrc: "/assets/optimize-ai-shorts.jpg",
      imageAlt: "AI Shorts Cover",
      label: "Tutorial",
      title: "AI Shorts",
      description: "Transform idea into viral videos",
    },
  ];
  return (
    <Layout>
      <div className="no-scrollbar relative h-full flex-col overflow-y-auto rounded-2xl bg-white/5">
        <div className="page-in h-full text-white p-5">
          <p className="font-normal text-[#9B9C9E] text-sm font-sans">
          Demo User Workspace
          </p>
          <p className="text-white mt-2.5 font-bold text-3xl font-sans">
            My Projects
          </p>

          <div className="mt-6 flex items-center gap-2">
            <div className="flex h-10 w-full items-center gap-2.5">
              <div className="h-full flex-1 flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/5">
                <div className="ml-2 flex-center hover:animate-bounce">
                  <Search />
                </div>
                <input
                  autoComplete="off"
                  className="text-base text-white placeholder:text-white/30 bg-transparent focus:outline-none w-full py-2.5 px-3.5"
                  placeholder="Search..."
                />
              </div>
            </div>
            <button
              className="text-white px-3 min-w-max py-2 bg-[#5c54ff] h-10 w-24 rounded-lg shadow-md font-semibold hover:opacity-80 flex items-center justify-center gap-2"
              type="button"
              onClick={handleOpenModal}
            >
              <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-[2px] border-white border-solid">
                <AddBtnicon />
              </div>
              <p className="font-normal">New Project</p>
            </button>
          </div>

          <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
            {featureCardData.map((card) => (
              <FeatureCard
                key={card.id} 
                id={card.id}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                label={card.label}
                title={card.title}
                description={card.description}
              />
            ))}
          </ModalComponent>
          {/* Filters */}
          <div className="h-px bg-white/5 mt-3.5 no-scrollbar"></div>
          <div className="mt-7 flex justify-between border-b border-white/5">
            <div className="flex gap-6 ">
              <div
                className={`relative cursor-pointer hover:opacity-70 ${
                  selectedFilter === 0 ? "text-white" : "text-white/50"
                }`}
                onClick={() => handleFilterChange(0)}
              >
                <div className="flex-col gap-5">
                  <p
                    className={` font-semibold text-sm  ${
                      selectedFilter === 0 ? "text-white" : "text-white/50"
                    }`}
                  >
                    All <span>(2)</span>
                  </p>
                  <div
                    className={`h-1 w-full rounded-full mt-4 ${
                      selectedFilter === 0 ? "bg-[#5C54FF]" : "bg-transparent"
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className={`relative cursor-pointer hover:opacity-70 ${
                  selectedFilter === 1 ? "text-white" : "text-white/50"
                }`}
                onClick={() => handleFilterChange(1)}
              >
                <div className="flex-col gap-5">
                  <p
                    className={`font-semibold text-sm  ${
                      selectedFilter === 1 ? "text-white" : "text-white/50"
                    }`}
                  >
                    Complete <span>(0)</span>
                  </p>
                  <div
                    className={`h-1 w-full mt-4 rounded-full ${
                      selectedFilter === 1 ? "bg-[#5C54FF]" : "bg-transparent"
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className={`relative cursor-pointer hover:opacity-70 ${
                  selectedFilter === 2 ? "text-white" : "text-white/50"
                }`}
                onClick={() => handleFilterChange(2)}
              >
                <div className="flex-col gap-5">
                  <p
                    className={` font-semibold text-sm  ${
                      selectedFilter === 2 ? "text-white" : "text-white/50"
                    }`}
                  >
                    Draft <span>(0)</span>
                  </p>
                  <div
                    className={`h-1 w-full mt-4 rounded-full ${
                      selectedFilter === 2 ? "bg-[#5C54FF]" : "bg-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <CheckBoxWIthUploadDelete setIscheck={setIscheck} />
          <div className=" h-[calc(100%-300px)] overflow-y-auto">
            <div className="infinite-scroll-component__outerdiv ">
              <div
                className="infinite-scroll-component no-scrollbar"
                style={{ height: "252px", overflow: "auto" }}
              >
                <div className="mt-[20px] flex-row justify-center p-1 pb-[100px]">
                  {selectedFilter === 1 || selectedFilter === 2 ? (
                    <p className="text-white">No project yet</p>
                  ) : (
                    <div className="grid w-full auto-rows-auto grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                      <ProjectCard
                      ischeck={ischeck}
                        videoUrl="https://example.com/video.mp4"
                        thumbnailUrl="https://dpbavq092lwjh.cloudfront.net/amzptv/b23a7c52-8708-46b9-886d-8db5927cbc0b-1733003670/thumbnail.jpg"
                        title="Sample Video Title"
                        editedDate="Dec 1, 2024"
                      
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
