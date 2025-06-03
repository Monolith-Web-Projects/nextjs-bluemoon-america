import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonBluemoon from "./ButtonBluemoon";

type CardsBluemoonProps = {
  bgimages: string;
  buttontext?: string;
  cardwidth?: string;
  buttonUrl?: string;
};

export default function CardsBluemoon({
  bgimages,
  buttontext,
  cardwidth,
  buttonUrl = "#",
}: CardsBluemoonProps) {
  const [width, setwidth] = useState(cardwidth);

  const updateWidth = () => {
    if (window.innerWidth < 640) {
      setwidth(`calc(${cardwidth} / 1)`);
    } else {
      setwidth(cardwidth);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateWidth();
      window.addEventListener("resize", updateWidth);

      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [cardwidth]);

  return (
    <div className="h-[500px]" style={{ width: width }}>
      <div className="relative h-full" style={{ width: width }}>
        {/* Images */}
        <div className="absolute top-1/2 left-1/2 h-3/4 w-full -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-4xl bg-[var(--white-seasalt)]">
          <Image
            className="object-contain"
            src={bgimages}
            alt="hero01.png"
            width="500"
            height="500"
          ></Image>
        </div>
        {/* Images */}

        {/* button */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-11/12">
          <ButtonBluemoon
            buttonText={buttontext}
            buttonUrl={buttonUrl}
          ></ButtonBluemoon>
        </div>
        {/* button */}
      </div>
    </div>
  );
}
