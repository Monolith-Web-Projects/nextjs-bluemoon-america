"use client";
import { useState } from "react";
import Image from "next/image";

// Define the type for props
interface MenuItemProps {
  title: string;
  url: string;
}

const menu = [
  { title: "Catalogue", url: "#" },
  { title: "Products", url: "#" },
  { title: "About Us", url: "#" },
  { title: "Why Bluemoon", url: "#" },
];

const icon = {
  src: "/assets/BMI_Official_Logo_horizontal.png",
  alt: "bluemoon-logo.png",
  width: 200,
  height: 72.33,
};

const MenuItem = ({ title, url }: MenuItemProps) => {
  return (
    <a
      href={url}
      className="group relative inline-block p-1 text-white transition-all duration-500 hover:text-[var(--marian-blue)]"
    >
      {title}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--marian-blue)] transition-all duration-500 group-hover:w-full" />
    </a>
  );
};

export default function Navbar({}) {
  return (
    <section
      className={`fixed top-0 z-[1000] flex w-screen items-center justify-between bg-[#00000070] px-4 py-2 backdrop-blur-sm`}
    >
      {/* Site Logo */}
      <Image
        src={icon.src}
        alt={icon.alt}
        width={icon.width}
        height={icon.height}
        priority
      />
      {/* Nav Menu */}
      <nav className="mr-10 hidden items-start gap-4 lg:flex">
        {menu.map((item, index) => (
          <MenuItem key={index} title={item.title} url={item.url} />
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="absolute top-8 right-8 block lg:hidden">
        <Dropdown></Dropdown>
      </div>
    </section>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none"
      >
        {"☰"}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 flex h-auto w-auto max-w-45 min-w-30 items-end justify-center rounded-md bg-[#00000070] shadow-xl ring-1 ring-black/30 backdrop-blur-lg">
          {/* Nav Menu */}
          <nav
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-start justify-center gap-4 p-5 text-left"
          >
            {menu.map((item, index) => (
              <MenuItem key={index} title={item.title} url={item.url} />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
