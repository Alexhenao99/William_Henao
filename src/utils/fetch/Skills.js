const getSkills = () => {
  // return fetch('/api/skills', {
  return fetch('https://williamhenao-production.up.railway.app/api/skills', {

    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export { getSkills }
