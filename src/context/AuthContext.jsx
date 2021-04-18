import { createContext, useContext, useEffect, useState } from "react";
import { getProfile, refresh } from "../actions/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await refresh();
      const info = await getProfile();
      setUserInfo(info);
      setLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export default useAuthContext;
