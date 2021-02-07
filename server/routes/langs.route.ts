import express, { Request, Response } from 'express';
import { getAll } from '../database/langs';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  res.send(await getAll());
});

export default router;