import Skills from './skillsModel'
import Image from './imagesModel'
import Projects from './projectsModel'

// Projects - Images
Projects.hasMany(Image, { foreignKey: 'projectId' })
Image.belongsTo(Projects, { foreignKey: 'projectId' })

// Projects - Skills
Skills.belongsToMany(Projects, { through: 'SkillProject' })
Projects.belongsToMany(Skills, { through: 'SkillProject' })

module.exports = {
  Skills,
  Image,
  Projects
}
