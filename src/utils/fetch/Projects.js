const getProjects = () => {
  return fetch('/api/projects', {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

const getProjectsById = (id) => {
  return fetch(`/api/skills/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export {
  getProjects,
  getProjectsById
}
