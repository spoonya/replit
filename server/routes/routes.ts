import { Application } from 'express';
import ProjectRoutes from './project.route';

export default class Routes {
  route(app: Application) {
    app.use('/project', ProjectRoutes);
  }
}