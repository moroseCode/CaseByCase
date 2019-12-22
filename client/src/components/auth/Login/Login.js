import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const OnChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();

		console.log(formData);
	};

	return (
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				<h1>
					<i>SIGN IN</i>
				</h1>
				<p className='lead'>
					<i className='fas fa-user-secret userIcon'></i> Sign In To Your
					Account
				</p>
				<form className='form' onSubmit={e => onSubmit(e)}>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							placeholder='Email Address'
							name='email'
							value={email}
							onChange={e => OnChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='form-control'
							placeholder='Password'
							name='password'
							value={password}
							onChange={e => OnChange(e)}
							required
						/>
					</div>
					<input type='submit' className='btn btn-secondary' value='Login' />
				</form>
				<br />
				<p>
					Don't have an account? <Link to='/register'>Sign Up</Link>.
				</p>
			</div>
			<div className='col-md-2'></div>
		</div>
	);
};

export default Login;
