import Navigation from "@/app/_components/navigation";
import { NavigationClass } from "@/app/_models/navigation";
import React from "react";

const PlaygroundLay = ({ children }: { children: React.ReactNode }) => {
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
      <span className="text-sky-500">Playground Layout</span>
      <Navigation links={navs} />
      {children}
    </div>
  );
};

export default PlaygroundLay;
