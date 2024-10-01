import { config } from "https://deno.land/x/dotenv/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import nodemailer from "https://cdn.skypack.dev/nodemailer";

const env = config();

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "POST") {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: env.EMAIL_USER,
      to: 'recipient@example.com',
      subject: 'New message from contact form',
      text: body.message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response("Email sent!", { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("Error sending email", { status: 500 });
    }
  }

  return new Response("Not Found", { status: 404 });
};

serve(handler);
