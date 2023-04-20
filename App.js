import React, { useState, useEffect} from "react";
import "./styles.css";
import Quote from "./Quote";
import Header from "./Header";
import Footer from "./Footer";

const App=()=>{

  const [quote,setQuote]= useState("");
  const [favQuo,setFavQuotes]=useState([]);

  const getQuote=()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=> res.json())
    .then((data)=> {
      let randomNum= Math.floor(Math.random()*data.length);
      setQuote(data[randomNum]);
    });
  };
  const addToFavorites = () => {
    //the function checks if the quote is not already included in the list
    //If the if condition satisifes, it updates the state by spreading favQuo array and adding the current quote to end
    if (!favQuo.includes(quote)) {
      setFavQuotes([...favQuo, quote]);
    }
  };

  useEffect(()=>{
    getQuote();
  },[]);
  const clearFavorites = () =>{
    setFavQuotes([]);
  };

  return (
    <div>
      <Header></Header>
      <Quote quote={quote} onNewQuote={getQuote} onAddToFavorites={addToFavorites}
        favQuotes={favQuo} setFavQuotes={setFavQuotes} onClearFavorites={clearFavorites} />
        <Footer></Footer>
    </div>
  );
}


export default App;

