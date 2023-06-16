import { Projects, Image, Skills } from '../models/relations'

const createProjects = async ({ title, description, repo, web, status, images, skills }) => {
  try {
    // Crea el proyecto
    const project = await Projects.create({ title, description, repo, web, status })
    const id = project.id

    // Crea la imagen y la asocia al proyecto
    for (const image of images) {
      await Image.create({ link: image, projectId: id })
    }

    // Asocia las skills con el proyecto
    await project.addSkills(skills)

    return 'Proyecto Creado Exitosamente!'
  } catch (error) {
    console.error({ error: error.message, place: 'createProjects' })
    return error
  }
}

const getProjects = async () => {
  try {
    const projectInfo = await Projects.findAll({
      include: [
        {
          model: Image
        },
        {
          model: Skills
        }
      ]
    })

    return projectInfo
  } catch (error) {
    console.error({ error: error.message, place: 'getProjects' })
    return error
  }
}

const getProjectsById = async (id) => {
  try {
    const project = await Projects.findByPk(id, {
      include: [
        {
          model: Image
        },
        {
          model: Skills
        }
      ]
    })
    if (!project) throw Error(`La project con id: ${id} no existe`)

    return project
  } catch (error) {
    console.error({ error: error.message, place: 'getProjects' })
    return error
  }
}

const updateProjects = async (id, { title, description, repo, web, status, images, skills }) => {
  try {
    const project = await Projects.findByPk(id, { include: Skills })
    if (!project) throw Error(`El proyecto con id: ${id} no existe`)

    // Si se actualizan las imágenes...
    if (images && images.length > 0) {
      // ! Elimina todas las imágenes asociadas al proyecto
      await Image.destroy({
        where: {
          projectId: id
        }
      })

      // * Guarda las nuevas imágenes y las asocia al proyecto
      for (const image of images) {
        await Image.create({ link: image, projectId: id })
      }
    }

    // * Actualiza el proyecto
    await project.update(
      { title, description, repo, web, status },
      {
        where: { id }
      }
    )

    // * Actualiza las Skills y guarda los cambios
    await project.setSkills(skills)
    await project.save()

    return 'La oferta se ha actualizada'
  } catch (error) {
    console.error({ error: error.message, place: 'updateProjects' })
    return error
  }
}

const deleteProjects = async (id) => {
  try {
    const project = await Projects.findByPk(id)

    if (!project) throw Error(`El Proyecto con id: ${id} no existe`)

    // ! Elimina las imágenes
    await Image.destroy({
      where: {
        projectId: id
      }
    })

    // ! Elimina las Skills
    await project.setSkills([])
    await project.save()

    // ! Elimina el proyecto
    await project.destroy()

    return 'El proyecto fue eliminado'
  } catch (error) {
    console.error({ error: error.message, place: 'deleteProjects' })
    return error
  }
}

export { createProjects, getProjects, getProjectsById, updateProjects, deleteProjects }
