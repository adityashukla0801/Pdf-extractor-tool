import React from "react";

const ResultsTable = ({ text, analysis }) => {
  // Implement rendering of the results table based on extracted text and analysis data
  return (
    <div>
      <h2 className="text-3xl m-4">Results</h2>
      <p className="text-xl m-4">Extracted Text:</p>
      <p className="text-sm m-8">{text}</p>
      <p className="text-xl m-4">Extracted Table:</p>
      {/* Display Langchain and OpenAI analysis results */}
      <table className="table-auto m-8 w-full text-left border border-white">
        <thead>
          <tr className="bg-[#FFFF00] text-[#000] border border-white">
            <th className="p-6">Header</th>
            <th className="p-6">Value</th>
          </tr>
        </thead>
        <tbody>
          {analysis?.length &&
            analysis.map((item) => {
              return (
                <tr key={item.key} className="border border-white">
                  <td className="p-6">{item.key}</td>
                  <td className="p-6">{item.value}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
