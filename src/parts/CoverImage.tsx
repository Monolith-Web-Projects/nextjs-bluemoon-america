import Image from "next/image";
type CoverImageProps = {
  title?: string;
  description?: string;
  bgimages?: string;
};

export default function CoverImage({
  title,
  description,
  bgimages,
}: CoverImageProps) {
  return (
    <section className="relative my-5 flex h-fit flex-col items-center justify-center overflow-hidden max-md:h-[500px] lg:h-[400px]">
      {bgimages && (
        <div className="flex h-full w-screen overflow-clip">
          <Image
            className="h-full w-full self-stretch object-cover object-center"
            src={bgimages}
            alt="bluemoon-Expensive_car"
            width="2000"
            height="600"
          ></Image>
          {/* <div className="absolute inset-0 bg-[var(--marian-blue)] mix-blend-multiply" /> */}
        </div>
      )}

      <div className="grid grid-cols-1 grid-rows-1 items-center justify-center gap-x-4 gap-y-0 sm:gap-2 md:gap-4 lg:grid-cols-2 lg:gap-6 xl:gap-8">
        {/* Text part */}
        <div
          className={`${
            bgimages
              ? "absolute top-1/2 left-1/2 flex h-auto w-full -translate-x-1/2 -translate-y-1/2 flex-col p-5 sm:w-3/4"
              : "mt-5 mb-10 w-full items-center p-5 sm:w-3/4"
          }`}
        >
          <div className="w-full sm:w-3/4 md:w-1/2">
            <h1 className="text-center text-4xl font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] max-lg:text-3xl sm:text-left">
              {title}
            </h1>
            <h2 className="py-5 text-center text-lg font-thin text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] sm:text-left lg:text-base">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
