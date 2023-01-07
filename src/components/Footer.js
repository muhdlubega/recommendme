import React from "react";
import "../pages/styles.css";


function Footer(){

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="footer">
                <br></br>
                <span>This is a project by Muhammad Lubega for CS50. Thanks for checking out my website!</span>
                <br></br>
                <span>All rights reserved to </span>
                <a className="footerlink" href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noreferrer"><nobr>The Movie Database (TMDB) API</nobr></a>
                <span> | </span>
                <a className="footerlink" href="https://www.themoviedb.org/documentation/api/terms-of-use" target="_blank" rel="noreferrer"><nobr>API Terms of Use</nobr></a>
                <span> | </span>
                <a className="footerlink" href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noreferrer"><nobr>Privacy Policy</nobr></a>
            </div>
        </div>
    )
}

export default Footer;