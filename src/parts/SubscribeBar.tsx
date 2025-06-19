// subscribe_background.png
"use client";
import Image from "next/image";
import ButtonBluemoon2 from "./ButtonBluemoon2";
import myImageLoader from "@/lib/loader";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

type SearchBarProps = {
  onEmailChange: (email: string) => void;
};

export default function SubscribeBar() {
  const [email, setEmail] = useState(""); //For SearchBar function
  const handleEmailChange = (newEmail: string): void => {
    setEmail(newEmail); //get value from SearchBar input
  };

  return (
    <section className="relative mb-10 h-fit w-full overflow-clip p-5">
      <div
        id="background-images"
        className="absolute inset-0 h-full w-full overflow-hidden"
      >
        <Image
          loader={myImageLoader}
          className="h-full w-full object-cover md:object-cover lg:object-fill"
          src="/assets/subscribe_background.png"
          alt="hero01.png"
          fill={true}
        ></Image>
      </div>

      <div className="grid grid-cols-1 grid-rows-1 gap-0 sm:gap-4 lg:grid-cols-[40%_40%_15%] lg:gap-6 xl:grid-cols-[45%_35%_12%] [&>div]:z-10">
        <div
          id="subscribe-desciption"
          className="flex h-auto items-center justify-center p-2 text-center lg:justify-start lg:text-left"
        >
          <p className="text-left text-white">
            Subscribe and stay informed about all our news and promotions.
          </p>
        </div>
        <div
          id="subscribe-text-field"
          className="flex h-auto flex-col items-center justify-center p-2 lg:items-start"
        >
          <SearchBar onEmailChange={handleEmailChange}></SearchBar>
        </div>
        <div
          id="subscribe-submit-button"
          className="flex h-auto items-center justify-center p-2"
        >
          <ButtonBluemoon2 buttonText="Send" email={email}></ButtonBluemoon2>
        </div>
      </div>
    </section>
  );
}

const SearchBar = ({ onEmailChange }: SearchBarProps) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    onEmailChange(email); // push value on every change
  }, [email]);

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="max-h-10 w-full max-w-106 grow rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
      />
      <div className="mt-3 flex items-center justify-start">
        <Checkbox></Checkbox>
        <p className="p-2 text-white">
          I accept the terms and conditions for the use of my data.
        </p>
      </div>
    </div>
  );
};
