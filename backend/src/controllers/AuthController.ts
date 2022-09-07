import { Request, Response } from 'express';
import { loginService, logoutService } from '../services/AuthService';

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