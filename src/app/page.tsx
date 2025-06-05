import Image from "next/image";
import CoverImage from "@/parts/CoverImage";
import CoverImageWithButton from "@/parts/CoverImageWithButton";
import TabSections from "./sections/TabSections";
import { CarouselPromotion } from "@/parts/CarouselPromotion";
import { CarouselMain } from "@/parts/CarouselMain";
import ContactUsSection from "./sections/ContactUsSection";
import MixedTitle from "@/parts/MixedTitle";
import IconsWithDescription from "@/parts/IconsWithDescription";
import ImagesWithDescSection from "./sections/ImagesWithDescSection";
import SubscribeBar from "@/parts/SubscribeBar";
import { CarouselDistro } from "@/parts/CarouselDistro";

export default function Home() {
  return (
    <section>
      <div className="bg-white">
        <CarouselMain
          images={[
            "/assets/hero02.png",
            "/assets/hero02.png",
            "/assets/hero02.png",
          ]}
          carouselHeight="200px"
        ></CarouselMain>

        <section className="block justify-items-center p-10">
          <div className="block w-3/4 justify-items-center">
            <MixedTitle
              promoTitle="Unmatched Durability for All Your"
              promoTitleHightlight="Driving Needs"
              promoDesc="Discover the perfect blend of performance and reliability with our premium tires and batteries. Elevate your driving experience today!"
            ></MixedTitle>
            <div className="grid grid-cols-1 grid-rows-1 justify-items-center gap-4 lg:grid-cols-3">
              <IconsWithDescription
                iconUrl="/assets/wheel_1.png"
                iconTitle="A Wide Variety of Tires and Batteries Available"
                iconDescription="Discover the perfect blend of performance and reliability with our premium tires and batteries. Elevate your driving experience today"
              ></IconsWithDescription>
              <IconsWithDescription
                iconUrl="/assets/shipping_1.png"
                iconTitle="24/7 Emergency Roadside Assistance Available"
                iconDescription="Our products are designed to withstand the toughest conditions."
              ></IconsWithDescription>
              <IconsWithDescription
                iconUrl="/assets/repair_1.png"
                iconTitle="Comprehensive Warranty and shipping for Peace of Mind"
                iconDescription="We're here to help you, day or night Enjoy confidence with our extensive warranty coverage on all products"
              ></IconsWithDescription>
            </div>
          </div>
        </section>

        <section className="mt-30 w-screen">
          <div className="w-auto px-5">
            <h3 className="mb-5 text-center text-3xl font-extrabold italic">
              PROMOTION{" "}
            </h3>
            <p className="text-center">
              Find all our current promotions from our more than{" "}
              <span className="text-center text-[var(--marian-blue)]">
                600 suppliers.
              </span>
            </p>
            <CarouselPromotion></CarouselPromotion>
          </div>
        </section>

        <CoverImage
          bgimages="/assets/cover_banner.png"
          title="Experience Unmatched Performance and Safety"
          description="Our tires and oils are engineered for excellence, ensuring optimal performance on every journey. Choose us for enhanced safety and reliability on the road."
        ></CoverImage>

        <TabSections></TabSections>

        <ContactUsSection></ContactUsSection>

        <CoverImageWithButton
          bgimages="/assets/bluemoon_offroad.png"
          title="CHALLENGE YOURSELF TO TRAVEL THE MOST CHALLENGING PATHS"
        ></CoverImageWithButton>

        <ImagesWithDescSection></ImagesWithDescSection>

        <section className="w-screen flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-extrabold italic">Distributors</h3>
          <p>
            We have a wide network of distributors offering.{" "}
            <span className="text-[var(--marian-blue)]">
              top-quality service
            </span>
          </p>
          <div className="w-3/4 p-5">
            <div className="my-5 flex w-screen flex-col items-center justify-center"></div>
            <CarouselDistro></CarouselDistro>
          </div>
        </section>

        <SubscribeBar></SubscribeBar>
      </div>
    </section>
  );
}
