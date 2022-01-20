import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Search");

  return (
    <>
      <input type="text" value={inputValue} />
    </>
  );
};
