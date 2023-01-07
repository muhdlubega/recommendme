import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Similar from "./pages/Similar";

import TopRated from "./pages/TopRated/TopRated";
import TopRated2 from "./pages/TopRated/TopRated2";
import TopRated3 from "./pages/TopRated/TopRated3";
import TopRated4 from "./pages/TopRated/TopRated4";
import TopRated5 from "./pages/TopRated/TopRated5";
import TopRated6 from "./pages/TopRated/TopRated6";
import TopRated7 from "./pages/TopRated/TopRated7";
import TopRated8 from "./pages/TopRated/TopRated8";
import TopRated9 from "./pages/TopRated/TopRated9";
import TopRated10 from "./pages/TopRated/TopRated10";

import Popular from "./pages/Popular/Popular";
import Popular2 from "./pages/Popular/Popular2";
import Popular3 from "./pages/Popular/Popular3";
import Popular4 from "./pages/Popular/Popular4";
import Popular5 from "./pages/Popular/Popular5";
import Popular6 from "./pages/Popular/Popular6";
import Popular7 from "./pages/Popular/Popular7";
import Popular8 from "./pages/Popular/Popular8";
import Popular9 from "./pages/Popular/Popular9";
import Popular10 from "./pages/Popular/Popular10";

import Latest from "./pages/Latest/Latest";
import Latest2 from "./pages/Latest/Latest2";
import Latest3 from "./pages/Latest/Latest3";
import Latest4 from "./pages/Latest/Latest4";
import Latest5 from "./pages/Latest/Latest5";
import Latest6 from "./pages/Latest/Latest6";
import Latest7 from "./pages/Latest/Latest7";
import Latest8 from "./pages/Latest/Latest8";
import Latest9 from "./pages/Latest/Latest9";
import Latest10 from "./pages/Latest/Latest10";

import Genres from "./pages/Genres";

import RecommendTitle from "./pages/RecommendTitle";
import RecommendGenre from "./pages/RecommendGenre";
import RecommendSimilar from "./pages/RecommendSimilar";
import ImFeelingLucky from "./pages/ImFeelingLucky";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/details/:id" element={<Details></Details>}></Route>
      <Route path="/similar/:id" element={<Similar></Similar>}></Route>

      <Route path="/toprated" element={<TopRated></TopRated>}></Route>
      <Route path="/toprated2" element={<TopRated2></TopRated2>}></Route>
      <Route path="/toprated3" element={<TopRated3></TopRated3>}></Route>
      <Route path="/toprated4" element={<TopRated4></TopRated4>}></Route>
      <Route path="/toprated5" element={<TopRated5></TopRated5>}></Route>
      <Route path="/toprated6" element={<TopRated6></TopRated6>}></Route>
      <Route path="/toprated7" element={<TopRated7></TopRated7>}></Route>
      <Route path="/toprated8" element={<TopRated8></TopRated8>}></Route>
      <Route path="/toprated9" element={<TopRated9></TopRated9>}></Route>
      <Route path="/toprated10" element={<TopRated10></TopRated10>}></Route>

      <Route path="/popular" element={<Popular></Popular>}></Route>
      <Route path="/popular2" element={<Popular2></Popular2>}></Route>
      <Route path="/popular3" element={<Popular3></Popular3>}></Route>
      <Route path="/popular4" element={<Popular4></Popular4>}></Route>
      <Route path="/popular5" element={<Popular5></Popular5>}></Route>
      <Route path="/popular6" element={<Popular6></Popular6>}></Route>
      <Route path="/popular7" element={<Popular7></Popular7>}></Route>
      <Route path="/popular8" element={<Popular8></Popular8>}></Route>
      <Route path="/popular9" element={<Popular9></Popular9>}></Route>
      <Route path="/popular10" element={<Popular10></Popular10>}></Route>

      <Route path="/latest" element={<Latest></Latest>}></Route>
      <Route path="/latest2" element={<Latest2></Latest2>}></Route>
      <Route path="/latest3" element={<Latest3></Latest3>}></Route>
      <Route path="/latest4" element={<Latest4></Latest4>}></Route>
      <Route path="/latest5" element={<Latest5></Latest5>}></Route>
      <Route path="/latest6" element={<Latest6></Latest6>}></Route>
      <Route path="/latest7" element={<Latest7></Latest7>}></Route>
      <Route path="/latest8" element={<Latest8></Latest8>}></Route>
      <Route path="/latest9" element={<Latest9></Latest9>}></Route>
      <Route path="/latest10" element={<Latest10></Latest10>}></Route>

      <Route path="/genres/:id" element={<Genres></Genres>}></Route>
      <Route path="/recommendtitle" element={<RecommendTitle></RecommendTitle>}></Route>
      <Route path="/recommendgenre" element={<RecommendGenre></RecommendGenre>}></Route>
      <Route path="/recommendsimilar" element={<RecommendSimilar></RecommendSimilar>}></Route>
      <Route path="/imfeelinglucky" element={<ImFeelingLucky></ImFeelingLucky>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
