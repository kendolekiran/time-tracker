const express = require('express');
const app = express();
const router = new express.Router([]);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const lodashId = require('lodash-id');

db._.mixin(lodashId);
db.defaults({ trackers: [] }).write();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);

const getTrackers = (req, res) => {
  res.json(db.get('trackers').value());
};

const addTracker = (req, res) => {
  res.json(db.get('trackers').push(req.body).write());
};

router.route('/time-tracker')
  .get(getTrackers.bind(this))
  .post(addTracker.bind(this));

// TODO: create endpoints and use db object

app.listen(3000, () => console.log('Example app listening on port 3000!'));
