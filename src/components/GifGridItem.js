import React from "react";

export const GifGridItem = ({ title, url }) => {

  return (
    <div>
      <h3>{title}</h3>
      <img src={url} alt={title} height="300px"/>
    </div>
  );
};
