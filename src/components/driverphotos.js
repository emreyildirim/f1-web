import React from "react";

const DriverPhotos = (props) => {
  switch (props.driverId) {
    case "hamilton":
      return (
        <img
          className=" driver-photo"
          src="https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/3col/image.png"
          alt="hamilton"
        />
      );
    case "bottas":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/3col/image.png"
          alt="bottas"
        />
      );
    case "max_verstappen":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/3col/image.png"
          alt="verstappen"
        />
      );
    case "albon":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/3col/image.png"
          alt="albon"
        />
      );
    case "leclerc":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/3col/image.png"
          alt="leclerc"
        />
      );
    case "vettel":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/3col/image.png"
          alt="vettel"
        />
      );
    case "stroll":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/3col/image.png"
          alt="stroll"
        />
      );
    case "perez":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/3col/image.png"
          alt="perez"
        />
      );
    case "hulkemberg":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/3col/image.png"
          alt="hulkemberg"
        />
      );
    case "ricciardo":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/3col/image.png"
          alt="ricciardo"
        />
      );
    case "ocon":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/3col/image.png"
          alt="ocon"
        />
      );
    case "norris":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/3col/image.png"
          alt="norris"
        />
      );
    case "sainz":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/3col/image.png"
          alt="sainz"
        />
      );
    case "gasly":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/3col/image.png"
          alt="gasly"
        />
      );
    case "kvyat":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/D/DANKVY01_Daniil_Kvyat/dankvy01.png.transform/3col/image.png"
          alt="kvyat"
        />
      );
    case "kevin_magnussen":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/3col/image.png"
          alt="magnussen"
        />
      );
    case "grosjean":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/R/ROMGRO01_Romain_Grosjean/romgro01.png.transform/3col/image.png"
          alt="grosjean"
        />
      );
    case "raikkonen":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/3col/image.png"
          alt="raikkonen"
        />
      );
    case "giovinazzi":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/3col/image.png"
          alt="giovinazzi"
        />
      );
    case "russell":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/3col/image.png"
          alt="russell"
        />
      );
    case "latifi":
      return (
        <img
          src="https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/3col/image.png"
          alt="latifi"
        />
      );
    default:
      return (
        <img
          src={process.env.PUBLIC_URL + "/placeholders/driver-placeholder.png"}
          alt="placeholder"
        />
      );
  }
};
export default DriverPhotos;
