import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

  return (
    <div id="error-page" className="items-center text-center mx-auto py-10">
      <h1 className="pb-5 text-4xl text-red-600">Oops!</h1>
      <img className="items-center w-96 ml-[600px]" src="https://i.ibb.co/wwWsRCv/404.gif"></img>
      <p className="text-4xl text-red-600 py-10"><i>{error.statusText || error.message}</i></p>
    </div>
  );
   
}

export default Error;