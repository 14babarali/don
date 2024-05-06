import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import "./Login.css"; // Import CSS file for styling

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="login-container">
			<div className="login-form">
				<h1>Login <span>ChatApp Babar </span></h1>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type='text'
							id='username'
							placeholder='Enter username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="form-group">

						<input
							type='password'
							id='password'
							placeholder='Enter Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link to='/signup' className="signup-link">
						{"Don't"} have an account?
					</Link>

					<div>
						<button disabled={loading} className="login-button">
							{loading ? <span></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
