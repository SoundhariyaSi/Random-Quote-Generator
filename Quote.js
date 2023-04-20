import React, {useState, useEffect}from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Quote({ quote, onNewQuote,onAddToFavorites, favQuotes, setFavQuotes, onClearFavorites }) {
    const [buttonText, setButtonText] = useState('Copy');
  
    const handleCopy = () => {
      setButtonText('Copied!');
    };
  
    useEffect(() => {
      setButtonText('Copy');
    }, [quote]);
  
    const getQuote = () => {
      setButtonText('Copy');
      onNewQuote();
    };
    
    const addToFavorites = () => {
        onAddToFavorites(quote);
      };
    const clearFavorites=()=>{
      onClearFavorites();
    }
  
    return (
        <div id="parentContainer">
        <div id="child1">
           <p>{quote.text}</p> 
           <p>Author: {quote.author}</p> 
       <div className="btnContainer">
        <button className="btn" onClick={getQuote}>Get quote</button>
        <CopyToClipboard text={quote.text} onCopy={handleCopy}>
          <button className="btn">{buttonText}</button>
        </CopyToClipboard>
        <button className="btn" onClick={addToFavorites}>Add to Favorites</button>
        
      </div>
      </div>
      <div id="child2">
          <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ marginRight: "40px" }}>Favorite Quotes</h2>
          <button className="clear-btn" onClick={clearFavorites}>Clear</button>
          </div>
          <ul>
            {favQuotes.map((quote) => (
              <li key={quote.text}>
                <p>{quote.text}</p>
                <p>Author: {quote.author}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
    )
 }
 export default Quote;