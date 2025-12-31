import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const AdminProtectedRoute = ({ children }) => {
  const { isLoggedIn, users } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (!users?.isAdmin) {
    return <Navigate to="/notfound" />;
  }

  return children;
};

export default AdminProtectedRoute;
