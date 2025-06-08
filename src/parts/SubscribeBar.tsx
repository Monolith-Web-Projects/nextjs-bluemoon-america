// subscribe_background.png
"use client";
import Image from "next/image";
import ButtonBluemoon2 from "./ButtonBluemoon2";
import myImageLoader from "@/lib/loader";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function SubscribeBar() {
  return (
    <section className="relative hidden h-auto md:block">
      <div className="relative h-auto">
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col-reverse justify-items-center gap-4 sm:flex-row">
            {/* COl1 */}
            <div className="flex items-center p-5">
              <p className="text-white">
                Subscribe and stay informed about all our news and promotions.
              </p>
            </div>
            {/* COl2 */}
            <div className="grow">
              <SearchBar></SearchBar>
            </div>
          </div>
        </div>
        {/* BG Images */}
        <div className="h-auto w-screen">
          <Image
            loader={myImageLoader}
            className="object-cover"
            src="/assets/subscribe_background.png"
            alt="hero01.png"
            width="2000"
            height="759"
          ></Image>
        </div>
      </div>
    </section>
  );
}

const SearchBar = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="grid w-full grid-cols-[2fr_1fr]">
      <div className="flex w-full flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="grow rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <div className="flex items-center justify-start">
          <Checkbox></Checkbox>
          <p className="p-2 text-white">
            I accept the terms and conditions for the use of my data.
          </p>
        </div>
      </div>
      <div>
        <ButtonBluemoon2 buttonText="Send" email={email}></ButtonBluemoon2>
      </div>
    </div>
  );
};
