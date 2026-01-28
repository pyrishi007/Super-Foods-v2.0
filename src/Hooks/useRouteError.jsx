import { useRouteError } from "react-router-dom";

const useRouterError = () => {
  const { data, status, statusText } = useRouteError();

  return {
    data,
    status,
    statusText,
  };
};


export default useRouterError;