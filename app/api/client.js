import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  // baseURL: "http://192.168.18.136:9000/api",
  baseURL: "http://10.6.128.63:9000/api",
});

// apiClient.addAsyncRequestTransform(async (request) => {
//     const authToken = await authStorage.getToken();
//     if(!authToken) return
//     request.headers(["x-auth-token"]) = authToken;
// })

export default apiClient;
