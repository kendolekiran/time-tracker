const express = require('express');
const app = express();
const router = new express.Router([]);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('db.json');
const db = low(adapter);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);

router.get('/time-tracker', (req, res) => res.json({message: 'Hello World!'}));

// TODO: create endpoints and use db object

app.listen(3000, () => console.log('Example app listening on port 3000!'));
