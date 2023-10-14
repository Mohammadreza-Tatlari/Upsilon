"use client"; //client should be removed after testing
import React from "react";

import { TestimonialDataInstances } from "../InstanceData";
import Link from "next/link";

const TestimonialColOne = TestimonialDataInstances.firstCol;
const TestimonialColTwo = TestimonialDataInstances.secondCol;
const TestimonialColThree = TestimonialDataInstances.thirdCol;

function TestimonialCard({ item }: any) {
  return (
    <>
    <li
      key={item.id}
      className="text-sm leading-6 hover:bg-slate-50 hover:cursor-pointer hover:scale-105 transition-all duration-150"
    >
      <figure className="relative flex flex-col-reverse rounded-md p-4">
        <div className="mt-6">
          {item.image ? (
            <img src={item.image} alt="Image" />
          ) : (
            <p>{item.text}</p>
          )}
        </div>
        <figcaption className="flex items-center space-x-2">
          <img
            src={item.avatar}
            alt="avatar of channel"
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold">
              <a href="">{item.nameofchannel}</a>
            </div>
            <div className="mt-0.5">{item.channelPurpose}</div>
          </div>
        </figcaption>
      </figure>
    </li>
    </>
  );
}

export default function Testimonial() {
  return (
    <>
      <div>
        <section
          tabIndex={-1}
          className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 mt-7"
        >
          <h3 className="sr-only">Testimonial</h3>
          {/* testimonial component in Home Page is consisted of three column that are located beside each other and all are being mapped */}
          {/* TestimonialCard are the way to represent those data */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* LIST no.1 */}
            <ul className="space-y-4">
              {TestimonialColOne.map((item: any) => (
                //link and upsilon link from Instance data are remained
                <Link href={"../Narcotic/"}>
                  <TestimonialCard key={item.id} item={item} />
                </Link>
              ))}
            </ul>
            {/* List no.2 */}
            <ul className="space-y-4">
              {TestimonialColTwo.map((item: any) => (
                //link and upsilon link from Instance data are remained
                <Link href={"../Narcotic/"}>
                  <TestimonialCard key={item.id} item={item} />
                </Link>
              ))}
            </ul>
            {/* List no.3 */}
            <ul className="space-y-4">
              {TestimonialColThree.map((item: any) => (
                //link and upsilon link from Instance data are remained
                <Link href={"../Narcotic/"}>
                  <TestimonialCard key={item.id} item={item} />
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
