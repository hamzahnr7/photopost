import expressAsyncHandler from 'express-async-handler';
import createHttpError from 'http-errors';
import { JwtPayload } from 'jsonwebtoken';
import { db } from '../models';
import { verifyToken } from '../utils/jwt.helper';

export const authMw = expressAsyncHandler(async (req, res, next) => {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token) throw createHttpError(401);

  const payload = verifyToken(token) as JwtPayload;

  const userId = await db.User.findByPk(payload.sub);
  req.user = userId;

  next();
});
