import React from "react";
import { render } from "react-dom";

const StyledBtn = ({ children, style }) => (
  <button className="btn" style={style}>
    {children}
  </button>
);

const App = () => (
  <div>
    <StyledBtn>Click Me!</StyledBtn>
    <br />
    <br />
    <StyledBtn style={{ backgroundColor: "red" }}>Not Me!</StyledBtn>
    <br />
    <br />
    <StyledBtn>Or Me!</StyledBtn>
  </div>
);

render(<App />, document.getElementById("root"));
