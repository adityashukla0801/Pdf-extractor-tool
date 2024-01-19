import React from "react";

const FileUpload = ({ onUpload, loading }) => {
  //File upload on change of input
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      {/* File Input for the upload file */}
      <input
        disabled={loading}
        accept=".pdf"
        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 p-4 cursor-pointer"
        type="file"
        onChange={handleFileChange}
      />
      {/* Warning this file input accept only .pdf formate */}
      <label className="text-red-500 p-4">
        * Support for .pdf file format.
      </label>
    </div>
  );
};

export default FileUpload;
