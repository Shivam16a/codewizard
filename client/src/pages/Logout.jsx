import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';

export const Logout = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logoutUser();

        if (!toast.isActive("logout-toast")) {
            toast.success("Logout success", { toastId: "logout-toast" });
        }

        const timer = setTimeout(() => {
            navigate("/login");
        }, 1000); // 1 sec delay to show toast

        return () => clearTimeout(timer);
    }, [logoutUser, navigate]);

    return null;
};
