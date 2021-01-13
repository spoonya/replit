import express from 'express';
import path from 'path';

const staticPath = path.join(__dirname, '../../client/build');

const app = express();

app.use('/', express.static(staticPath));
console.log(staticPath);

app.listen(8080);
console.log(1);