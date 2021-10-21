import * as React from "react";
import { Link } from "react-router-dom";
//import Sub from "./sub";

const About: React.FC = () => {
  return (
    <div>
      <p>ワイはレムリア!</p>
      <br />
      <Link to="/sub">sub</Link>
    </div>
  );
};
export default About;

/**
 * https://tech-blog.rakus.co.jp/entry/20201223/react#サンプルコード
 */
