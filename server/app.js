const express = require('express');
const app = express();
const router = new express.Router([]);

app.use('/api', router);

router.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
