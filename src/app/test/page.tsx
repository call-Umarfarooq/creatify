"use client";

import React, { FC, useState } from "react";

interface CreditHistoryProps {
  currentCredits: string;
  nextRenewal: string;
  creditsLeft: number;
  history: {
    item: string;
    description: string;
    credits: number;
    createdAt: string;
  }[];
}

const ITEMS_PER_PAGE = 5;

const CreditHistory: FC<CreditHistoryProps> = ({
  currentCredits,
  nextRenewal,
  creditsLeft,
  history,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil((history?.length || 0) / ITEMS_PER_PAGE);

  const paginatedHistory = (history || []).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div
      role="dialog"
      id="credits-dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1200] w-full max-w-5xl bg-bg-2 p-8 rounded-lg"
      style={{ pointerEvents: "auto" }}
    >
      <h2 id="dialog-title" className="font-semibold text-lg leading-none tracking-tight">
        Credits History
      </h2>
      <div className="mt-5 flex flex-col gap-5">
        {/* Current Credits Section */}
        <div className="flex items-center rounded-lg bg-white/5 p-4">
          <div className="flex flex-1 items-center">
            <div className="flex items-center gap-1">
              <p className="font-normal text-[12px] leading-[16px] text-white/60">Current credits:</p>
              <p className="font-normal text-white text-[12px] leading-[16px]">{currentCredits}</p>
            </div>
            <div className="mx-4 h-[18px] w-[1px] bg-white/15"></div>
            <div className="flex items-center gap-1">
              <p className="font-normal text-[12px] leading-[16px] text-white/60">Next renewal:</p>
              <p className="font-normal text-white text-[12px] leading-[16px]">{nextRenewal}</p>
            </div>
            <div className="mx-4 h-[18px] w-[1px] bg-white/15"></div>
            <div className="flex items-center gap-1">
              <p className="font-normal text-[12px] leading-[16px] text-white/60">Credits left:</p>
              <p className="font-normal text-white text-[12px] leading-[16px]">{creditsLeft}</p>
            </div>
          </div>
          <button
            className="bg-[#5D54FF] text-white rounded-full px-4 py-2 hover:bg-[#7D76FF]"
            type="button"
          >
            Upgrade
          </button>
        </div>

        {/* Table Section */}
        <div className="h-[428px] overflow-y-auto rounded-lg border border-white/20">
          <table className="min-w-full text-left text-sm">
            <thead className="text-zinc-500">
              <tr>
                <th className="px-4 py-2 font-medium">Item</th>
                <th className="px-4 py-2 font-medium">Description</th>
                <th className="px-4 py-2 font-medium">Credits</th>
                <th className="px-4 py-2 font-medium">Created At</th>
              </tr>
            </thead>
            <tbody>
              {paginatedHistory.map((entry) => (
                <tr key={entry.createdAt} className="border-b border-white">
                  <td className="px-4 py-4">{entry.item}</td>
                  <td className="px-4 py-4">{entry.description}</td>
                  <td className="px-4 py-4">{entry.credits}</td>
                  <td className="px-4 py-4">{entry.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center">
          <button
            className="bg-white/10 text-white rounded-lg px-4 py-2"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt; Back
          </button>
          <button
            className="bg-white/10 text-white rounded-lg px-4 py-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditHistory;

export const CreditHistoryPage: React.FC = () => {
  const currentCredits = "50";
  const nextRenewal = "2024-12-31";
  const creditsLeft = 20;
  const history = [
    {
      item: "Pro Plan",
      description: "Monthly subscription",
      credits: 30,
      createdAt: "2024-11-01",
    },
    {
      item: "Addon Pack",
      description: "Purchased extra credits",
      credits: 20,
      createdAt: "2024-11-15",
    },
    // Add more history items here
  ];

  return (
    <div>
      <h1>My Credits</h1>
      <CreditHistory
        currentCredits={currentCredits}
        nextRenewal={nextRenewal}
        creditsLeft={creditsLeft}
        history={history}
      />
    </div>
  );
};
