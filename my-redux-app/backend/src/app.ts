import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/redux', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Połączono z bazą danych MongoDB');
  })
  .catch((error) => {
    console.error('Błąd podczas łączenia z bazą danych MongoDB:', error);
  });

app.use(bodyParser.json());
app.use(cors());


const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  eventName: String,
  city: String,
}));

app.post('znowu te linkowanie !!!!!!!', async (req: Request, res: Response) => {
  try {
    const { name, eventName, city } = req.body;
    const newItem = new Item({ name, eventName, city });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Błąd podczas dodawania wydarzenia' });
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
