import useToggle from "./useToggle";

const useAuth = () => {
  const [isLogin, , onLogin, onLogout] = useToggle();
  const login = () => {
    onLogin();
  };

  const logout = () => {
    onLogout();
  };
  return { isLogin, login, logout };
};

export default useAuth;
