import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { Form, Button } from "react-bootstrap";
import "./SignUp.css"; // Import CSS file for styling

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

	const { loading, signup } = useSignup();



	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="signup-container">
			<div className="signup-form">
				<h1>
					Sign Up <span> Medlocate</span>
				</h1>

				<Form onSubmit={handleSubmit}>
					<div className="form-group">

						<input
							type='text'
							id='fullName'
							placeholder='Enter your full name'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className="form-group">

						<input
							type='email'
							id='eamil'
							placeholder='Enter your eamil'
							value={inputs.email}
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
						/>
					</div>

					<div className="form-group">

						<input
							type='text'
							id='username'
							placeholder='Enter address'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div className="form-group">

						<input
							type='password'
							id='password'
							placeholder='Enter Password'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div className="form-group">

						<input
							type='password'
							id='confirmPassword'
							placeholder='Confirm Password'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>



					<Link to={"/login"} className="login-link">
						Already have an account?
					</Link>

					<div className="form-group">
						<Button type="submit" disabled={loading} className="signup-button">
							{loading ? <span></span> : "Sign Up"}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default SignUp;
