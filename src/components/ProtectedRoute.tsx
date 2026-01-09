import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import backendService from "@/services/backend";

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const verifyToken = async () => {
            const token = backendService.getToken();
            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                // Verify token by fetching current user
                await backendService.getCurrentUser();
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Token invalid:", error);
                backendService.setToken(null); // Clear invalid token
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, []);

    if (isAuthenticated === null) {
        // Loading state
        return <div className="min-h-screen flex items-center justify-center">Verificando sesión...</div>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
