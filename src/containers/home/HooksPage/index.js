import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function HooksPage() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    // Tuong tu didmount ben class, tham so thu la []
    console.log("useEffect - didmount");
  }, []);

  useEffect(() => {
    // Tuong tu didupdate ben class, tham so thu la khác rỗng
    console.log("useEffect - didupdate");
  }, [number]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    // Tuong tu willUnMount ben class
    return () => {
      clearInterval(interval);
      console.log("useEffect - unmount");
    };
  }, []);

  const showNumber = () => {
    console.log("showNumber");
  };

  const showNumberCallBack = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const numberUpUsememo = useMemo(() => numberUp(), []);

  return (
    <div>
      <h3>HooksPage</h3>
      <h1>Number: {number}</h1>
      <h1>NumberUp: {numberUpUsememo}</h1>
      <button className="btn btn-success" onClick={handleClick}>
        Click
      </button>
      <Child showNumber={showNumberCallBack} />
    </div>
  );
}
