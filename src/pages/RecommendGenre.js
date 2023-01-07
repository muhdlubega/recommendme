import {useNavigate} from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import React, {useState, useEffect} from "react";
import APIKey from "../APIKey";
import "./styles.css";

function RecommendGenre(){
    const [GenresArr, setGenresArr] = useState([]);
    const navigate = useNavigate();

    const getGen = () => {
        APIKey.getGenres().then(output => {setGenresArr(output?.data?.genres)})
    }

    useEffect(() => {
        getGen();
    },[]);

    console.log("genres", GenresArr)

    const First4 = GenresArr.slice(0, 4);
    const Second4 = GenresArr.slice(4, 8);
    const Third4 = GenresArr.slice(8, 12);
    const Fourth4 = GenresArr.slice(12, 16);
    const Last3 = GenresArr.slice(16, 20);

    return(
        <div>
            <Header></Header>
            <div className="topic">Recommend Shows for this Genre:</div>
            <div className="genregroup">{First4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/genres/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Second4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/genres/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Third4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/genres/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Fourth4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/genres/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Last3?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/genres/${i?.id}`)}}>{i?.name}</button>)})}</div>

            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default RecommendGenre;