import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import APIKey from "../../APIKey.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import "../styles.css";

function TopRated4(){
    const [topRatedArr, setTopRatedArr] = useState([]);
    const navigate = useNavigate();

    const getTop = () => {
        APIKey.getTopRated4().then(output => {setTopRatedArr(output?.data?.results)})
    }

    useEffect(() => {
        getTop();
    },[]);

    return(
        <div>
            <Header></Header>
            <div className="topic">Top Rated Shows<span className="pagecount">Page 4 of 10</span></div>
            <div className="showgroup">{topRatedArr?.map(i => {return(<img className="showimages" alt="Top Rated Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div class="pagination">
                <a href="/toprated">&laquo;</a>
                <a href="/toprated">1</a>
                <a href="/toprated2">2</a>
                <a href="/toprated3">3</a>
                <a href="/toprated4">4</a>
                <a href="/toprated5">5</a>
                <a href="/toprated6">6</a>
                <a href="/toprated7">7</a>
                <a href="/toprated8">8</a>
                <a href="/toprated9">9</a>
                <a href="/toprated10">10</a>
                <a href="/toprated10">&raquo;</a>
            </div>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default TopRated4;
