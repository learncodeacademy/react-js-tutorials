import React from "react";

export default class Settings extends React.Component {
  render() {

    const headerStyling = {
      fontFamily: "Roboto",
      color: "#3C1053",
      marginBottom: "20px"
    };

    return (
      <div>
        <h1 style={headerStyling}>Settings</h1>
      </div>
    );
  }
}
