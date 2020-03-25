const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb+srv://diegopaz:SMa1UehBvBSxuZgn@cluster0-bpcsz.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);



app.listen(3333);