/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const API = import.meta.env.VITE_API_URL;
// const url = "http://localhost:5000/api/auth/user";

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [users, setUsers] = useState(null);

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;

    const logoutUser = () => {
        setToken(null);
        setUsers(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (!token) return;

        const userAuthentication = async () => {
            try {
                const response = await fetch(`${API}/api/auth/user`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                }
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider
            value={{ storeTokenInLS, logoutUser, isLoggedIn, users, API }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};
