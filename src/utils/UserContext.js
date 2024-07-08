import { createContext } from "react";

const UserContext = createContext({
  data: {
    name: "Dummy",
    password: "Dummy"
  },
});

export default UserContext;
