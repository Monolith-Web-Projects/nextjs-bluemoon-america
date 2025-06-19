"use client";

import { useState } from "react";
import { getCsrfToken } from "@/lib/utils";

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
    const csrfToken = await getCsrfToken();

    const response = await fetch("http://localhost:8000/api/send-email/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken || "",
      },
      body: JSON.stringify({
        subject: "Test Email CSRF",
        message: "Hello!",
        recipient: email,
      }),
    });

    if (response.ok) {
      setStatus("Email sent successfully!");
    } else {
      setStatus("Failed to send email.");
    }
    if (!email) return alert("Please eneter a valid email.");

    const data = await response.json();
    alert(data.success ? "Email sent!" : `Failed: ${data.console.error}`);

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
