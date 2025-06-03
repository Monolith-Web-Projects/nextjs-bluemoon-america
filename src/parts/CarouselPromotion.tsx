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
    bgimages: "/assets/Card_Mazda.png",
    buttontext: "Schedule Appointment",
    cardwidth: "500px",
  },

  {
    bgimages: "/assets/Card_Renault.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },

  {
    bgimages: "/assets/Card_Mazda.png",
    buttontext: "Schedule Appointment",
    cardwidth: "500px",
  },

  {
    bgimages: "/assets/Card_Mazda.png",
    buttontext: "Schedule Appointment",
    cardwidth: "500px",
  },

  {
    bgimages: "/assets/Card_Mazda.png",
    buttontext: "Schedule Appointment",
    cardwidth: "500px",
  },

  {
    bgimages: "/assets/Card_Renault.png",
    buttontext: "Schedule Appointment",
    cardwidth: "300px",
  },
];

export function CarouselPromotion() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section className="relative self-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {/* SLide gap in mx */}
        <CarouselContent className="w-auto [&>div]:mx-2 [&>div]:w-auto">
          {data.map((item, index) => (
            <div key={index}>
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
    </section>
  );
}
