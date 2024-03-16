import { NextFunction, Request, Response } from 'express';
import TokenBucket from '../lib/TokenBucket';

const bucket = new TokenBucket(1, 1);

export const RateLimit = (req: Request, res: Response, next: NextFunction) => {
  if (bucket.allowRequest()) {
    next();
  } else {
    res.status(429).send('Rate Limit Exceeded.');
  }
};
