import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import './database/database';
import Routes from './routes/routes';

const staticPath = path.join(__dirname, '../../client/build');
console.log(staticPath);
const app = express();
const routes = new Routes();

app.use(bodyParser.urlencoded({ extended: true }));

routes.route(app);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use('/', express.static(staticPath));
app.use('/project', express.static(staticPath));
app.use('/project/*', express.static(staticPath));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

app.listen(8081);