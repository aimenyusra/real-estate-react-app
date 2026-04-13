import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

connectDB();
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log('Server started on port 3000');
});

export default app;