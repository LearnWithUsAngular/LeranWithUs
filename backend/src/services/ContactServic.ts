import { Response, NextFunction } from 'express'
import { createTransport } from "nodemailer";

export const ContactMailService = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
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
      from: req.body.email,
      to: process.env.USER,
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
    });
    res.status(201).json({ message: "Mail Sent Successfully" })
  } catch (err) {
    console.log(err)
    next(err)
  }
};