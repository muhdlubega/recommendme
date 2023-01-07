import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import APIKey from "../APIKey";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./styles.css";

function Similar(){
    const navigate = useNavigate();
    const {id} = useParams();

    const [SimilarShows, setSimilarShows] = useState([]);
    const getSshows = (i) => {APIKey.getSimilar(i).then(output => {setSimilarShows(output?.data?.results)})}
    const [SimilarShows2, setSimilarShows2] = useState([]);
    const getSshows2 = (i) => {APIKey.getSimilar2(i).then(output => {setSimilarShows2(output?.data?.results)})}
    const [SimilarShows3, setSimilarShows3] = useState([]);
    const getSshows3 = (i) => {APIKey.getSimilar3(i).then(output => {setSimilarShows3(output?.data?.results)})}
    const [SimilarShows4, setSimilarShows4] = useState([]);
    const getSshows4 = (i) => {APIKey.getSimilar4(i).then(output => {setSimilarShows4(output?.data?.results)})}
    const [SimilarShows5, setSimilarShows5] = useState([]);
    const getSshows5 = (i) => {APIKey.getSimilar5(i).then(output => {setSimilarShows5(output?.data?.results)})}

    useEffect(() => {
        getSshows(id);
        getSshows2(id);
        getSshows3(id);
        getSshows4(id);
        getSshows5(id);
    });

    console.log(SimilarShows);

    return(
        <div>
            <Header></Header>
            <br></br>
            <div className="topic">Similar Shows for this Title:</div>
            <div className="showgroup">{SimilarShows?.map(i => {return(<img className="showimages" alt="Similar Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{SimilarShows2?.map(i => {return(<img className="showimages" alt="Similar Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{SimilarShows3?.map(i => {return(<img className="showimages" alt="Similar Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{SimilarShows4?.map(i => {return(<img className="showimages" alt="Similar Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div className="showgroup">{SimilarShows5?.map(i => {return(<img className="showimages" alt="Similar Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default Similar;