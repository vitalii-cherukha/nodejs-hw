import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';

import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import notesRouters from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// підключення до MongoDB
await connectMongoDB();

app.use(logger);
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Notes API is running',
//   });
// });

app.use('/notes', notesRouters);

// Middleware 404 (після всіх маршрутів)
app.use(notFoundHandler);

// Middleware для обробки помилок (останнє)
app.use(errorHandler);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
