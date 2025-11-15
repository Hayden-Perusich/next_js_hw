import React from "react";
import CountButton from "./styles/CountButton/CountButton";
import GitLink from "./styles/GitLink/GitLink";
import Store from "./Store";

const APP = () => {
  const myIteam = "mike";

  return (
    <div>
        <CountButton incrementBy={1} buttonColor={"red"}/>
        <CountButton incrementBy={5} buttonColor={"blue"}/>
        <GitLink />
        <Store />
    </div>
  );
}

export default APP;