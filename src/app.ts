import express from 'express';
import config from './config';

const app = express();
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(config.port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${config.port}`);
});
