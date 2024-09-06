import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>P1-P2 Interceptor</div>
      <Link href={"/p1"}>{"P1<P1-P2"}</Link>
    </>
  );
};

export default page;
