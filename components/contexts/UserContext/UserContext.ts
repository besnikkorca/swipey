import { createContext } from "react";
import { UserContextType } from "../../../src/types/user";

export default createContext<UserContextType>({
  user: null,
  initializing: true,
});
