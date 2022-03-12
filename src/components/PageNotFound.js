import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <p>
      Page Not Found 404 <Link to="/">Home</Link>
    </p>
  );
};

export default PageNotFound;
