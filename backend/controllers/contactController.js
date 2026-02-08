import Enquiry from "../models/Enquiry.js";
import { Resend } from "resend";

// ✅ Initialize Resend ONCE
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Debug check (REMOVE later)
console.log("RESEND KEY:", process.env.RESEND_API_KEY);

export const submitEnquiry = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // 1️⃣ Validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2️⃣ Save to MongoDB
    await Enquiry.create({
      name,
      email,
      service,
      message,
    });

    // 3️⃣ Email to COMPANY
    await resend.emails.send({
      from: "YP Yachting <onboarding@resend.dev>",
      to: [process.env.COMPANY_EMAIL],
      subject: `New Enquiry: ${service}`,
      html: `
        <h2>New Service Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 4️⃣ Auto-reply to CLIENT
    await resend.emails.send({
      from: "YP Yachting <onboarding@resend.dev>",
      to: [email],
      subject: "We received your enquiry",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>YP Yachting</strong>.</p>
        <p>Our team will get back to you shortly regarding <strong>${service}</strong>.</p>
        <br/>
        <p>Best regards,<br/>YP Yachting Team</p>
      `,
    });

    // 5️⃣ Success response
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });

  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
