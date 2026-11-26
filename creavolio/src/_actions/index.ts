"use server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  senderEmail: z.string().trim().max(254).email(),
  message: z.string().trim().min(12).max(5000),
  subject: z.string().trim().min(8).max(160).refine(
    (value) => !/[\r\n]/.test(value),
    "Invalid subject"
  ),
});

export const sendEmail = async (
  senderEmail: string,
  message: string,
  subject: string
) => {
  const parsed = contactSchema.safeParse({ senderEmail, message, subject });
  if (!parsed.success) {
    return { error: true, message: "Please check your email, subject and message." };
  }

  const user = process.env.APP_EMAIL;
  const pass = process.env.APP_PASSWORD;
  if (!user || !pass) {
    return { error: true, message: "The contact form is temporarily unavailable." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    await transporter.sendMail({
      from: { name: "Portfolio website", address: user },
      to: user,
      subject: parsed.data.subject,
      text: `Email: ${parsed.data.senderEmail}\nMessage: ${parsed.data.message}`,
      replyTo: parsed.data.senderEmail,
    });
    return { error: false, message: "Your message was sent successfully!" };
  } catch {
    return { error: true, message: "Unable to send your message. Please try again later." };
  }
};
