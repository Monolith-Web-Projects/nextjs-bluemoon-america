import type { NextApiRequest, NextApiResponse } from "next";
import config from "@/lib/config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }
  
  try {
    const { subject, message, recipient } = req.body;

    const djangoResponse = await fetch(`${config.apiBaseUrl}/api/send-email/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: req.headers.cookie || "", // Forward cookies like csrf token
      },
      credentials: "include",
      body: JSON.stringify({ subject, message, recipient }),
    });

    const data = await djangoResponse.json();

    return res.status(djangoResponse.status).json(data);
  } catch (error) {
    return res.status(500).json({ success: false, error: (error as Error).message });
  }
}
