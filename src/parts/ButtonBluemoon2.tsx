"use client";

import { useState } from "react";

type ButtonBluemoon2Props = {
  buttonText?: string;
  email?: string;
};

export default function ButtonBluemoon2({
  buttonText = "No Text Configured",
  email,
}: ButtonBluemoon2Props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleClick = async () => {
    setLoading(true);
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: "Test Email CSRF",
        message: "Hello!",
        recipient: email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Email sent successfully!");
      alert("Email sent!");
    } else {
      setStatus("Failed to send email.");
      alert(`Failed: ${data.error}`);
    }

    setLoading(false);
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
