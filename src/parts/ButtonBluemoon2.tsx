type ButtonBluemoon2Props = {
  buttonText?: string;
  email?: string;
};

export default function ButtonBluemoon2({
  buttonText = "No Text Configured",
  email,
}: ButtonBluemoon2Props) {
  const handleClick = async () => {
    if (!email) return alert("Please eneter a valid email.");

    const res = await fetch("/api/sent-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email,
        subject: "Thank You for subscribing!",
        message: "You’ve been added to our newsletter. Welcome!",
      }),
    });

    const data = await res.json();
    alert(data.success ? "Email sent!" : `Failed: ${data.console.error}`);
  };

  return (
    <div className="relative flex items-center justify-center p-7">
      <button onClick={handleClick}>
        <div className="group absolute top-1/2 left-1/2 flex h-auto max-h-[30px] w-auto min-w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-4xl bg-black p-7 text-center">
          <p className="relative z-10 text-sm text-white transition duration-500 group-hover:text-[#ffffff]">
            {buttonText}
          </p>
          <span className="absolute inset-0 -z-10 h-full w-0 bg-[var(--marian-blue)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </div>
      </button>
    </div>
  );
}
