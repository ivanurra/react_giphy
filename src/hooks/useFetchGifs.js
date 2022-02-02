import { useState } from "react";

export const useFetchGifs = () => {
  const [state, setfirst] = useState({
    data: [],
    loading: true,
  });

  return state;
};
