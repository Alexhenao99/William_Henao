import { Sequelize } from 'sequelize'
import User from '../app/models/User'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Solo si estás usando un certificado autofirmado
    }
  }
})

// Asociar los modelos con la instancia de Sequelize
User.initialize(sequelize)

// Sincronizar modelos con la base de datos
await sequelize.sync()

export default sequelize
