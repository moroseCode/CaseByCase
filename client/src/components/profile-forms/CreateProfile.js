import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProfileForms.css';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
	// Form data state
	const [formData, setFormData] = useState({
		status: '',
		website: '',
		location: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});

	const {
		status,
		website,
		location,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;

	// Social Input state
	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
	};

	return (
		<Fragment>
			<h1>
				<i>CREATE PROFILE</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-user-secret userIcon'></i> Let's get some
				information to make your profile stand out!
			</p>
			<form className='form' onSubmit={e => handleSubmit(e)}>
				<div className='form-group'>
					<label htmlFor='status'>Professional Status</label>
					<select
						className='form-control'
						name='status'
						value={status}
						onChange={e => onChange(e)}
					>
						<option value='Web Sleuth'>Web Sleuth</option>
						<option value='Law Enforcement'>Law Enforcement</option>
						<option value='Private Investigator'>Private Investigator</option>
						<option value='Student'>Student</option>
						<option value='Other'>Other</option>
					</select>
					<small className='form-text'>
						Give us an idea of where you are at in your career/hobby.
					</small>
				</div>
				<div className='form-group'>
					<label htmlFor='website'>Website</label>
					<input
						className='form-control'
						type='text'
						placeholder='www.example.com'
						name='website'
						value={website}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Could be your own or a company website.
					</small>
				</div>
				<div className='form-group'>
					<label htmlFor='location'>Location</label>
					<input
						className='form-control'
						type='text'
						placeholder='Small Town, VA, USA'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='bio'>Bio</label>
					<textarea
						className='form-control'
						placeholder='A short bio of yourself.'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					></textarea>
					<small className='form-text'>Tell us a little about yourself.</small>
				</div>
				<hr />
				<div>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-dark green-btn'
					>
						Add Social Network Links
					</button>
					<small id='optional' className='form-text'>
						Optional
					</small>
				</div>

				{displaySocialInputs && (
					<Fragment>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='twitter-icon' class='fab fa-twitter fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Twitter URL'
										name='twitter'
										value={twitter}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='facebook-icon' class='fab fa-facebook fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Facebook URL'
										name='facebook'
										value={facebook}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='youtube-icon' class='fab fa-youtube fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='YouTube URL'
										name='youtube'
										value={youtube}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='linkedin-icon' class='fab fa-linkedin fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Linkedin URL'
										name='linkedin'
										value={linkedin}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div class='input-group social-input'>
							<div className='row'>
								<div className='col-md-2'>
									<i id='instagram-icon' class='fab fa-instagram fa-2x'></i>
								</div>
								<div className='col-md-10'>
									<input
										className='form-control'
										type='text'
										placeholder='Instagram URL'
										name='instagram'
										value={instagram}
										onChange={e => onChange(e)}
									/>
								</div>
							</div>
						</div>
					</Fragment>
				)}
				<div id='profile-buttons'>
					<input type='submit' className='btn btn-secondary' />&nbsp;&nbsp;
					<Link className='btn btn-light my-1' to='/dashboard'>
						Go Back
					</Link>
				</div>
			</form>
		</Fragment>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
