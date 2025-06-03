import TabsBluemoon from "@/parts/TabsBluemoon";
import Image from "next/image";

export default function () {
  return (
    <section className="relative overflow-x-clip">
      <div className="grid w-screen grid-cols-1 grid-rows-1 justify-items-center gap-5 overflow-x-clip p-5 sm:grid-cols-[1fr_2fr]">
        <div className="h-auto w-screen p-5 sm:w-100">
          <Image
            className="object-cover"
            src="/assets/tires_wet.png"
            alt="hero01.png"
            width="700"
            height="500"
          ></Image>
        </div>
        <div>
          <TabsBluemoon></TabsBluemoon>
        </div>
      </div>
    </section>
  );
}
