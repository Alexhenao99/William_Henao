import { DataTypes } from 'sequelize'
import sequelize from '@/utils/database'

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cover: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

module.exports = Image
