import express, { Request, Response } from 'express';
import Config from '../config/config';
import Project from '../database/project';

const router = express.Router();

router.get('/create', async (req: Request, res: Response) => {
  const query = req.query;

  const link = await Project.create(query.lang, query.title);

  const response = {
    status: 'ok',
    link: `${Config.hostname}/project/${link}`,
  }

  res.send(response);
});

router.get('*', async (req: Request, res: Response) => {
  const link = req.path.slice(1);
  res.send(await Project.get(link));
});

export default router;