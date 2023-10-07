import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const Authentication = {
  name: "hello",
};
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={Authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
