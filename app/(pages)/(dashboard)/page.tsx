import React from "react";
import { Metadata } from "next";
import Partners from "./partners";
import Banner from "./banner";
import TopCards from "./top-cards";
import Navigation from "@/app/_components/navigation";
import { NavigationClass } from "@/app/_models/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  let links: NavigationClass[] = [
    {
      id: 1,
      title: "Banner",
      route: "#dash-banner",
    },
    {
      id: 2,
      title: "Top Cards",
      route: "#dash-top-cards",
    },
    {
      id: 3,
      title: "Partners",
      route: "#dash-partners",
    },
  ];

  return (
    <div>
      <Navigation
        links={links}
        className={
          "flex justify-start items-center gap-2 text-red-500 font-black sticky top-0"
        }
      />
      <div className="snap-y h-80 overflow-auto">
        <Banner className={"h-80 snap-start"} id={"dash-banner"} />
        <TopCards className={"h-80 snap-start"} id={"dash-top-cards"} />
        <Partners className={"h-80 snap-start"} id={"dash-partners"} />
      </div>
    </div>
  );
};

export default Dashboard;
