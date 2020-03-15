import { api } from '../config.js';
import express from 'express';


const PORT = api.port;
const app = express();

app.get('/', (req, res) =>{
    res.json({
        message: 'Hello World'
    })
  });

  app.listen(PORT, () => {
    console.log(`App running ${PORT}`);
})