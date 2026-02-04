import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  locale?: string;
  page?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;

  if (!body.name || !body.phone || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, error: "Missing Telegram env" },
      { status: 500 }
    );
  }

  const text = [
    "New lead",
    `Name: ${body.name}`,
    `Phone: ${body.phone}`,
    `Locale: ${body.locale ?? ""}`,
    `Page: ${body.page ?? ""}`,
    `Message: ${body.message}`
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text })
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, error: "Telegram error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
