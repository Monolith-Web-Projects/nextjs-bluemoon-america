import type { NextApiRequest, NextApiResponse } from "next";
import config from "@/lib/config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const djangoResponse = await fetch(`${config.apiBaseUrl}/api/get-token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Pass Django's cookies to Next.js response
    const setCookieHeader = djangoResponse.headers.get("set-cookie");
    if (setCookieHeader) {
      res.setHeader("Set-Cookie", setCookieHeader);
    }

    const data = await djangoResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Token proxy error:", error);
    return res.status(500).json({ error: "Failed to get CSRF token" });
  }
}
