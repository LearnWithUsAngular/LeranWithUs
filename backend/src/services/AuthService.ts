import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { compareSync, hash } from 'bcrypt';
import User from '../models/User';
import PasswordReset from '../models/PasswordReset';
import { sendEmail } from '../utils/sendEmail';
import { logger } from '../logger/logger';

/**
 * Login Service
 * @param req 
 * @param res 
 */
export const loginService = async (
  req: Request,
  res: Response
) => {
  try {
    const expirationtimeInMs = 600000;
    User.findOne({ email: req.body.email }).then(async (user: any) => {
      if (!user) {
        return res.status(401).send({
          success: false,
          message: 'Could not find user'
        })
      }

      if (!compareSync(req.body.password, user.password)) {
        return res.status(401).send({
          success: false,
          messages: 'Incorrect password'
        });
      }

      const payload = {
        email: await hash(user.email, 12),
        expiration: Date.now() + expirationtimeInMs
      }

      const token = jwt.sign(JSON.stringify(payload), "abcd");

      return res
        .cookie('jwt',
          token, {
          httpOnly: true,
          secure: false
        }
        ).status(200)
        .json({
          success: true,
          message: 'Login Successfully!',
          user: user,
          token: token
        });
    })
  } catch (err) {
    logger.error("User Login Service Error");
    logger.error(err);
  }
}

/**
 * Logout Service
 * @param req 
 * @param res 
 * @returns 
 */
export const logoutService = (req: any, res: Response) => {
  try {
    if (req.cookies['jwt']) {
      res
      .clearCookie('jwt')
      .status(200)
      .json({
        "message": "Logout Successfully"
      })
  } else {
      res.status(401).json({
          error: 'Invalid jwt'
      })
  }
  } catch (err) {
    logger.error("User Logout Service Error");
    logger.error(err);
  }
};

/**
 * Forget Password Service
 * @param req 
 * @param res 
 * @returns 
 */
export const forgetPasswordService = async (req: any, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("Email does not exist");

    let token = await PasswordReset.findOne({ email: req.body.email });
    if (!token) {
      token = await new PasswordReset({
        email: req.body.email,
        token: crypto.randomBytes(16).toString("hex"),
      }).save();
    }
    const link = `${process.env.BASE_URL}/forget-password-update/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);

    res.status(200).json({
      message: "Password reset link sent to your email account."
    });
  } catch (error) {
    logger.error("Forget Password Service Error");
    logger.error(error);
    res.send("An error occured");
  }
};

/**
 * Reset Password Service
 * @param req 
 * @param res 
 * @returns 
 */
export const resetPasswordService = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("User Id does not exist");

    const passwordReset = await PasswordReset.findOne({
      token: req.params.token
    });
    if (!passwordReset) return res.status(400).send("Invalid link or expired");

    user.password = await hash(req.body.password, 12);
    await user.save();
    await passwordReset.delete();

    res.json({
      message: "Password reset sucessfully."
    });
  } catch (error) {
    logger.error("Reset Password Service Error");
    logger.error(error);
    res.send("An error occured");
  }
}

/**
 * Password Change Service
 * @param req 
 * @param res 
 */
export const passwordChangeService = async (req: Request, res: Response) => {
  try {
    await User.findById(req.params.userId)
      .then(async (user: any) => {
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'Could not find user'
          })
        }

        if (!compareSync(req.body.oldPassword, user.password)) {
          return res.send({
            success: false,
            message: 'Incorrect password'
          });
        }

        if (compareSync(req.body.newPassword, user.password)) {
          return res.send({
            success: false,
            message: 'Current Password and New Password are same.'
          });
        }

        user.password = await hash(req.body.newPassword, 12);
        await user.save();
        res.json({ message: "Password Change Successfully!" });
      })
  } catch (error) {
    logger.error("Password Change Service Error");
    logger.error(error);
    res.send("An error occured");
  }
}