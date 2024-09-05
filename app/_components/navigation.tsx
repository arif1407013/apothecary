import Link from "next/link";
import React from "react";
import { NavigationClass } from "../_models/navigation";

const Navigation = ({ links }: { links: NavigationClass[] }) => {
  return (
    <ul className={"flex flex-row gap-x-4"}>
      {links.map((tada: NavigationClass) => (
        <Link className="text-amber-600" key={`${tada?.id}`} href={tada?.route}>
          {tada?.title}
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
