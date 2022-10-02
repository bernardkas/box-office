import React from "react";
import { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiget } from "../misc/config";

import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";
import { useLastQuery } from "../misc/custom-hhoks";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";
import CustomRadio from "../components/CustomRadio";

const Home = () => {
  const [input, setinput] = useLastQuery();
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
      <SearchInput
        type="text"
        placeholder="Search for somthing"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="show-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actor-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
