"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import instaIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";


export default function Navbar() {
  const [dropDownDesktop, setDropDownDesktop] = useState<boolean>(false);
  function handleDropDownDesktop() {
    setDropDownDesktop(!dropDownDesktop);
    console.log("desktop is clicked");
    console.log(dropDownDesktop);
  }

  const [nestedDropDown, setNestedDropDown] = useState<boolean>(false);
  function handleNestedDropDown() {
    setNestedDropDown(!nestedDropDown);
  }

  const [HumbergerMenu, setHumbergerMenu] = useState<boolean>(false);
  function handleHumbergerMenu() {
    setHumbergerMenu(!HumbergerMenu);
  }

  return (
    <nav className="z-50 bg-black text-white border-gray-200 dark:bg-black dark:border-black mb-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around max-md:justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Upsilon
          </span>
        </Link>
        <button
          onClick={handleHumbergerMenu}
          className={
            "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-sm md:hidden   dark:text-gray-100 dark:hover:border-2 hover:border-slate-400" +
            (HumbergerMenu
              ? " dark:focus:ring-gray-200 focus:outline-none focus:ring-2"
              : "")
          }
        >
          {/* HumbergerMenu - Menu - menubutton */}
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          id="hamburgerMenu"
          className={
            (HumbergerMenu ? "" : "hidden") + " w-full md:block md:w-auto"
          }
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-sm bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black border-black">
            <li>
              <Link
                href="/Galleries"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:hover:border-b-2 focus:text-white "
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/Narcotic"
                className="block py-2 pl-3 pr-4  text-white hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:hover:border-b-2 focus:text-white "
              >
                Narcotics
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:hover:border-b-2 focus:text-white "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:hover:border-b-2 focus:text-white "
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={handleDropDownDesktop}
                className=" flex items-center justify-between w-full py-2 pl-3 pr-4 text-white hover:bg-gray-500 md:hover:bg-transparent md:hover:border-b-2 md:border-0 md:p-0 md:w-auto focus:text-white"
              >
                DropdownDesk{" "}
                <svg
                  className={
                    "w-2.5 h-2.5 ml-2.5 " +
                    (dropDownDesktop ? "rotate-180" : "")
                  }
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/*  Dropdown menu  */}
              <div
                onMouseLeave={() => {
                  console.log("mouse left");
                  setDropDownDesktop(false);
                  console.log(dropDownDesktop);
                }}
                className={
                  "absolute z-[1000] " +
                  (dropDownDesktop === false ? "hidden" : "") +
                  " font-normal bg-white divide-y  rounded-md shadow w-44 dark:bg-black divide-gray-600"
                }
              >
                <ul className=" bg-[#1a1a1a] py-2 text-sm  text-white">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2  hover:bg-gray-600  hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleNestedDropDown}
                      className="flex items-center justify-between w-full px-4 py-2  hover:bg-gray-600 hover:text-white"
                    >
                      NestedDropDown
                      <svg
                        className={
                          "w-2.5 h-2.5 ml-2.5 " +
                          (nestedDropDown ? "" : "rotate-180")
                        }
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* check this out */}
                    <div
                      className={
                        "z-10 " +
                        (nestedDropDown ? "hidden" : "") +
                        " bg-[#0e0e0e] divide-y divide-gray-100 rounded-sm shadow w-44 "
                      }
                    >
                      <ul className="py-2 text-sm text-gray-300 dark:text-gray-200 bg-[#212121]">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700 text-gray-400 hover:text-white "
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700 text-gray-400 hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700 text-gray-400 hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700 text-gray-400 hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                    >
                      Earning
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <ul className="text-white flex flex-row space-x-4  max-md:hidden">
          <Link target="_blank" href="https://www.instagram.com/">
            <li className="fill-white hover:cursor-pointer hover:fill-[#e8085e] transition duration-200">
              <svg viewBox="0 0 50 50" width="26px" height="26px">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </li>
          </Link>
          <Link target="_blank" href="https://telegram.org/">
            <li className="fill-white hover:cursor-pointer hover:fill-blue-400 transition duration-200">
              <svg viewBox="0 0 50 50" width="27px" height="26px">
                <path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z" />
              </svg>
            </li>
          </Link>
          <Link target="_blank" href="https://soundcloud.com/">
            <li className="fill-white hover:cursor-pointer hover:fill-orange-400 transition duration-200 ">
              <svg className="" viewBox="0 0 50 50" width="30px" height="32px">
                <path d="M 30 11 C 26.398438 11 23 12.789063 21 15.6875 L 21 19.1875 L 21.3125 19.40625 L 21.6875 18.40625 C 23.085938 15.105469 26.40625 13 29.90625 13 C 34.90625 13 38.90625 17 38.90625 22 L 38.90625 24 L 40.40625 23.40625 C 41.105469 23.105469 41.800781 23 42.5 23 C 45.5 23 48 25.5 48 28.5 C 48 31.5 45.5 34 42.5 34 L 21 34 L 21 36 L 42.5 36 C 46.601563 36 50 32.601563 50 28.5 C 50 24.398438 46.601563 21 42.5 21 C 42 21 41.5 21.085938 41 21.1875 C 40.5 15.488281 35.800781 11 30 11 Z M 17 16 C 16.300781 16 15.601563 16.085938 15 16.1875 L 15 36 L 17 36 Z M 18 16 L 18 36 L 20 36 L 20 16.5 C 19.398438 16.300781 18.699219 16.101563 18 16 Z M 14 16.5 C 13.300781 16.800781 12.601563 17.101563 12 17.5 L 12 36 L 14 36 Z M 11 18.3125 C 10.199219 19.011719 9.5 19.90625 9 20.90625 L 9 36 L 11 36 Z M 6.5 22 C 6.324219 22.011719 6.148438 22.042969 6 22.09375 L 6 35.90625 C 6.300781 36.007813 6.699219 36 7 36 L 8 36 L 8 22.09375 C 7.699219 21.992188 7.300781 22 7 22 C 6.851563 22 6.675781 21.988281 6.5 22 Z M 5 22.3125 C 4.300781 22.511719 3.601563 22.8125 3 23.3125 L 3 34.6875 C 3.601563 35.085938 4.300781 35.488281 5 35.6875 Z M 2 24.09375 C 0.800781 25.394531 0 27.101563 0 29 C 0 30.898438 0.800781 32.605469 2 33.90625 Z" />
              </svg>
            </li>
          </Link>
        </ul>

        {/* this button may be replaced by something else*/}
        {/* this section is working in background so thats why justify-around is behaving strange */}
        <div className="max-lg:hidden relative ml-2" data-te-dropdown-ref>
          <a
            className=" flex items-center px-6 pb-2 pt-2.5 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            Dropdown link Works
            <span className="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
          <ul
            className="absolute z-[1000] hidden float-left m-0 . min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
