const mongoose = require('mongoose'); // Exportamos mongoose
const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://localhost:27017/tp1_programacion", {},)
}


module.exports = dbconnect;