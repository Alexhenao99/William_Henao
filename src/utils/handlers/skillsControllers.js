import { Skills } from '../models/relations'

const createSkills = async ({ name, image, link, group }) => {
  try {
    const res = await Skills.create({ name, image, link, group })
    return res
  } catch (error) {
    console.error({ error: error.message, place: 'createSkills' })
    return error
  }
}

const getSkills = async () => {
  try {
    return await Skills.findAll()
  } catch (error) {
    console.error({ error: error.message, place: 'getSkills' })
    return error
  }
}

const getSkillsById = async (id) => {
  try {
    const skill = Skills.findByPk(id)
    if (!skill) throw Error(`La skill con id: ${id} no existe`)

    return skill
  } catch (error) {
    console.error({ error: error.message, place: 'getSkills' })
    return error
  }
}

const updateSkills = async (id, { name, image, link, group }) => {
  try {
    const skill = await Skills.findByPk(id)
    if (!skill) throw Error(`La skill con id: ${id} no existe`)

    await skill.update(
      { name, image, link, group },
      {
        where: { id }
      }
    )

    return 'La oferta se ha actualizada'
  } catch (error) {
    console.error({ error: error.message, place: 'updateSkills' })
    return error
  }
}

const deleteSkills = async (id) => {
  try {
    const skill = await Skills.findByPk(id)

    if (!skill) throw Error(`La skill con id: ${id} no existe`)

    await skill.destroy()

    return 'La Skill fue eliminada'
  } catch (error) {
    console.error({ error: error.message, place: 'deleteSkills' })
    return error
  }
}

export { getSkills, createSkills, getSkillsById, updateSkills, deleteSkills }
