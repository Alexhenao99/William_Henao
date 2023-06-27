const getSkills = () => {
  return fetch('/api/skills', {
    method: 'GET',
    mode: 'cors',
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export { getSkills }
