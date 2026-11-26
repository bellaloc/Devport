"use server";
import nodemailer from "nodemailer";
import { z } from "zod";
const schema = z.object({
  senderEmail: z.string().trim().email().max(254),
  subject: z.string().trim().min(8).max(160).regex(/^[^\r\n]+$/),
  message: z.string().trim().min(12).max(5000),
});
export async function sendEmail(senderEmail: string, message: string, subject: string) {
  const input = schema.safeParse({ senderEmail, message, subject });
  if (!input.success) return { error: true, message: "Please enter a valid email, subject and message." };
  const user = process.env.APP_EMAIL, pass = process.env.APP_PASSWORD;
  if (!user || !pass) return { error: true, message: "Contact form is unavailable. Please email me directly." };
  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass }, connectionTimeout: 10000, socketTimeout: 15000 });
    await transporter.sendMail({ from: user, to: user, replyTo: input.data.senderEmail, subject: input.data.subject, text: "Email: " + input.data.senderEmail + "\n\n" + input.data.message });
    return { error: false, message: "Your message was sent successfully." };
  } catch {
    return { error: true, message: "Unable to send. Please email me directly." };
  }
}
