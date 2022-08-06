import { createContext } from "react";
import { User } from "../../../types/user";

interface UserContextType {
  user: User;
  initializing: boolean;
}

export default createContext<UserContextType>({
  user: null,
  initializing: true,
});
