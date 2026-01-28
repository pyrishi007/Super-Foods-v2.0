import useRouterError from "../../../Hooks/useRouteError";

const RouteError = () => {
  const { data, status, statusText } = useRouterError();

  return (
    <>
      <div className="border border-gray-600 fixed w-full h-full flex justify-center items-center ">
        <div className=" shadow-xl shadow-gray-300  w-[600px] m-20 p-20 rounded-xl">
          <h1 className="text-center text-9xl  font-thin text-red-500 mb-5 animate-bounce">
            {status}
          </h1>
          <p className="text-center text-sm font-thin">
            Oops! Page {statusText}
          </p>
        </div>
      </div>
    </>
  );
};

export default RouteError;
