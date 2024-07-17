import React, { useState } from 'react';

const PDFList = ({ pdfs, lastUsed }) => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-bold mb-4">PDF Dateien</h2>
      <div className="flex flex-col space-y-2 mb-6">
        {pdfs.map((pdf, index) => (
          <button
            key={index}
            onClick={() => setSelectedPDF(pdf)}
            className="w-full text-left bg-custom-light-gray hover:bg-custom-dark-gray hover:text-white p-2 rounded-lg transition-all"
          >
            {pdf}
          </button>
        ))}
      </div>
      {selectedPDF && (
        <div>
          <h3 className="text-lg font-bold mb-2">Ausgewählte PDF: {selectedPDF}</h3>
          {/* PDF viewer can be implemented here */}
        </div>
      )}
      <div>
        <h3 className="text-lg font-bold mb-2">Zuletzt verwendet:</h3>
        <ul>
          {lastUsed.map((pdf, index) => (
            <li key={index} className="list-disc list-inside">
              {pdf}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PDFList;
