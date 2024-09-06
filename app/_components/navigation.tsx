import Link from "next/link";
import React from "react";
import { NavigationClass } from "../_models/navigation";

const Navigation = ({ links, ...props }: { links: NavigationClass[], [key: string]: any }) => {
  return (
    <ul {...props} className={props?.className ?? "flex flex-row gap-x-4 text-amber-600"}>
      {links.map((tada: NavigationClass) => (
        <Link key={`${tada?.id}`} href={tada?.route}>
          {tada?.title}
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
