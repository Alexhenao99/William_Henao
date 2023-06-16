import { Sequelize } from 'sequelize'
import * as pg from 'pg'

const ssl = {
  require: true,
  rejectUnauthorized: false // Solo si estás en desarrollo y no tienes certificado SSL
}

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  dialectModule: pg,
  dialectOptions: {
    ssl
  },
  logging: false // Se habilita para ver las consultas en la consola
})

// Establece la conexión con la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida exitosamente con la db PostgreSQL')
  })
  .catch((err) => {
    console.error('No se pudo establecer la conexión con la base de datos PostgreSQL:', err)
  })

// Sincroniza las tablas, para actualizarlas o crearlas
sequelize
  // .sync({ alter: true }) // ? Modifica o agrega las columnas declaradas si han sido modificadas
  .sync()

module.exports = sequelize
