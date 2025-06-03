import Image from "next/image";
import Navbar from "@/parts/Navbar";

type HeaderMenuProps = {
  menuUrl?: string;
};

function HeaderMenu({ menuUrl = "#" }: HeaderMenuProps) {
  return (
    <div>
      <div className="hidden w-auto list-none items-center justify-evenly text-white [&>a]:mr-10 [&>a]:hover:text-[var(--marian-blue)]">
        <a
          href={menuUrl}
          className="group relative inline-block p-1 transition-all duration-500"
        >
          <li>Catalogue</li>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--marian-blue)] transition-all duration-500 group-hover:w-full" />
        </a>
        <a
          href={menuUrl}
          className="group relative inline-block p-1 transition-all duration-500"
        >
          <li>Products</li>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--marian-blue)] transition-all duration-500 group-hover:w-full" />
        </a>
        <a
          href={menuUrl}
          className="group relative inline-block p-1 transition-all duration-500"
        >
          <li>About Us</li>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--marian-blue)] transition-all duration-500 group-hover:w-full" />
        </a>
        <a
          href={menuUrl}
          className="group relative inline-block p-1 transition-all duration-500"
        >
          <li>Why Bluemoon</li>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--marian-blue)] transition-all duration-500 group-hover:w-full" />
        </a>
      </div>
    </div>
  );
}

export default function HeaderSection() {
  return (
    <section>
      <div className="flex items-center justify-between p-5">
        <div className="h-auto w-[200px]">
          <Image
            className="object-contain"
            src="/assets/BMI_Official_Logo_horizontal.png"
            alt="bluemoon-Expensive_car"
            width="600"
            height="600"
          ></Image>
        </div>
        <div className="flex h-20 items-center bg-lime-500">
          <HeaderMenu></HeaderMenu>
        </div>
      </div>
    </section>
  );
}
