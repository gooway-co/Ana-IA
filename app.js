// app.js (ES Modules)

import dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno desde .env

import express from 'express';
import cors from 'cors';
// Importa el handleChatRequest desde tu controlador, agregando ".js" al final
import { handleChatRequest } from './controllers/chatController.js';

const app = express();

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Middleware para procesar JSON
app.use(express.json());

// Ruta para manejar solicitudes de chat
app.post('/chat', handleChatRequest);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
