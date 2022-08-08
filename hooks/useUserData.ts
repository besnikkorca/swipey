import { useContext } from "react";
import UserContext from "../components/contexts/UserContext/UserContext";
import { UserContextType } from "../src/types/user";

export default function (): UserContextType {
  return useContext(UserContext);
}
