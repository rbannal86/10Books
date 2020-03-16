import React, { useState } from "react";
import "./Search.css";

const Search = props => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    if (error !== "") setError("");
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let url = `http://localhost:8000/api/books/${search}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          setError(res.error);
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(res => {
        props.handleResults(res, search);
        setSearch("");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmptySubmit = e => {
    e.preventDefault();
    setError("Please Enter A Search Query");
  };

  return (
    <div className="search">
      <form className="search_form">
        {/* <label className="search_label">Book Search</label> */}
        <input
          className="search_input"
          onChange={e => handleChange(e)}
          type="text"
          placeholder="Enter Search Terms..."
          value={search}
          aria-label="book search bar"
        />
        <div className="search_button_bar">
          {search.length === 0 ? (
            <button
              className="search_button"
              type="submit"
              onClick={e => handleEmptySubmit(e)}
            >
              Submit
            </button>
          ) : (
            <button
              className="search_button"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Submit
            </button>
          )}
          <button className="search_button" onClick={e => props.handleReset(e)}>
            Clear Results
          </button>
        </div>
      </form>
      <div className="search_error">{error ? <h4>{error}</h4> : <></>}</div>
    </div>
  );
};

export default Search;
