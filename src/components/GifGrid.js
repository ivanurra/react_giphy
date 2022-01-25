import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=Cats&api_key=${process.env.REACT_APP_API_KEY}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map (img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
