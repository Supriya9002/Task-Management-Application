import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import HomeImg from "./../Data/house.png";
import coustomerImg from "./../Data/task.png";
import logoutImg from "./../Data/logout.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // check loggin or not
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        console.log("Suprya")
        navigate('/login');
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        console.log("User logged out, isLoggedIn state:", isLoggedIn);
        // navigate('/login');
    };
    console.log("isLoggedIn", isLoggedIn)
    return (
        <>
            <div className={styles.divNavbarContainer}>
                {/* App Name */}
                <Link to="/" className={styles.underlineR}>
                    <span className={styles.appname}>Task Manager</span>
                </Link>
                <div className={styles.navPageContainer}>
                    {/* Home */}
                    <Link to="/" className={styles.underlineRmv}>
                        <img src={HomeImg} alt="HomeImg" />
                        <span>Home</span>
                    </Link>

                    {/* Add task */}
                    <Link to="/addTask" className={styles.underlineRmv}>
                        <img src={coustomerImg} alt="coustomerImg" />
                        <span>Add Task</span>
                    </Link>

                    {/* Login/Logout */}
                    {!isLoggedIn ? (
                    <Link to="/login" className={styles.underlineRmv}>
                        <img src={logoutImg} alt="logoutImg" />
                        <span>LogIn</span>
                    </Link>
                    ) : (
                    <Link to="/" onClick={handleLogout} className={styles.underlineRmv}>
                        <img src={logoutImg} alt="logoutImg" />
                        <span>LogOut</span>
                    </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
}
