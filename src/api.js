const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const pathUfBr = 'https://covid19-brazil-api.vercel.app/api/report/v1/'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
    getCountry
}