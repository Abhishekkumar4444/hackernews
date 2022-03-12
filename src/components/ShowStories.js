import React from "react";
import Story from "./Story";
import { useParams } from "react-router-dom";

import useDataFetcher from "../hooks/DataFetcher";
const ShowStories = (props) => {
  const { type } = useParams();
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;
