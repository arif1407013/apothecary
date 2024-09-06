import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>P2-P1</div>
      <Link href={"/p2"}>{"P2<P2-P1"}</Link>
    </>
  );
};

export default page;
