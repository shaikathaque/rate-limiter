import { Request, Response } from 'express';

import express from 'express';
import dotenv from 'dotenv';

import { RateLimit } from './middleware/RateLimit';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get('/', RateLimit, (request: Request, response: Response) => {
  response.status(200).send('Hello World');
});

app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
});
