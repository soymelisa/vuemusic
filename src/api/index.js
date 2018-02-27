import config from './config'

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`
// afd71916e2b34e7b60ccfd4d552b4074 El módulo va a hacer el request

export default function getArtists() {
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
