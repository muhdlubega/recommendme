import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import APIKey from "../APIKey";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./styles.css";

function HomePage(){
    const [LatestArr, setLatestArr] = useState([]);
    const [PopularArr, setPopularArr] = useState([]);
    const [topRatedArr, setTopRatedArr] = useState([]);
    const navigate = useNavigate();

    const getLat = () => {
        APIKey.getLatest().then(output => {setLatestArr(output?.data?.results)})
    }

    const getPop = () => {
        APIKey.getPopular().then(output => {setPopularArr(output?.data?.results)})
    }

    const getTop = () => {
        APIKey.getTopRated().then(output => {setTopRatedArr(output?.data?.results)})
    }

    useEffect(() => {
        getLat();
        getPop();
        getTop();
    },[]);

    return(
        <div>
            <Header></Header>
            <div class="btn-group" className="homegroup">
            <button className="homebutton" onClick={()=>{navigate("/recommendtitle")}}><span class="text">Search by Title</span></button>
            <button className="homebutton" onClick={()=>{navigate("/recommendsimilar")}}><span class="text">Recommend Similar Shows</span></button>
            <button className="homebutton" onClick={()=>{navigate("/recommendgenre")}}><span class="text">Recommend by Genre</span></button>
            <button className="homebutton" onClick={()=>{navigate("/imfeelinglucky")}}><span class="text">I'm Feeling Lucky!</span></button>
            </div>
            <div className="topic">Top Rated Shows</div>
            <div className="showgroup">{topRatedArr?.map(i => {return(<img className="showimages" alt="Top Rated Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <span><a className="seemore footerlink" href="/toprated">See more >></a></span>
            <div className="topic">Popular Shows</div>
            <div className="showgroup">{PopularArr?.map(i => {return(<img className="showimages" alt="Popular Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <span><a className="seemore footerlink" href="/popular">See more >></a></span>
            <div className="topic">Latest Shows</div>
            <div className="showgroup">{LatestArr?.map(i => {return(<img className="showimages" alt="Latest Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <span><a className="seemore footerlink" href="/latest">See more >></a></span>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;
