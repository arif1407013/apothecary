import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>P1</div>
      <Link href={"/p1/p1-p1"}>{"P1>P1-P1"}</Link>
      <br />
      <Link href={"/p2"}>{"P2"}</Link>
    </>
  );
};

export default page;
