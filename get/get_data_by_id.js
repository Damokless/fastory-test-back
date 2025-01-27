import 'dotenv/config'
export default async function get_data_by_id(data) {
    if (data.match(/[a-zA-Z]+/gm)[0] === 'films') {
        const selection_data = await fetch(`https://swapi.dev/api/${data}`).then(resp => resp.json()).then(data => { return data })
        const film_details = await fetch(`https://api.themoviedb.org/3/search/movie?query=${selection_data.title.split(' ').join('+')}`, {
            method: 'GET', headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
            }
        }).then(resp => resp.json()).then(data => { return data })
        selection_data.TMDB = film_details.results[0]
        return selection_data
    }
    return await fetch(`https://swapi.dev/api/${data}`).then(resp => resp.json()).then(data => { return data })
}
