import { Resend } from "resend";

// Hard safety check so it fails clearly
if (!process.env.RESEND_API_KEY) {
  throw new Error("❌ RESEND_API_KEY is missing from .env");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    return await resend.emails.send({
      from: process.env.EMAIL_FROM || "Yacht Website <onboarding@resend.dev>",
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    throw error;
  }
};

console.log("✅ Resend mailer initialized");

export default sendEmail;
