const express = require('express');
const mongoose = require('mongoose');

// const router = require('./routes') 

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(router);
app.use(require('./routes'));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  
  // Use this to log mongo queries being executed!
  mongoose.set('debug', true)


app.listen(PORT, () => console.log(`🌍 App is connected on localhost:${PORT}`));
