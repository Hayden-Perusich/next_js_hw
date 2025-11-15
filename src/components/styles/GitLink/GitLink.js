import React, { useState } from "react";
import "./GitLink.css";

const GitLink = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <div>
      <a href="https://github.com/Hayden-Perusich/next_js_hw" className="link">
        Github Link
      </a>

      <p className="paragraph">
        For our project we will be creating a sudoku game hosted on a website.
        There will be a few levels, and players will be able to get hints on the
        sudoku board.
      </p>
    </div>
  );
};

export default GitLink;
