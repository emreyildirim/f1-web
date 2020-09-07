import React from "react";

const Flag = (props) => {
  var source =
    "https://cdn.countryflags.com/thumbs/" + props.country + "/flag-400.png";
  if (props.country === "uk")
    return (
      <img
        src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png"
        alt={props.country}
      />
    );
  if (props.country === "uae")
    return (
      <img
        src="https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-800.png"
        alt={props.country}
      />
    );
  return <img src={source} alt={props.country} />;
};

export default Flag;
