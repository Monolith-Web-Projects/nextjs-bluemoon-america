"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import ButtonBluemoon from "./ButtonBluemoon";

type CarouselPluginProps = {
  images: string[];
  headline?: string;
  carouselHeight?: string;
  carouselMinHeight?: string;
};

export function CarouselMain({
  images,
  headline,
  carouselHeight = "200px",
  carouselMinHeight = "700px",
}: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="relative self-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        style={{ height: carouselHeight, minHeight: carouselMinHeight }}
        className={`w-full bg-black`}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent
          style={{ height: carouselHeight, minHeight: carouselMinHeight }}
          className={`-mx-2 w-screen bg-black sm:-mx-4`}
        >
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              style={{ height: carouselHeight, minHeight: carouselMinHeight }}
              className={``}
            >
              <Image
                className="h-full w-screen object-cover"
                src={src}
                alt={`Images Number: ${index + 1}`}
                width={2000}
                height={1149}
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          id="carousel-title-container"
          className="absolute top-1/2 left-1/2 z-50 container ml-5 w-full -translate-x-1/2 -translate-y-1/2 p-5 sm:left-0 sm:max-w-1/3 sm:translate-x-1/3"
        >
          <h1
            style={{ fontFamily: "var(--font-roboto)" }}
            className="mb-5 text-left text-3xl font-bold text-white italic sm:text-5xl md:text-4xl lg:text-5xl"
          >
            DRIVE<br></br>
            FURTHER WITH QUALITY TIRES<br></br>
            AND BATTERY<br></br>
            WITH<br></br>
            <span className="text-[var(--marian-blue)]">BLUEMOON</span>
          </h1>
          <p className="text-white">
            Discover the perfect blend of<br></br>
            performance and reliability with our<br></br>
            premium tires and batteries.<br></br>
            Elevate your driving experience today!
          </p>
        </div>
        <div className="absolute bottom-1/6 left-1/2 -translate-x-1/2 p-5 sm:right-1/4 sm:bottom-1/6 sm:translate-x-1/2">
          <ButtonBluemoon
            buttonText="LEARN MORE"
            buttonUrl="/login"
          ></ButtonBluemoon>
        </div>
      </Carousel>
    </div>
  );
}
