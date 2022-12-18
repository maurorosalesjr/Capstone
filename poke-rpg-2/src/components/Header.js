import React from "react";
import headerImage from "./../img/dungeonwall.png"

const headerStyle = {
  left: "5%",
  textAlign: "center",
  display: "block",
  zIndex: "6",
  border: "2px solid black",
  position: "absolute",
  maxWidth: "90%",
  width: "100%",
  color: "burlywood",
  backgroundImage: `url(${headerImage})`,
}
function Header() {
  return (
    <React.Fragment>
      <div style={headerStyle}>
      <h1>Pokemon RPG 2: Reckoning of The Beholder</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;