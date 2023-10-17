import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img className="items-center" src="https://i.ibb.co/wwWsRCv/404.gif"></img>
      <p className="text-4xl text-red-600"><i>{error.statusText || error.message}</i></p>
    </div>
  );
   
}

export default Error;