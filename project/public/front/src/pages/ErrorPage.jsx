import "./errorPage.css";
import notFoundImage from "../images/404.png";
import unauthoriozed from "../images/401.png";
import serverError from "../images/500.png";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  let errorType = 500; // <= // Change this value to change the error  to display

  //
  // Drari Connect the backend error status with this variable : errorType. (oky guys)
  // Une fois yatbadel had variable le contenu dyal page error ghadi yatbadel adrari mouad kanshofek
  //

  const [error, setError] = useState({});
  const type = {
    notFound: {
      image: notFoundImage,
      status: 404,
      description: "UH OH! You're lost.",
      text: "The page vou are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.",
    },
    unauthoriozed: {
      image: unauthoriozed,
      status: 401,
      description: "UH OH! You're lost.",
      text: "The page vou are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.",
    },
    serverError: {
      image: serverError,
      status: 500,
      description: "UH OH! You're lost.",
      text: "The page vou are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.",
    },
  };

  useEffect(() => {
    if (errorType === 404) {
      setError(type.notFound);
    } else if (errorType === 401) {
      setError(type.unauthoriozed);
    } else if (errorType === 500) {
      setError(type.serverError);
    }
  }, [errorType]);

  return (
    <div className="errorPage center">
      <div className="container center">
        <img className="image" src={error.image} alt="error" />
      </div>
      <div className="container text center">
        <h2 className="status">{error.status}</h2>
        <h3 className="heading">{error.description}</h3>
        <p className="description">{error.text}</p>
        <a href="/">
          <button className="button">Home</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
