type ButtonBluemoonProps = {
  buttonText?: string;
  buttonUrl?: string;
};

export default function ButtonBluemoon({
  buttonText = "No Text Configured",
  buttonUrl = "#",
}: ButtonBluemoonProps) {
  return (
    <div className="relative flex items-center justify-center p-7">
      <a href={buttonUrl}>
        <div className="group absolute left-1/2 flex h-[30px] w-auto min-w-[200px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-4xl bg-black p-7 text-center">
          <p className="relative z-10 text-sm text-white transition duration-500 group-hover:text-[#ffffff]">
            {buttonText}
          </p>
          <span className="absolute inset-0 -z-10 h-full w-0 bg-[var(--marian-blue)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </div>
      </a>
    </div>
  );
}
