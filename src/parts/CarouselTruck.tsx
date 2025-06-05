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
    bgimages: "/assets/carousel_truck/blumoon_truck_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
  {
    bgimages: "/assets/carousel_truck/blumoon_truck_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
  {
    bgimages: "/assets/carousel_truck/blumoon_truck_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
  {
    bgimages: "/assets/carousel_truck/blumoon_truck_tires.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
];

export function CarouselTruck() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <div key={index} className="w-100">
            {item.bgimages && item.buttontext && item.cardwidth && (
              <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
                <CardsBluemoon
                  bgimages={item.bgimages}
                  buttontext={item.buttontext}
                  cardwidth={item.cardwidth}
                ></CardsBluemoon>
              </CarouselItem>
            )}
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
