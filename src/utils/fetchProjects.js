const fetchProjects = () => {
  return fetch('/api/projects', {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export default fetchProjects
