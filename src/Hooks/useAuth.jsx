import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { deleteApp } from "firebase/app";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
