import Input from "@/app/_components/input";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  let value: number = 12;
  return (
    <div>
      <Input label={"Saved State"} value={value} id={"layout"}></Input>
      {children}
    </div>
  );
};

export default layout;
