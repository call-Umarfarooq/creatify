import React from "react";
import Layout from "../Elements/Layout";
import ProductCard from "../Elements/ProductCard";

const Products = () => {
  const handleThreeDotClick = () => {
    console.log("ThreeDot button clicked");
  };
  return (
    <Layout>
      <div className="no-scrollbar h-full flex-col overflow-y-auto rounded-2xl bg-white/[0.05]">
        <div className="page-in h-full text-white p-10">
          <div className="h-full flex-col rounded-2xl 2xl:bg-transparent">
            <div>
              <div className="flex items-center justify-between border-white border-b border-opacity-10 pb-6">
                <div>
                  <p
                    data-slot="text"
                    className="font-medium text-[#9B9C9E] text-base font-sans"
                  >
                   Demo User Workspace
                  </p>
                  <p
                    data-slot="text"
                    className="text-white font-bold text-[32px]/[40px] font-sans"
                  >
                    Products
                  </p>
                </div>
              </div>
              <div className="mt-6 font-medium text-base text-white">
                1 product
              </div>
            </div>
            <div className="grid grid-cols-1 my-6  pb-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProductCard
                imageSrc="https://d35ghwdno3nak3.cloudfront.net/user/720000/2024-11-30/efed1424.jpg"
                title="Sample Product Title"
                numImages={5}
                numVideos={2}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
