const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/Mallakhamb').on('open',()=>{
    console.log('Mongo DB Connected');
}).on('error',()=>{
    console.log('Connection Error');
});

module.exports = connection;