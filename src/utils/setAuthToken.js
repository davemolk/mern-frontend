import axios from "axios";

// This utility will add the authorized user's JWT to the request header
// Any routes that are protected will require the JWT in order to access them.

const setAuthToken = (token) => {
  if (token) {
    // apply the token to every request header
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
