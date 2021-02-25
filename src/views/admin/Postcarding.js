import React from "react";

export default function Postcarding() {

  function handleDataSubmit() {

  }

  function handleFileChange(obj) {
    let filename = obj.target.value.split("\\")[-1]
  }

  return (
    <>
      {/* <div className="flex flex-wrap">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-800 text-xl font-bold">Postcarding Platform</h6>
            </div>
          </div>
          <div className="flex-auto py-3 px-3">
            Upload More Data:
            <form action="www.google.com/" method="post">
              <input type="file" onChange={handleFileChange} id="upload-data"></input>
              <button
                onClick={handleDataSubmit}
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                Submit Uploaded File
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}
