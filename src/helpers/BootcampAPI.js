import axios from "axios";

//axios is
class APIClass {
  constructor() {
    // this says if there is no response within 1 sec, we move on
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_APIURL,
      timeout: 1000
    });
  }

  getDefaultHeaders() {// we need this function for API  to know 
    //"who is the requester of info. if one has authorization to get/post those data"
    return {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // sends the jwt token
      //localstorage = browser storage; additional info -there is also a sesion storage, that
      // is removed after closing the web browser
      responseType: "application/json" // this says that we want to see response type in this type
    };
  }

  get(url) {
    return this.instance.get(url, {
      headers: this.getDefaultHeaders()
    });
  }

  post(url, data) {
    return this.instance.post(url, data, {
         headers: this.getDefaultHeaders()
    });
  }

  call(method, url, data) {
    return this.instance[method](url, data, {
      method,
      headers: this.getDefaultHeaders()
    });
  }
}

const API = new APIClass();

export default API;
