import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Login user
  const login = async (user) => {
    try {
      const res = await axios({
        method: "POST",
        url: "/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
      });
      setError(null);
      setUser(res.data.user);
      router.push("/home");
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  // Logout user
  const logout = async () => {
    const res = await axios({
      method: "POST",
      url: "/api/logout",
    });
    if (res.status === 200) {
      setUser(null);
      router.push("/");
    }
    setLoading(true);
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    try {
      const res = await axios.get("/api/user");
      console.log(res.data);
      setUser(res.data);
      setLoading(false);
    } catch (e) {
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
