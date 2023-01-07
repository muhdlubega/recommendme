import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import APIKey from "../APIKey";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./styles.css";

function Details(){
    const navigate = useNavigate();
    const [ShowDetails, setShowDetails] = useState([]);
    const {id} = useParams();
    const getDetails = (i) => {APIKey.getShowDetails(i).then(output => {setShowDetails(output?.data)})}

    useEffect(() => {
        getDetails(id);
    });

    console.log(ShowDetails);

    let chart = Math.round(10 * (ShowDetails?.vote_average));

    return(
        <div>
            <Header></Header>
            <table>
                <tr>
                    <th>
                        <br></br><br></br>
                        <img class="poster" src={`https://image.tmdb.org/t/p/original${ShowDetails?.poster_path}`} alt={"show poster"}></img>
                        <br></br>
                        <button class="detailsbutton genrebutton" onClick={()=>{navigate("/")}}>Return to Homepage</button>
                    </th>
                    <td>
                        <table>
                            <tr class="showtitle">
                                <th>{ShowDetails?.name}</th>
                            </tr>
                            <tr>
                                <span className="genrelink">| </span>
                                {ShowDetails?.genres?.map((i)=>{return (<span class="genrelink" onClick={()=>{navigate(`/genres/${i?.id}`)}} key={i?.id}>{i?.name}  |  </span>)})}
                            </tr>
                        </table>
                        <table class="content">
                            <br></br>
                            <tr>
                                <th>Score</th>
                                <td><span className="fix">{chart}%  </span><img src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="star" height={25}></img></td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Status</th>
                                <td>{ShowDetails?.status}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Number of Seasons</th>
                                <td>{ShowDetails?.number_of_seasons}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Number of Episodes</th>
                                <td>{ShowDetails?.number_of_episodes}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Synopsis</th>
                                <td>{ShowDetails?.overview}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Created By</th>
                                <span>| </span>
                                {ShowDetails?.created_by?.map((i)=>{return (<span key={i?.id}>{i?.name}  |  </span>)})}
                            </tr>
                            <br></br>
                            <tr>
                                <th>First Air Date</th>
                                <td>{ShowDetails?.first_air_date}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Origin</th>
                                <td>{ShowDetails?.origin_country}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Language</th>
                                <td>{ShowDetails?.original_language}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Where to Watch</th>
                                {ShowDetails?.networks?.map((i)=>{return (<img alt="source" src={`https://image.tmdb.org/t/p/original${i?.logo_path}`} height={30} style={{display: "flex", padding: "5px"}}></img>)})}
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <Footer></Footer>
        </div>
    )
}

export default Details;