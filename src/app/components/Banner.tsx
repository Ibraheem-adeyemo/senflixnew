import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../request';

const base_url = 'https://image.tmdb.org/t/p/original/';

type moviesResponse = {
    backdrop_path: string,
    original_name: string,
    title: string,
    name: string,
    overview: string
}
const Banner: React.FunctionComponent = () => {
    const [movie, setMovie] = useState<moviesResponse>();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request
        }

        fetchData()
    }, [])

    function truncate(str: string, num: number) {
        return str?.length > num ? str.substr(0, num-1) + " . . .": str
    }
    return (
        <header style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        }} className="banner">
            <div
             className="banner_content">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="btn-div">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner-description">
                    {movie && truncate(movie?.overview, 120)}
                </h1>
            </div>
            <div className="banner-fade-bottom" />
        </header>
    )
}

export default Banner
