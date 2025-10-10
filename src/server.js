import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

// Маршрут для тестування middleware помилки
app.get('/test-error', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Middleware 404 (після всіх маршрутів)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
