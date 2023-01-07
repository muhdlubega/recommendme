import {useNavigate} from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import React, {useState, useEffect} from "react";
import APIKey from "../APIKey";
import Header from "../components/Header.js";
import "./styles.css";

function RecommendSimilar(){
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");


  const getShowSearch = (i) => {
    APIKey.getSearch(i).then(output => {setItem([output?.data?.results])});
}

useEffect(() => {
  getShowSearch(input);
  console.log("input",input);
},[input]);

const handleOnSearch = (string, results) => {
  console.log(string, results);
  setInput(string);
};

    return(
        <div>
            <Header></Header>
            <div className="topic">Get Similar Shows for this Title:</div>
            <div className="containerrow">
              <div className="searchbar">
                <ReactSearchAutocomplete items={item} onSearch={handleOnSearch} autocomplete="off"autoFocus></ReactSearchAutocomplete>
              </div>
              <div className="results">
                {item[0]?.map((i) => {return (<div style={{cursor:"pointer"}} onClick={()=>{navigate(`/similar/${i?.id}`)}}>{i.name}</div>)})}
              </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}

export default RecommendSimilar;