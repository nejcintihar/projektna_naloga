import {useState} from "react";
import "../index.css"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [authenticator, setAuthenticator] = useState("");

    return ( 
            <div>
                <form>
                    <label>
                        Password:
                        <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
                    </label>
                <button type = "submit">Submit</button> 
                </form>
            </div>
        )
}