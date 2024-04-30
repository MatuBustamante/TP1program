const mongoose = require('mongoose'); // Exportamos mongoose nuevamente
const userSchema = new mongoose.Schema( // Se ejecuta Schema de mongoose
    {
        nombre:{
            type: String
        },
        edad: {
            type: Number
        },
        contra: {
            type: String
        },
        email: {
            type: String
        }
    },
); 

const ModelUser = mongoose.model("tp1", userSchema);
module.exports = ModelUser;