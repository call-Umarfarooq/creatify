import React from "react";

const CreaditHistoryModel = () => {
  return (
    <div className="min-h-screen absolute bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg">Current credits: <span className="font-semibold">Free (10 credits/mo)</span></p>
            <p className="text-sm text-gray-400">Next renewal: <span className="text-white">December 29, 2024</span></p>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded text-white">Upgrade</button>
        </div>

        <div className="bg-gray-700 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-800 text-gray-400">
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Credits</th>
                <th className="py-3 px-4">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-600">
                <td className="py-3 px-4">use_credit</td>
                <td className="py-3 px-4">
                  Link to Video (ccc45782-15bd-4f06-9282-29dbccf310bb)
                </td>
                <td className="py-3 px-4 text-red-500">-5</td>
                <td className="py-3 px-4">Dec 01, 2024</td>
              </tr>
              <tr className="border-t border-gray-600">
                <td className="py-3 px-4">use_credit</td>
                <td className="py-3 px-4">
                  Link to Video (b23a7c52-8708-46b9-886d-8db5927cbc0b)
                </td>
                <td className="py-3 px-4 text-red-500">-5</td>
                <td className="py-3 px-4">Dec 01, 2024</td>
              </tr>
              <tr className="border-t border-gray-600">
                <td className="py-3 px-4">free_credit</td>
                <td className="py-3 px-4">Monthly grant of free</td>
                <td className="py-3 px-4 text-green-500">10</td>
                <td className="py-3 px-4">Nov 29, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button className="bg-gray-700 px-4 py-2 rounded">Back</button>
          <div className="flex items-center space-x-2">
            <span>Page</span>
            <input
              type="number"
              className="w-12 bg-gray-800 text-center text-white border border-gray-600 rounded"
              defaultValue="1"
            />
            <button className="bg-gray-700 px-4 py-2 rounded">Go</button>
          </div>
          <button className="bg-gray-700 px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CreaditHistoryModel;
