import Image from "next/image";

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import React from "react";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-22">
          <div
            className="text-2xl
          hover:bg-gray-800 rounded-full
           p-4 h-fit cursor-pointer transition-all w-fit"
          >
            <BsTwitter />
          </div>
          <div className={"mt-1 text-xl pr-4"}>
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className={
                    "flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                  }
                >
                  <span className="text-3xl">{item.icon} </span>
                  <span>{item.title} </span>
                </li>
              ))}
            </ul>
            <div className={"mt-5 px-3"}>
              <button
                className={
                  "bg-[#1d9bf0] rounded-full w-full text-lg font-semibold py-2 px-4"
                }
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600  h-screen overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
