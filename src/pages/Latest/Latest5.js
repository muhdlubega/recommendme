import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import APIKey from "../../APIKey.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import "../styles.css";

function Latest5(){
    const [LatestArr, setLatestArr] = useState([]);
    const navigate = useNavigate();

    const getLat = () => {
        APIKey.getLatest5().then(output => {setLatestArr(output?.data?.results)})
    }

    useEffect(() => {
        getLat();
    },[]);

    return(
        <div>
            <Header></Header>
            <div className="topic">Latest Shows<span className="pagecount">Page 5 of 10</span></div>
            <div className="showgroup">{LatestArr?.map(i => {return(<img className="showimages" alt="Latest Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div class="pagination">
                <a href="/latest">&laquo;</a>
                <a href="/latest">1</a>
                <a href="/latest2">2</a>
                <a href="/latest3">3</a>
                <a href="/latest4">4</a>
                <a href="/latest5">5</a>
                <a href="/latest6">6</a>
                <a href="/latest7">7</a>
                <a href="/latest8">8</a>
                <a href="/latest9">9</a>
                <a href="/latest10">10</a>
                <a href="/latest10">&raquo;</a>
            </div>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default Latest5;
