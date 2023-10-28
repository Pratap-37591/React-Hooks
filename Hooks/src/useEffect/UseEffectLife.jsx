// 12.   useEffect expalin with all life cycle methods with examples

import { useEffect, useState } from "react";

const UseEffectLife = () => {
  //   const [name, setName] = useState("Pratap");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Component is render first time (componetunmount)");
    //  console.log("compoent is updated")
  }, []);
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
};

export default UseEffectLife;
