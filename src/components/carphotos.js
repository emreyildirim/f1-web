import React from "react";

const Car = (props) => {
  switch (props.car) {
    case "mercedes":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes.png.transform/4col/image.png"
          alt="mercedes-car"
        />
      );
    case "ferrari":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari.png.transform/4col/image.png"
          alt="ferrari-car"
        />
      );
    case "mclaren":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/mclaren.png.transform/4col/image.png"
          alt="mclaren-car"
        />
      );
    case "racing_point":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point.png.transform/4col/image.png"
          alt="racing-point-car"
        />
      );
    case "alphatauri":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/alphatauri.png.transform/4col/image.png"
          alt="alphatauri-car"
        />
      );
    case "renault":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/renault.png.transform/4col/image.png"
          alt="renault-car"
        />
      );
    case "alfa":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/alfa-romeo-racing.png.transform/4col/image.png"
          alt="alfa-romeo-car"
        />
      );
    case "williams":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020-Team-Pages/teamcar-williams.png.transform/4col/image.png"
          alt="williams-car"
        />
      );
    case "red_bull":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing.png.transform/4col/image.png"
          alt="red_bull-car"
        />
      );
    case "haas":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/teams/2020/haas-f1-team.png.transform/4col/image.png"
          alt="haas-car"
        />
      );

    default:
      return (
        <img
          src={process.env.PUBLIC_URL + "/placeholders/car-placeholder.png"}
          alt="placeholder"
        />
      );
  }
};
export default Car;
