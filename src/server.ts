import express from 'express';
import { usuarioRoutes } from './routes/usuario.routes';

const app = express();

app.use(express.json());

app.use('/usuario', usuarioRoutes);

app.listen(3333, () => console.log('Server is running!'));
