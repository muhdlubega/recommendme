import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import APIKey from "../../APIKey.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import "../styles.css";

function Popular9(){
    const [PopularArr, setPopularArr] = useState([]);
    const navigate = useNavigate();

    const getPop = () => {
        APIKey.getPopular9().then(output => {setPopularArr(output?.data?.results)})
    }

    useEffect(() => {
        getPop();
    },[]);

    return(
        <div>
            <Header></Header>
            <div className="topic">Popular Shows<span className="pagecount">Page 9 of 10</span></div>
            <div className="showgroup">{PopularArr?.map(i => {return(<img className="showimages" alt="Popular Shows" src={`https://image.tmdb.org/t/p/original${i?.poster_path}`} onClick={()=>{navigate(`/details/${i?.id}`)}}></img>)})}</div>
            <div class="pagination">
                <a href="/popular">&laquo;</a>
                <a href="/popular">1</a>
                <a href="/popular2">2</a>
                <a href="/popular3">3</a>
                <a href="/popular4">4</a>
                <a href="/popular5">5</a>
                <a href="/popular6">6</a>
                <a href="/popular7">7</a>
                <a href="/popular8">8</a>
                <a href="/popular9">9</a>
                <a href="/popular10">10</a>
                <a href="/popular10">&raquo;</a>
            </div>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default Popular9;
