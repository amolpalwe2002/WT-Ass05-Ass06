import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import apiRoutes from './routes/router.js';

const app = express();
const port = process.env.PORT;

import './db/conn.js';

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.status(200).send('SERVER IS RUNNING');
});


app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
