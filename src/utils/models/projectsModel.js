import { DataTypes } from 'sequelize'
import sequelize from '@/utils/database'

const Projects = sequelize.define('Projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  repo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  web: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

module.exports = Projects
