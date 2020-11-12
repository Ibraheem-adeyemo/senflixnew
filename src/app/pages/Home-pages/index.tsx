import React from 'react';
import Row from '../../components/Row.component';
import request from '../../request';
import Banner from '../../components/Banner';
import { NavBar } from '../../components/NavBar';

const  index: React.FunctionComponent = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
            <Row  title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row  title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchNetflixOriginals} />
            <Row  title="Comedy Movies" fetchUrl={request.fetchTopRated} />
            <Row  title="Horror Movies" fetchUrl={request.fetchNetflixOriginals} />
            <Row title="Romance Movies" fetchUrl={request.fetchTopRated} />
            <Row  title="Documentries" fetchUrl={request.fetchTrending} />
        </div>
    )
}

export default index
