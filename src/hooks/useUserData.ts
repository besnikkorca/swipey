import { useContext } from "react";
import { UserContextType } from "types/user";
import UserContext from "contexts/UserContext";

export default function (): UserContextType {
  return useContext(UserContext);
}
