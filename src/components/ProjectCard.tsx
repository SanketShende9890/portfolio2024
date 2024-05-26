"use client";
import Image from "next/image";
import React from "react";
import { FaRegEye } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div className="flex flex-col gap-16 mx-auto mb-24">
      <div className="flex flex-col gap-5">
        <div className="group relative min-h-40 cursor-pointer overflow-hidden rounded-xl p-1 shadow-project border border-gray-500">
          <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-10 transition-transform group-hover:-translate-y-2 flex gap-x-4">
            <button className="inline-flex font-semibold items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 border text-white">
              Read more
            </button>
            <button className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 border text-white">
              <span className="font-semibold">Preview</span>
              <FaRegEye className="ml-3 mt-1" />
            </button>
          </div>
          <Image
            alt=""
            width="838.4"
            height="380"
            className="scale h-full rounded-md transition-transform group-hover:translate-y-10"
            src={props.image}
          />
        </div>
        <div className="flex flex-col justify-between pr-4 sm:flex-row">
          <p className="text-white sm:w-3/5">
            {props.description}
          </p>
          <div className="items-end text-right sm:w-2/5 mt-4 lg:mt-0">
            <div className="flex flex-col justify-end">
              <span className="flex justify-end items-center text-sm text-white dark:text-grayText2">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-60 duration-150"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                </span>
                {props.status}
              </span>
              <h4 className="text-lg font-semibold tracking-tighter text-white">
                {props.title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
