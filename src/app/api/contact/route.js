import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Contact from "@/models/Contact";
import { Resend } from "resend";

export async function POST(req) {
  console.log("POST API HIT");

  try {
    await connectDB();
    const body = await req.json();

    console.log(body);

    const contact = await Contact.create(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

     await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ssourabh.1712@gmail.com",
      subject: "New Portfolio Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phoneNumber}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      data: contact,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}