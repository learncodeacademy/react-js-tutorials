import React from "react";

export default class Archives extends React.Component {
  render() {

    const headerStyling = {
      fontFamily: "Roboto",
      color: "#3C1053",
      marginBottom: "20px"
    };

    return (
      <div>
        <h1 style={headerStyling}>Favorites</h1>
      </div>
    );
  }
}
