const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect('mongodb://127.0.0.1:27017/SulliyApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1', {
    useNewUrlParser: true,
   useUnifiedTopology: true,
  })
}

module.exports = connectDB
