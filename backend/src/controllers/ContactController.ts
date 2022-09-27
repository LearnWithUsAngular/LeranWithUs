import { Response, NextFunction } from 'express'
import { ContactMailService } from '../services/ContactServic';

/**
 * Contact Mail Sent
 * @param req 
 * @param res 
 * @param next 
 */
export const contactMail = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  ContactMailService(req, res, next);
};