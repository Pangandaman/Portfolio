import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = getResend();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "pangandamanamr@gmail.com",
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
