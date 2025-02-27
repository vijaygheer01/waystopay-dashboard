import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserId, setIsAuthenticatedFalse } from "@/redux/reducer/authReducer";

const baseURL = `https://dev16.invitocreatives.com/api/admin/`;

let clientWithToken = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

let clientWithoutToken = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

const requestHandler = (request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
    window.alert("Invalid Request");
    localStorage.clear();
  }
  return response;
};

const errorHandler = (err) => {
  if (err.response) {
    if (err.response.status === 401) {
      alert(err.response.data.message);
      localStorage.clear();
      window.location.reload();
    } else if (err.response.status === 403) {
      const dispatch = useDispatch();
      dispatch(setUserId(null));
      dispatch(setIsAuthenticatedFalse());
      localStorage.clear();
      alert("Session Expired");
      window.location.reload();
    }
  }
  return Promise.reject(err);
};

clientWithToken.interceptors.request.use(requestHandler);
clientWithToken.interceptors.response.use(responseHandler, errorHandler);

export { clientWithToken, clientWithoutToken };
