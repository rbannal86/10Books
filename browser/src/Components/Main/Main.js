import React, { useState } from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";

const Main = () => {
  const [results, setResults] = useState([]);
  const [toggleOpen, setToggleOpen] = useState([]);

  const handleResults = (data, query) => {
    if (data.length === 0) data.unshift({ title: "No Results Found" });
    data.unshift(query);
    let newResults = data.concat(results);
    setResults(newResults);
  };

  const handleReset = e => {
    e.preventDefault();
    setResults([]);
  };

  return (
    <div className="main">
      <Search handleResults={handleResults} handleReset={handleReset} />
      <Results
        results={results}
        setToggleOpen={setToggleOpen}
        toggleOpen={toggleOpen}
      />
    </div>
  );
};

export default Main;
