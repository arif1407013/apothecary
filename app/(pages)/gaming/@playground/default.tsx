import Navigation from "@/app/_components/navigation";
import { NavigationClass } from "@/app/_models/navigation";
import React from "react";

const PlaygroundDef = () => {
  let navs: NavigationClass[] = [
    {
      id: 1,
      title: "Dark",
      route: "/gaming/dark-mode",
    },
    {
      id: 2,
      title: "Light",
      route: "/gaming/light-mode",
    },
  ];
  return (
    <div>
      <span className="text-red-400">Playground Fallback</span>
      <Navigation links={navs} />
    </div>
  );
};

export default PlaygroundDef;
