import express from 'express';
<<<<<<< HEAD
=======
import cors from 'cors';
>>>>>>> f91fd2a76b862594acf07bf48e30681ee3cd920e
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

<<<<<<< HEAD
=======

>>>>>>> f91fd2a76b862594acf07bf48e30681ee3cd920e
app.listen(3333);