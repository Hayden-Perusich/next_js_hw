import React from "react";
import CountButton from "./CountButton";

const APP = () => {
  const myIteam = "mike";

  return (
    <div>
        <CountButton incrementBy={1} buttonColor={"red"}/>
        <CountButton incrementBy={5} buttonColor={"blue"}/>
    </div>
  );
}

export default APP;