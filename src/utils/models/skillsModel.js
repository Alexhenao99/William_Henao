import { DataTypes } from 'sequelize'
import sequelize from '@/utils/database'

const Skills = sequelize.define('Skills', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = Skills
