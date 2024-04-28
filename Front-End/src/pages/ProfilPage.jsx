import { useParams } from "react-router-dom";
import Dashboard from "../components/main/Dashboard";
import { useState, useEffect } from "react";
import fetchData from "../api/userService";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

function ProfilPage() {
    let { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState();

    console.log(id)

    useEffect(() => {
        const data = async () => {
            try {
                const userData = await fetchData(parseInt(id));
                if (userData === 'introuvable' || !userData) {
                    throw new Error('L\'utilisateur est introuvable');
                }
                setUser(userData);
                setLoading(true);
            }
            catch (error) {
                setError(error.message);
                setLoading(false);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                    setLoaded(true);
                }, 300);
            }
        };
        data();
    }, []);

    if (error) {
        return <ErrorPage err='userIntrouvable' />;
    }
    else if (loading) {
        return (
            <LoadingPage />
        );
    }
    else if (loaded) {
        return <Dashboard user={user} />;
    }
}
export default ProfilPage;