const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const Joi = require("joi");

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// Conexión con la base de datos local
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reservas_db"
});

// Definir esquema de validación con Joi
const reservaSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    fecha: Joi.string().isoDate().required(),
    celular: Joi.string().pattern(/^[0-9]{10}$/).required(), // Ejemplo para celulares de 10 dígitos
    personas: Joi.number().integer().min(1).required()
});

// Creación del método POST
app.post("/create", (req, res) => {
    const { error, value } = reservaSchema.validate(req.body);
    
    // Si la validación falla, devolver un error al cliente
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }

    // Convertir la fecha a formato YYYY-MM-DD
    const { nombre, fecha, celular, personas } = value;
    const fechaFormatted = new Date(fecha).toISOString().slice(0, 10);  // Extraer solo la parte YYYY-MM-DD

    db.query(
        'INSERT INTO reservas(nombre, fecha, celular, personas) VALUES(?, ?, ?, ?)', 
        [nombre, fechaFormatted, celular, personas],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ error: "Error al crear la reserva" });
            } else {
                res.status(200).send({ message: "Reserva creada con éxito" });
            }
        }
    );
});


app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001.");
});
