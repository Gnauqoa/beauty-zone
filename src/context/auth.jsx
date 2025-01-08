import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useToggle from "../hooks/useToggle";
import { toastSuccess } from "../utils/toast";
// Create the Auth Context
const AuthContext = createContext(null);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isLogin, , onLogin, onLogout] = useToggle();

  const login = () => {
    onLogin();
    toastSuccess("Login successfully");
  };

  const logout = () => {
    onLogout();
    toastSuccess("Logout successfully");
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
