import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, designation, company, email, country, phone, message } = body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: 'zfie hmte iyxt wyto', // Your email password or app password
      },
    });

    // Email content.
    const mailOptions = {
        from: "Tascon<chvamshi03@gmail.com>",
        // to: "info@tasconmedia.com, tarannum.s@tasconmedia.com",
        to: "avalasandeep02@gmail.com",
        subject: "New Enquiry from TASCON Contact Form",
        html: `
          <h1>New Enquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Designation:</strong> ${designation}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Booking submitted successfully and email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Failed to submit booking or send email." }, { status: 500 });
  }
}