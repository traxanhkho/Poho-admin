import axios from "axios";

const urlEndPoint = "https://636f0482f2ed5cb047d36c0f.mockapi.io/api/v1";

export async function loggin() {
  return await axios.get(urlEndPoint + "/auth");
}


