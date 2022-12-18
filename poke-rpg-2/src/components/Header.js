import React from "react";

const headerStyle = {
  textAlign: "center",
  display: "block",
  zIndex: "2",
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