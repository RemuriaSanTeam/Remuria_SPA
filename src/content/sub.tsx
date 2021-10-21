import * as React from "react";
import { Link } from "react-router-dom";
//import About from "./about";

const Sub: React.FC = () => {
  return (
    <div>
      <p>俺はコスプレイヤーがすきだ！</p>
      <br />
      <Link to="/">about</Link>
    </div>
  );
};
export default Sub;
