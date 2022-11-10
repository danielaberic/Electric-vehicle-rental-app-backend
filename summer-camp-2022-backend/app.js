import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import router from './routes/index.js';

const app = express();

app.use(cors());
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.PORT || 5391;

const server = app.listen(PORT, () => {
  console.log('server is running on port', server.address().port);
});
