import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';
const movieTrailer = require( 'movie-trailer')
import './component.scss';

type RowProps = {
    title?: string,
    fetchUrl: string,
    isLargeRow?: boolean
}

type MovieType = { id: string | number | null | undefined; poster_path: any; backdrop_path: any; name: string | undefined; }
const base_url = 'https://image.tmdb.org/t/p/original/';
const Row: React.FunctionComponent<RowProps> = (props: RowProps) => {
  const [movies, setMovies] = useState<any>([]);
  const [ trailerUrl, settrailerUrl] = useState('')

  const { fetchUrl, title, isLargeRow } = props;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    autoPlay: 1
  }

  const handleClick = (movie: any) => {
    if(trailerUrl) {
      settrailerUrl('')
    } else {
      movieTrailer(movie?.title || "").then(
        (url: string) => {
          const urlParam: any = new URLSearchParams(new URL(url).search);

          settrailerUrl(urlParam.get('v'))
        }
      ).catch((error: any) => {
        console.log(error, 'error')
      } )
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie: MovieType ) => (
          <img 
            key={movie?.id} 
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_poster_large"}`} 
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
            alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
