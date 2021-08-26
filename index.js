require('dotenv').config();
const db = require('./src/config/database.config');
const app = require('./src/server')

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

db.connect(()=>{
    console.log("Base de datos conectada correctamente.")
});
