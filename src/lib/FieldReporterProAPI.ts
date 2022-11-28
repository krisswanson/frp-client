import axios from "axios";

class FRPAPIError extends Error {
  message = "There was an error";
}

class FieldReporterProAPI {
  port = import.meta.env.VITE_API_SERVER_PORT;
  domain = import.meta.env.VITE_API_SERVER_DOMAIN;
  baseURL = "http://" + this.domain + ":" + this.port;
  error = new FRPAPIError();

  async get(endpoint: string, parameters: Record<string, any> = {}) {
    //TODO Test the queryString Method
    try {
      const urlQueryString = new URLSearchParams(parameters).toString();
      await axios.get(this.baseURL + endpoint + "?" + urlQueryString);
    } catch (e) {
      throw this.error;
    }
  }

  async post(endpoint: string, parameters: Record<string, any> = {}) {
    try {
      return await axios.post(this.baseURL + endpoint, parameters);
    } catch (e) {
      throw this.error;
    }
  }
}

export const API = new FieldReporterProAPI();
