import axios from "axios";

let clientWithToken = axios.create({
  baseURL: `https://dev16.invitocreatives.com/api/admin/`,
  timeout: 10000,
});

let clientWithoutToken = axios.create({
  baseURL: `https://dev16.invitocreatives.com/api/admin/`,
  timeout: 10000,
});



const requestHandler = (request) => {
  request.headers.Authorization = "Bearer " + localStorage.getItem("token");
  return request;
};

const responseHandler = (response) => {
  console.log('http',response.status);
  if (response.status === 401 ) {
    window.alert("Invalid Request");
    window.localStorage.clear();
  }

  return response;
};

function manageErrorConnection(err) {

  const originalConfig = err.config;
  if (err.response && err.response.status == 401) {
    alert(err.response.data.message);
    localStorage.setItem("login", false);
    localStorage.setItem("token", "");
    window.location.reload();
    localStorage.setItem("api_token", "");
    window.localStorage.clear();
    return Promise.reject(err);
  }

  else if (err.response && err.response.status == 403) {
    localStorage.setItem("token", "");
    alert("Session Expired");
    window.location.reload();
    window.localStorage.clear();
    return Promise.reject(err);
  } else {
    window.localStorage.clear();
    return Promise.reject(err);
  }
}

clientWithToken.interceptors.request.use(
  (request) => requestHandler(request),
  manageErrorConnection
);

clientWithToken.interceptors.response.use(
  (response) => responseHandler(response),
  manageErrorConnection
);

export { clientWithToken, clientWithoutToken };



