import express from 'express';
import router  from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';
import mongoose from 'mongoose';
const app = express();

app.use(cors());
app.use('/',router);

const PORT = 3000;

DBconnection();

app.listen(PORT,() =>
    console.log('Server is running on port 3000'));
