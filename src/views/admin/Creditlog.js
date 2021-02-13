import React from "react";

// components

import MyCreditLog from "components/Cards/MyCreditLog.js";

export default function Creditlog() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MyCreditLog color="dark" />
        </div>
      </div>
    </>
  );
}
