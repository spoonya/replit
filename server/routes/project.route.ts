import express, { Request, Response } from 'express';
import Project from '../database/project';
import { CustomRequest } from './interfaces';

interface NewProjectModel {
  lang: string,
  title: string,
}

const router = express.Router();

router.post('/create', async (req: CustomRequest<NewProjectModel>, res: Response) => {
  const query = req.query;

  const link = await Project.create(req.body.lang, req.body.title);

  const response = {
    status: 'ok',
    link: `/project/${link}`,
  }

  res.send(response);
});

router.post('*', async (req: Request, res: Response) => {
  const link = req.path.slice(1);
  res.send(await Project.get(link));
});

export default router;