import React, { useState } from "react";
import { useEffect } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { useShows } from "../misc/custom-hhoks";
import { apiget } from "../misc/config";
import ShowGrid from "../components/show/ShowGrid";

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiget(`/shows/${showId}`));
      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [setShows.setIsLoading, setError, starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>Show are still loading</div>}
      {error && <div>Error occurder: {error}</div>}
      {!isLoading && !shows && <div>No show were added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
