import { useState, useEffect } from "react";
import { getStories } from "../utils/Api";

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      //  isLoading state to false inside the catch block so if there is an error, the loader will be hidden.
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, stories };
};

export default useDataFetcher;
