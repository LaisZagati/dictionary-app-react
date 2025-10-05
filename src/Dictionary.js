import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  // 🔤 State variable to store the user's input keyword
  let [keyword, setKeyword] = useState("");

  // 📘 State variable to store the dictionary API results
  let [results, setResults] = useState(null);

  // 📥 Handles the API response when data is received
  function handleResponse(response) {
    console.log(response.data[0]); // log the first result for debugging
    setResults(response.data[0]); // save the response data to state
  }

  // 🔎 Called when the user submits the form (presses Enter)
  // Prevents default page reload and sends API request
  function search(event) {
    event.preventDefault(); // stop page from reloading
    // alert(`Searching for ${keyword} definition`); // optional feedback to user

    // Build API URL dynamically using the entered keyword
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl); // log for debugging

    // Call the API using axios and handle the response
    axios.get(apiUrl).then(handleResponse);
  }

  // ✏️ Updates the keyword state every time the user types in the input
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  // 🧩 Render the dictionary search form and the results
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        {/* Input field where user types a word */}
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
        />
      </form>

      {/* Results component will display the API results */}
      <Results results={results} />
    </div>
  );
}
