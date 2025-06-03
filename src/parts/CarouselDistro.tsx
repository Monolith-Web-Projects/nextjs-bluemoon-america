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

interface slideData {
  bgimages: string;
  buttontext: string;
  cardwidth: string;
}

const data: slideData[] = [
  {
    bgimages: "/assets/carousel_distributor/bf_goodrich.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_distributor/continental.png",
    buttontext: "Schedule Apointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_distributor/cooper_tires.png",
    buttontext: "Schedule Apointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_distributor/falken_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_distributor/genral_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_distributor/michelin.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
];

export function CarouselDistro() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="h-[100px] w-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-auto w-auto">
        {data.map((item, index) => (
          <div key={index} className="w-150">
            <CarouselItem className="flex basis-1 justify-center sm:basis-1/2">
              {item.bgimages && item.buttontext && item.cardwidth && (
                <Image
                  className="object-cover"
                  src={item.bgimages}
                  alt="hero01.png"
                  width="2000"
                  height="759"
                ></Image>
              )}
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
