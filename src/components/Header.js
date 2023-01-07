import {useNavigate} from "react-router-dom";
import React from "react";
import "../pages/styles.css";


function Header(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="header">
                <h1 className="banner" onClick={()=>{navigate("/")}}>RECOMMEND<span class="color-emphasis-1">.me</span></h1>
                <h1 className="tagline tl1">Welcome to recommend.me, your best choice for your sunday evening bingeing
                needs</h1>
                <h1 className="tagline tl2">Get the best TV show recommendations based on your desired filters or categories</h1>
                <h1 className="tagline tl3">Sit down and enjoy the ride!</h1>
            </div>
            <br></br>
        </div>
    )
}

export default Header;