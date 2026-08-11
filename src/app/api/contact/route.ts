import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailBody = `
New Contact Form Submission from ZZB Construction Website
=========================================================

Name:     ${name}
Phone:    ${phone || 'Not provided'}
Email:    ${email}
Service:  ${service || 'Not specified'}

Message:
${message}

---------------------------------------------------------
Sent from ZZB Construction website contact form.
    `.trim();

    console.log('=== New Contact Form Submission ===');
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Email: ${email}`);
    console.log(`Service: ${service || 'N/A'}`);
    console.log(`Message: ${message}`);
    console.log('==================================');

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you shortly.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
