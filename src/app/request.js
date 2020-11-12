import {environment} from '../environments/environment';

const tmdbApiKey = environment.tmdbApiKey;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${tmdbApiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${tmdbApiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${tmdbApiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_keys=${tmdbApiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_keys=${tmdbApiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_keys=${tmdbApiKey}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_keys=${tmdbApiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_keys=${tmdbApiKey}&with_genres=99`,
}

export default requests