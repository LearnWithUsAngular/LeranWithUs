import { createTransport } from "nodemailer";

/**
 * Send Email
 * @param email 
 * @param subject 
 * @param text 
 */
const sendEmail = async (email: any, subject: any, text: any) => {
  try {
    const transporter = createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
  } catch (error) {
  }
};

module.exports = sendEmail;