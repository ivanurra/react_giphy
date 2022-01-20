import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["item1", "item2", "item3"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "item4"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
