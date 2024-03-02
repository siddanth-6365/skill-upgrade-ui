import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      // Your email configuration here
    });

    try {
      // Sending email
      await transporter.sendMail({
        from: 'your-email@example.com',
        to: 'your-destination-email@example.com',
        subject: subject,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
