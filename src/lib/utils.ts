import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import config from "./config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getCsrfToken() {
  const res = await fetch(`${config.apiBaseUrl}/api/get-token`, {
    credentials: "include",
  });

  // Optional: wait a moment to ensure cookie is set
  await new Promise((resolve) => setTimeout(resolve, 100));

  const data = await res.json();
  return data.csrfToken;  // safer than document.cookie
}


