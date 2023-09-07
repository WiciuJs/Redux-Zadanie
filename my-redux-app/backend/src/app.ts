import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import eventRoutes from '../src/routes/eventRoutes'; 

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/redux', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log('Połączono z bazą danych MongoDB');
  })
  .catch((error) => {
    console.error('Błąd podczas łączenia z bazą danych MongoDB:', error);
  });

app.use(bodyParser.json());
app.use(cors());

app.use('/api', eventRoutes); 

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
