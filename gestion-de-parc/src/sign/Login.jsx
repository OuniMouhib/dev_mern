import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate("/home");
                } else {
                    navigate("/");
                    alert("You are not registered to this service");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-title">Gestion de parc</div>
                </div>
                <Link to="/" className="btn btn-primary">
                    Login
                </Link>
            </nav>
            <div className="mo">
                <div className="container">
                    <div className="form-container">
                        <h2><center>Login</center></h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    autoComplete="off"
                                    name="email"
                                    className="form-control rounded-0"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    className="form-control rounded-0"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-0">
                                Login
                            </button>
                        </form>
                        <p>Don&apos;t have an account?</p> {/* Échapper l'apostrophe */}
                        <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;