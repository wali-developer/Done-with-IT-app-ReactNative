import client from "./client";

const register = (newUser) => client.post("/users", newUser);

export default {
  register,
};
