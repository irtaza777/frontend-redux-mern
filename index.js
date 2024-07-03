const express = require('express');
const cors = require('cors');
require("./config")// db connection

const app = express();

app.use(cors());
app.use(express.json());



const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.listen(5000);