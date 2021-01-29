import express, { Request, Response } from 'express';
import { setup } from '../database/setup';

const router = express.Router();

router.use('/', async (req: Request, res: Response) => {
  const result = await setup();
  res.send(JSON.stringify({ status: 'ok' }));
});

export default router;