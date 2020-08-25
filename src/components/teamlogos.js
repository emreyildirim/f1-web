import React from "react";

const TeamLogo = (props) => {
  switch (props.teamLogo) {
    case "mercedes":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/mercedes-logo.png"}
          alt="mercedes"
        />
      );
    case "ferrari":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/ferrari-logo.png"}
          alt="ferrari"
        />
      );
    case "mclaren":
      return (
        <img src={process.env.PUBLIC_URL + "/team-logo/mclaren-logo.png"}
         alt="mclaren" />
      );
    case "racing_point":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/racingpoint-logo.png"}
          alt="racing-point"
        />
      );
    case "alphatauri":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/alphatauri-logo.png"}
          alt="alphatauri"
        />
      );
    case "renault":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/renault-logo.png"}
          alt="renault"
        />
      );
    case "alfa":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/alfaromeo-logo.png"}
          alt="alfa-romeo"
        />
      );
    case "williams":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/williams-logo.png"}
          alt="williams"
        />
      );
    case "red_bull":
      return (
        <img
          src={process.env.PUBLIC_URL + "/team-logo/redbull-logo.png"}
          alt="red_bull"
        />
      );
    case "haas":
      return (
        <img src={process.env.PUBLIC_URL + "/team-logo/haas.png-logo"} alt="haas" />
      );

    default:
      return <div></div>;
  }
};
export default TeamLogo;
