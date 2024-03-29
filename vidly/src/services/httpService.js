import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete, // deleting requires authorization. Add isAdmin: true property in mongodb users.
  setJwt,
};
