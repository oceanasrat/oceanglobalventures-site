import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    console.log("New partnership request:", data)

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ EMAIL TO YOU (INTERNAL)
    await transporter.sendMail({
      from: `"Ocean Global Ventures" <procurement@oceanglobalventuresllc.com>`,
      to: "procurement@oceanglobalventuresllc.com",
      replyTo: data.email,
      subject: "New Brand Partnership Request",
      html: `
        <div style="font-family: Arial; padding:20px; background:#0a0a0a; color:white;">
          <h2 style="color:#facc15;">Ocean Global Ventures</h2>
          <h3>New Brand Partnership Inquiry</h3>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Website:</strong> ${data.website}</p>
          <p><strong>Email:</strong> ${data.email}</p>

          <hr style="margin:20px 0; border-color:#333;" />

          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `,
    })

    // ✅ AUTO-REPLY TO BRAND
    await transporter.sendMail({
      from: `"Ocean Global Ventures" <procurement@oceanglobalventuresllc.com>`,
      to: data.email,
      subject: "Partnership Inquiry Received – Ocean Global Ventures",
      html: `
        <div style="font-family: Arial; padding:30px; background:#0a0a0a; color:white;">

          <h2 style="color:#facc15;">Ocean Global Ventures LLC</h2>

          <p>Dear ${data.name || "Partner"},</p>

          <p>
            Thank you for reaching out to Ocean Global Ventures regarding a potential
            retail partnership.
          </p>

          <p>
            Our procurement team has received your inquiry and will review your
            submission carefully to ensure alignment with our wholesale and
            marketplace strategy.
          </p>

          <p>
            You can expect a response within <strong>24–48 business hours</strong>.
          </p>

          <hr style="margin:20px 0; border-color:#333;" />

          <p style="font-size:14px; color:#aaa;">
            We look forward to exploring a structured and compliant partnership
            opportunity with your brand.
          </p>

          <p style="margin-top:20px;">
            — Procurement Team<br/>
            Ocean Global Ventures LLC<br/>
            procurement@oceanglobalventuresllc.com
          </p>

        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Inquiry received" },
      { status: 200 }
    )
  } catch (error) {
    console.error("EMAIL ERROR:", error)

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    )
  }
}