import { useState, useEffect } from "react";
import logo from "./logo.svg";
import './App.css'
const Access_Key = "paste your api access key here.";

import ImgCard from "./ImgCard";
import Footer from "./footer";


function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    console.log("fetch request");
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log("prevent default worked")
    fetchRequest();
    setImg("");
  };

  return (
<div>
<div className="container">
  <header>
    <h2><a href="#"><i className="ion-plane" /> RoyaltyFreePics</a></h2>
    <nav>
      <ul>
        <li>
          <a href="#" title="Hotels">Unsplash</a>
        </li>
        <li>
          <a href="#" title="Flights">Pexels</a>
        </li>
        <li>
          <a href="#" title="Tours">Burst</a>
        </li>
        <li>
          <a className="btn" href="#" title="Register / Log In">Get Code</a>
        </li>
      </ul>
    </nav>
  </header>
  <div className="cover">
    <h1>Discover what's out there.</h1>
    <form onSubmit={Submit} className="flex-form">
      <label htmlFor="from">
        <i className="ion-location" />
      </label>
      <input type="search" 
       onChange={(e) => setImg(e.target.value)}
      placeholder="What you are looking for ?" />
      <input type="submit" value="Search" />
    </form>




 
  </div>



  <ul className="searchitems cards" id="searchresult">
         {res.map((val) => {
          return <ImgCard props={val} />;
          })} 
    </ul>



 

</div>
<Footer/>
</div>




  );
}

export default App;
