import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  // Handles the API response when data is received
  function handleDictionaryResponse(response) {
    setResults(response.data[0]); // save the response data to state
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos)
  }

  // Called when the user submits the form (presses Enter)
  function search(event) {
    event.preventDefault(); // stop page from reloading

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    // Pexels call function
    let pexelsApiKey = "f093ocaff400a6043tff45112437b840";

    let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;

    axios.get(pexelsApiUrl).then(handlePexelsResponse);

    //  Clear the input field after submitting
    setKeyword("");
  }

  //  Updates the keyword state every time the user types in the input
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  // Render the dictionary search form and the results
  return (
    <div className="Dictionary">
      <section>
        <h1>What are you looking for?</h1>
        <form onSubmit={search}>
          {/* Input field where user types a word */}
          <input
            type="search"
            value={keyword} // make it controlled
            onChange={handleKeywordChange}
            placeholder="Enter a word..."
            autoFocus
          />
        </form>
      </section>

      {/* Results component will display the API results */}
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
