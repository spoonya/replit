import { Application } from 'express';
import LangRoutes from './langs.route';
import ProjectRoutes from './project.route';
import SetupRoutes from './setup.route';

export default class Routes {
  route(app: Application) {
    app.use('/project', ProjectRoutes);
    app.use('/langs', LangRoutes);
    app.use('/setup', SetupRoutes);
  }
}