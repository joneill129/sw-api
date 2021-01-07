const baseUrl = 'https://swapi.dev'

export function getAllStarships() {
  return fetch(`${baseUrl}/api/startships`)
  .then(res => res.json())
}