const fetchProjectsById = (id) => {
  return fetch(`/api/skills/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export default fetchProjectsById
