import { NextFunction, Request, Response } from 'express';
import TokenBucket from '../lib/TokenBucket';

const BUCKET_SIZE = 100;
const REFILL_RATE = 10;
const bucket = new TokenBucket(BUCKET_SIZE, REFILL_RATE);

export const RateLimit = (req: Request, res: Response, next: NextFunction) => {
  if (bucket.allowRequest()) {
    next();
  } else {
    res.status(429).send('Rate Limit Exceeded.');
  }
};
