import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Team Members
      <hr />
      <Link href={"/team-profile/1"}>Member 1</Link>
      <Link href={"/team-profile/2"}>Member 2</Link>
      <Link href={"/team-profile/3"}>Member 3</Link>
    </div>
  );
};

export default page;
