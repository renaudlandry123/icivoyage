import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/renaudlandry123/icivoyage",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/checkouts");
  },
  getEvent(id) {
    return apiClient.get("/checkouts/" + id);
  },
};
