import React from "react";
import Header from "../_layout/header";
import Navigation from "../_components/navigation";
import Footer from "../_layout/footer";
import { Metadata } from "next";
import { NavigationClass } from "../_models/navigation";

export const metadata: Metadata = {
  title: {
    default: "Marketplace",
    template: "%s | Marketplace",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  let links: NavigationClass[] = [
    {
      id: 1,
      title: "Home",
      route: "/",
    },
    {
      id: 2,
      title: "Contents",
      route: "/content-list",
    },
    {
      id: 3,
      title: "About Us",
      route: "/about-us",
    },
    {
      id: 4,
      title: "Contact Us",
      route: "/contact-us",
    },
    {
      id: 5,
      title: "Games",
      route: "/gaming",
    },
    {
      id: 6,
      title: "Team Profile",
      route: "/team-profile",
    },
  ];
  return (
    <div>
      <Header></Header>
      <Navigation links={links}></Navigation>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
