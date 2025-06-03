import Image from "next/image";

type IconsWithDescription2Props = {
  iconUrl: string;
  iconTitle: string;
  iconDescription: string;
};

export default function IconsWithDescription2({
  iconUrl,
  iconTitle,
  iconDescription,
}: IconsWithDescription2Props) {
  return (
    <div>
      <div className="flex h-fit w-auto grow flex-col items-center justify-center p-5">
        <div className="mb-5 h-20 w-20">
          <Image
            className="object-contain"
            src={iconUrl}
            alt="hero01.png"
            width="2000"
            height="759"
          ></Image>
        </div>
        <div className="h-1/4 w-3/4 sm:h-3/4">
          <h4 className="mb-3 text-center text-base leading-none font-extrabold">
            {iconTitle}
          </h4>
          <p className="text-center text-sm">{iconDescription}</p>
        </div>
      </div>
    </div>
  );
}
