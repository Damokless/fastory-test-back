export default async function get_all_data(data) {
    if (data) {
        return await Promise.all([
            fetch(`https://swapi.dev/api/people/${data}`).then(resp => resp.json()).then(data => { return data.results }),
            fetch(`https://swapi.dev/api/planets/${data}`).then(resp => resp.json()).then(data => { return data.results }),
            fetch(`https://swapi.dev/api/films/${data}`).then(resp => resp.json()).then(data => { return data.results }),
            fetch(`https://swapi.dev/api/species/${data}`).then(resp => resp.json()).then(data => { return data.results }),
            fetch(`https://swapi.dev/api/vehicles/${data}`).then(resp => resp.json()).then(data => { return data.results }),
            fetch(`https://swapi.dev/api/starships/${data}`).then(resp => resp.json()).then(data => { return data.results }),
        ]).then(data => { return data })
    }
    return await Promise.all([
        fetch("https://swapi.dev/api/people/").then(resp => resp.json()).then(data => { return { data } }),
        fetch("https://swapi.dev/api/planets/").then(resp => resp.json()).then(data => { return { data } }),
        fetch("https://swapi.dev/api/films/").then(resp => resp.json()).then(data => { return { data } }),
        fetch("https://swapi.dev/api/species/").then(resp => resp.json()).then(data => { return { data } }),
        fetch("https://swapi.dev/api/vehicles/").then(resp => resp.json()).then(data => { return { data } }),
        fetch("https://swapi.dev/api/starships/").then(resp => resp.json()).then(data => { return { data } }),
    ]).then(data => { return data })
}
