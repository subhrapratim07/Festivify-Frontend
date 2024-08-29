import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Fetch and parse data from localStorage
    const fetchAuthUser = () => {
      try {
        const storedUser = localStorage.getItem("Users");
        if (storedUser) {
          // Check if the stored value is a valid JSON string
          if (storedUser !== "undefined") {
            setAuthUser(JSON.parse(storedUser));
          } else {
            // Handle case where localStorage contains "undefined" as a string
            setAuthUser(null);
          }
        } else {
          setAuthUser(null);
        }
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        setAuthUser(null);
      }
    };

    fetchAuthUser();
  }, []);

  // Update localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
