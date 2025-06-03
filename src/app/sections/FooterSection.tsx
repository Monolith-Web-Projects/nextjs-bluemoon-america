import Image from "next/image";
import FooterMenu from "./FooterMenu";

export default function FooterSection() {
  return (
    <section className="p-5">
      <div className="grid h-fit grid-cols-1 grid-rows-1 justify-items-center gap-10 px-10 sm:grid-cols-[1fr_5fr]">
        <div className="col-start-1 flex h-full w-full items-center justify-center p-5 sm:p-0">
          <div className="h-auto w-[200px]">
            <Image
              className="object-contain"
              src="/assets/BMI_Official_Logo_horizontal.png"
              alt="bluemoon-Expensive_car"
              width="600"
              height="600"
            ></Image>
          </div>
        </div>
        <div className="col-start-2 hidden items-center justify-start sm:flex">
          <FooterMenu></FooterMenu>
        </div>
      </div>

      <div className="w-auto self-center p-5 text-center font-thin text-white">
        © 2025 Bluemoon Internation All rights reserved
      </div>
    </section>
  );
}
