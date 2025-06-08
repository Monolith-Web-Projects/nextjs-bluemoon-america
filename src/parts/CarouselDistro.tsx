"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardsBluemoon from "@/parts/CardsBluemoon";
import Image from "next/image";
import myImageLoader from "@/lib/loader";

interface slideData {
  bgimages: string;
}

const data: slideData[] = [
  {
    bgimages: "/assets/carousel_distributor/bf_goodrich.png",
  },

  {
    bgimages: "/assets/carousel_distributor/continental.png",
  },

  {
    bgimages: "/assets/carousel_distributor/cooper_tires.png",
  },

  {
    bgimages: "/assets/carousel_distributor/falken_tires.png",
  },

  {
    bgimages: "/assets/carousel_distributor/genral_tires.png",
  },

  {
    bgimages: "/assets/carousel_distributor/michelin.png",
  },
];

export function CarouselDistro() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="flex w-screen flex-col items-center justify-center overflow-hidden sm:w-full">
      <Carousel
        plugins={[plugin.current]}
        className="h-[100px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-mx-5 w-screen">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex h-full basis-11/12 items-center justify-center sm:basis-1/5"
            >
              <div className="h-20 w-70">
                <Image
                  loader={myImageLoader}
                  width={500}
                  height={500}
                  className="object-cover"
                  src={item.bgimages}
                  alt="hero01.png"
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
