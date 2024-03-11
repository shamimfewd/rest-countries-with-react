import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount)
  };
  return (
    <>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default Counter;
