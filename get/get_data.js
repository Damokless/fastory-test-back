export default async function get_all_data() {
    const result = await Promise.all([
        fetch("https://swapi.dev/api/people/").then(resp => resp.json()).then(data => {return {"people" : data}}),
        fetch("https://swapi.dev/api/planets/").then(resp => resp.json()).then(data => {return {"planets" : data}}),
        fetch("https://swapi.dev/api/films/").then(resp => resp.json()).then(data => {return {"films" : data}}),
        fetch("https://swapi.dev/api/species/").then(resp => resp.json()).then(data => {return {"species" : data}}),
        fetch("https://swapi.dev/api/vehicles/").then(resp => resp.json()).then(data => {return {"vehicles" : data}}),
        fetch("https://swapi.dev/api/starships/").then(resp => resp.json()).then(data => {return {"startships" : data}}),
      ]).then(data => {return data})
      return result
}
