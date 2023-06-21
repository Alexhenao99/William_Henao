const fetchSkills = () => {
  return fetch('/api/skills', {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export default fetchSkills
