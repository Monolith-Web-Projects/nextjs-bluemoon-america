type MixedTitleProps = {
  promoTitle?: string;
  promoTitleHightlight?: string;
  promoDesc?: string;
};

export default function MixedTitle({
  promoTitle = "",
  promoTitleHightlight = "",
  promoDesc = "",
}: MixedTitleProps) {
  return (
    <div className="mb-10 flex flex-col items-center justify-center text-center">
      <h3 className="mb-5 text-4xl font-extrabold italic">
        {promoTitle}{" "}
        <span className="text-[var(--marian-blue)]">
          {promoTitleHightlight}
        </span>
      </h3>
      <p className="w-3/4">{promoDesc}</p>
    </div>
  );
}
