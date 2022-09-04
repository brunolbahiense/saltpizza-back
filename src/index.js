const express = require('express');
const app = express();
const cors = require('cors')

const routes = require('./routes');
app.use(cors())

app.use(express.json({ limit: '10mb'}));
app.use(routes);
app.listen(8000);