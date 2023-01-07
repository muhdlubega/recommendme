import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import APIKey from "../APIKey";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./styles.css";

function Genres(){
    const navigate = useNavigate();
    const {id} = useParams();

    const [GenreShows, setGenreShows] = useState([]);
    const getGshows = (i) => {APIKey.getDiscoverGenres(i).then(output => {setGenreShows(output?.data?.results)})}
    const [GenreShows2, setGenreShows2] = useState([]);
    const getGshows2 = (i) => {APIKey.getDiscoverGenres2(i).then(output => {setGenreShows2(output?.data?.results)})}
    const [GenreShows3, setGenreShows3] = useState([]);
    const getGshows3 = (i) => {APIKey.getDiscoverGenres3(i).then(output => {setGenreShows3(output?.data?.results)})}
    const [GenreShows4, setGenreShows4] = useState([]);
    const getGshows4 = (i) => {APIKey.getDiscoverGenres4(i).then(output => {setGenreShows4(output?.data?.results)})}
    const [GenreShows5, setGenreShows5] = useState([]);
    const getGshows5 = (i) => {APIKey.getDiscoverGenres5(i).then(output => {setGenreShows5(output?.data?.results)})}

    useEffect(() => {
        getGshows(id);
        getGshows2(id);
        getGshows3(id);
        getGshows4(id);
        getGshows5(id);
    });


    return(
        <div>
            <Header></Header>
            <div className="topic">Top Recommendations for this Genre:</div>
            <div className="showgroup">{GenreShows?.map(i => {return(<img className="showimages" alt="Genre Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{GenreShows2?.map(i => {return(<img className="showimages" alt="Genre Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{GenreShows3?.map(i => {return(<img className="showimages" alt="Genre Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{GenreShows4?.map(i => {return(<img className="showimages" alt="Genre Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{GenreShows5?.map(i => {return(<img className="showimages" alt="Genre Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <Footer></Footer>
        </div>
    )
}

export default Genres;