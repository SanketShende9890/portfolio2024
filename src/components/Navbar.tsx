import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-4 start-0 px-4" style={{ zIndex: 60 }}>
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 rounded-md border border-gray-600/50 bg-gray-300 bg-clip-padding backdrop-filter bg-opacity-10"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <Link
          href="/"
          className="flex flex-col items-start justify-start title-logo"
        >
          <div className="h-12 w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-lg font-bold text-center text-white relative z-20">
              Sanket
            </h1>
            <div className="w-20 h-2 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
              <div className="absolute inset-x-20 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
              <div className="absolute inset-x-60 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm" />
              <div className="absolute inset-x-60 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
          <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <FaGithub className="text-xl" />
          </button>
          <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <FaLinkedin className="text-xl" />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="/experience"
                className="nav-link block mx-3 font-semibold"
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li>
              <a href="/skills" className="nav-link block mx-3 font-semibold">
                Projects
              </a>
            </li>
            <li>
              <a href="/projects" className="nav-link block mx-3 font-semibold">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="nav-link block mx-3 font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
