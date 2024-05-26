"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import AltiusLogo from "../assets/altius_logo.jpg";
import TabxoLogo from "../assets/tabxo_labs_logo.jpg";

export default function Experience() {
  return (
    <div className="border border-gray-600/50 w-full rounded-md p-4 mb-4">
      <TracingBeam className="px-6">
        <div className="max-w-xl lg:mx-auto antialiased relative ml-3">
        {/* relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold */}
          <h2 className="relative z-10 text-2xl pt-1 lg:pt-0 md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-sans font-bold">Experience</h2>
          {content.map((item, index) => (
            <div
              key={`content-${index}`}
              className="flex flex-col lg:flex-row justify-start items-start mb-10 pt-8"
            >
              <Image
                className="rounded-md w-[60px] h-[60px] mr-4"
                src={item.image}
                alt={item.subTitle}
              />
              <div className="flex flex-col items-start">
                <h1 className="text-xl lg:text-2xl font-semibold text-white mt-4 lg:mt-0">{item.title}</h1>
                <p className="text-gray-400 text-md lg:text-lg mb-3">{item.subTitle}</p>
                <p className="text-gray-400  text-md lg:text-lg">{item.info}</p>
                <div className="text-gray-300 hidden lg:block text-sm lg:text-xl font-semibold lg:font-medium text-justify mt-4">
                  {item.description}
                </div>
              </div>
              <div className="text-gray-300  lg:hidden text-sm lg:text-xl font-semibold lg:font-medium text-justify mt-4">
                  {item.description}
                </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const content = [
  {
    title: "Front-End Developer",
    subTitle: "Altius Customer Services Pvt. Ltd · Full-time",
    info: (
      <>
        <span>Oct 2022 - Present · 1 yr 8 mos</span> <br />
        <span>Nagpur, Maharashtra, India</span>
      </>
    ),
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    image: AltiusLogo,
  },
  {
    title: "Web Developer",
    subTitle: "TabXo Labs LLP · Full-time",
    info: (
      <>
        <span>Mar 2019 - Oct 2021 · 2 yrs 8 mos</span><br />
        <span>Nagpur, Maharashtra, India</span>
      </>
    ),
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    image: TabxoLogo,
  },
];
