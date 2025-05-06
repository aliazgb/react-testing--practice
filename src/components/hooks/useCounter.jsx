import { useState } from "react";

function useCounter({ initialState = 0 } = {}) {
  const [count, setCount] = useState(initialState);
  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);

  return { increament, decreament, count };
}

export default useCounter;
