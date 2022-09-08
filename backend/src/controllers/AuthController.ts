import { Request, Response } from 'express';
import { loginService, logoutService, forgetPasswordService, resetPasswordService, passwordChangeService } from '../services/AuthService';

/**
 * Login
 * @param req 
 * @param res 
 */
export const login = async (
  req: Request,
  res: Response
) => {
  loginService(req, res);
};

/**
 * Logout
 * @param req 
 * @param res 
 */
export const logout = (req: any, res: Response) => {
  logoutService(req, res);
};

/**
 * Forget Password
 * @param req 
 * @param res 
 */
export const forgotPassword = async (req: any, res: Response) => {
  forgetPasswordService(req, res);
};

/**
 * Reset Password
 * @param req 
 * @param res 
 */
export const resetPassword = async (req: Request, res: Response) => {
  resetPasswordService(req, res);
}

/**
 * Password Change
 * @param req 
 * @param res 
 */
export const passwordChange = async (req: Request, res: Response) => {
  passwordChangeService(req, res);
}