const getProjects = () => {
  return fetch('/api/projects', {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

const getProjectsById = (id) => {
  console.log(id)
  return fetch(`/api/projects/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export {
  getProjects,
  getProjectsById
}
