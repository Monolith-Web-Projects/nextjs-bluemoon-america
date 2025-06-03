import Image from "next/image";

type IconsWithDescriptionProps = {
  iconUrl: string;
  iconTitle: string;
  iconDescription: string;
};

export default function IconsWithDescription({
  iconUrl,
  iconTitle,
  iconDescription,
}: IconsWithDescriptionProps) {
  return (
    <div>
      <div className="block size-auto justify-items-center">
        <div className="mb-5 h-40 w-40">
          <Image
            className="object-contain"
            src={iconUrl}
            alt="hero01.png"
            width="2000"
            height="759"
          ></Image>
        </div>
        <div className="h-1/4 w-3/4 sm:h-3/4">
          <h4 className="mb-3 text-center text-2xl leading-none font-bold text-[var(--marian-blue)]">
            {iconTitle}
          </h4>
          <p className="text-center text-sm">{iconDescription}</p>
        </div>
      </div>
    </div>
  );
}
