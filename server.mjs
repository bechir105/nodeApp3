import express from 'express';
const app = express();

//const hostname = '127.0.0.1';
const port = process.env.PORT || 9091;

import gamesRoutes from './routes/games.mjs';

app.use(express.json()); 

app.use('/game', gamesRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
