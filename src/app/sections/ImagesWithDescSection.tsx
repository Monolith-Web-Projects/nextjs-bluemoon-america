import IconsWithDescription2 from "@/parts/IconsWithDescription2";
import Image from "next/image";

export default function ImagesWithDescSection() {
  return (
    <section className="my-30 flex w-screen items-center justify-center">
      <div className="w-4/5 lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-start-1 hidden items-start justify-center sm:flex">
            <div className="p-5">
              <Image
                className="h-auto object-cover"
                src="/assets/tires_filter.png"
                alt="hero01.png"
                width="2000"
                height="759"
              ></Image>
            </div>
          </div>

          <div className="col-start-2 flex flex-col items-center justify-center text-center md:text-left">
            <h3 className="mb-5 text-3xl font-extrabold italic md:text-4xl">
              We offer fast,{" "}
              <span className="text-[var(--marian-blue)]">free delivery </span>{" "}
              to our network of local tire shops and mobile installers. It
              couldnt be easier
            </h3>
            <div className="grid grid-cols-1 grid-rows-1 justify-items-center gap-0 md:grid-cols-3 lg:gap-4">
              <IconsWithDescription2
                iconUrl="/assets/shipping_1.png"
                iconTitle="Free Shipping"
                iconDescription="on many items Same day shipping"
              ></IconsWithDescription2>
              <IconsWithDescription2
                iconUrl="/assets/shipping_4.png"
                iconTitle="Guarantee Installation"
                iconDescription="No hidden costs"
              ></IconsWithDescription2>
              <IconsWithDescription2
                iconUrl="/assets/shipping_5.png"
                iconTitle="Free returns (20 days)"
                iconDescription="Satisfaction Guarantee"
              ></IconsWithDescription2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
