"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardsBluemoon from "@/parts/CardsBluemoon";

interface slideData {
  bgimages: string;
  buttontext: string;
  cardwidth: string;
}

const data: slideData[] = [
  {
    bgimages: "/assets/carousel_automobils/car_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_automobils/car_tires.png",
    buttontext: "Schedule Apointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_automobils/car_tires.png",
    buttontext: "Schedule Apointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_automobils/car_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_automobils/car_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/carousel_automobils/car_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
];

export function CarouselAutomobiles() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-auto">
        {data.map((item, index) => (
          <div key={index} className="w-150">
            <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
              {item.bgimages && item.buttontext && item.cardwidth && (
                <CardsBluemoon
                  bgimages={item.bgimages}
                  buttontext={item.buttontext}
                  cardwidth={item.cardwidth}
                ></CardsBluemoon>
              )}
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
