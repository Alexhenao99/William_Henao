const getProjects = () => {
  // return fetch('/api/projects', {
  return fetch('/api/projects', {
    method: 'GET',
    mode: 'cors',
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

const getProjectsById = (id) => {
  console.log(id)
  // return fetch(`/api/projects/${id}`, {
  return fetch(`https://williamhenao-production.up.railway.app/api/projects/${id}`, {
    method: 'GET',
    mode: 'cors',
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export {
  getProjects,
  getProjectsById
}
