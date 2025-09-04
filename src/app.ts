/*Agora, você pode rodar seu servidor em modo desenvolvimento com:

npm run dev


Ele vai iniciar seu src/app.ts e ficar assistindo mudanças, recarregando automaticamente.

Para compilar o TypeScript, rode:

npm run build


E para rodar o app compilado:

npm start*/
import express, { Request, Response } from 'express';

const app = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Pagina de login');
});

app.get('/login', (req: Request, res: Response) => {
  res.send('Faça seu login');
});


export default app;