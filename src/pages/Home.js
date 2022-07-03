import React from "react";
import { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiget } from "../misc/config";

import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";

const Home = () => {
  const [input, setinput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState("shows");

  const isShowSearch = searchOptions === "shows";

  const onInputChange = (ev) => {
    setinput(ev.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=man

    apiget(`/search/${searchOptions}?q=${input}`).then((results) => {
      setResults(results);
    });
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (ev) => {
    setSearchOptions(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No result</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for somthing"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="show-search">
          Shows
          <input
            id="show-search"
            type="radio"
            name=""
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor-search">
          Actors
          <input
            id="actor-search"
            type="radio"
            name=""
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
