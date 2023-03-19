import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import "../styles/login.css";

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        console.log(user, pwd);
        if(user === "admin" && pwd === "admin"){
            setAdmin(true);
            setSuccess(true);

        }
        else {
            setSuccess(true);
        }
    }
    return (
        <div>
            {admin ? (
                <div>
                    <div className="admin">
                        <h1>Welcome back ADMIN</h1>
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
            {success ? (
                <section>

                    <div className="loggedIn">
                        <h1>You are logged in!</h1>
                        <br />
                        <h1>
                            <a href="/">Go to Home</a>
                        </h1>
                    </div>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <h1>Sign In</h1>
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                    />
                                    <span>Username:</span>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                    <span>Password:</span>
                                </div>
                            <input type="submit" value="Login"/>
                            <p>Need an Account?</p>
                            <input type="submit" value="Sign in"/>
                        </form>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Login
