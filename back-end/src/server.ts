import express from 'express';

const app = express();

app.use(express.json());


app.get('/' , (req, res) => {
    const message = "Server Running"

    return res.json(message);
});

app.listen(3333);