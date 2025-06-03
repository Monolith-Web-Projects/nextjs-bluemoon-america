import Image from "next/image";

interface TopMenuData {
  menuUrl?: string;
  menuTitle?: string;
}

interface BottomMenuData {
  menuUrl?: string;
  menuTitle?: string;
}

interface SocialIconData {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const TopMenu: TopMenuData[] = [
  { menuTitle: "Catalogue", menuUrl: "#" },
  { menuTitle: "Products", menuUrl: "#" },
  { menuTitle: "About Us", menuUrl: "#" },
  { menuTitle: "Distributors", menuUrl: "#" },
  { menuTitle: "Why Bluemoon", menuUrl: "#" },
];

const BottomMenu: BottomMenuData[] = [
  { menuTitle: "Privacy", menuUrl: "#" },
  { menuTitle: "Policies", menuUrl: "#" },
  { menuTitle: "Terms of use", menuUrl: "#" },
  { menuTitle: "Sales", menuUrl: "#" },
  { menuTitle: "Legal", menuUrl: "#" },
  { menuTitle: "Maps", menuUrl: "#" },
];

const SocialIcon: SocialIconData[] = [
  {
    src: "/assets/likedin_logo.png",
    alt: "footer_logo",
    width: 50,
    height: 50,
  },

  {
    src: "/assets/facebook_logo.png",
    alt: "footer_logo",
    width: 50,
    height: 50,
  },

  {
    src: "/assets/instagram_logo.png",
    alt: "footer_logo",
    width: 50,
    height: 50,
  },
];

export default function FooterMenu() {
  return (
    <div className="grid h-auto w-auto grid-cols-2 grid-rows-1 items-center">
      {/* Footer Menu */}
      <div className="flex flex-col justify-center p-5 text-white">
        <div className="flex w-auto list-none justify-evenly font-light [&>div]:mr-5">
          {TopMenu.map((item, index) => (
            <div key={index}>
              {item.menuTitle && item.menuUrl && (
                <a
                  href={item.menuUrl}
                  className="transition-all duration-500 hover:text-[var(--marian-blue)]"
                >
                  <li>{item.menuTitle}</li>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="my-5 border-t opacity-70"></div>

        <div className="flex w-auto list-none justify-evenly font-light [&>div]:mr-5">
          {BottomMenu.map((item, index) => (
            <div key={index}>
              {item.menuTitle && item.menuUrl && (
                <a
                  href={item.menuUrl}
                  className="transition-all duration-500 hover:text-[var(--marian-blue)]"
                >
                  <li>{item.menuTitle}</li>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Footer Menu */}

      <SocialIcons></SocialIcons>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-5 p-5 text-white">
      {SocialIcon.map((item, index) => (
        <div key={index}>
          {item.src && item.alt && item.width && item.height && (
            <Image
              className="object-cover"
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          )}
        </div>
      ))}
    </div>
  );
}
