import React from "react";

const ControlLay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <span className="text-sky-500">Control Layout</span>
      {children}
    </div>
  );
};

export default ControlLay;
