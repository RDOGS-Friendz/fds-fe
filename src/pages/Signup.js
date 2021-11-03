import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import TextField from '../partials/basic/TextField';
import Select from '../partials/basic/Select';

import { signup } from '../slices/accountSlice';
import FeedbackModal from '../partials/FeedbackModal';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showSuccessFeedbackModal, setShowSuccessFeedbackModal] = useState(false);

  const [inputs, setInputs] = useState({
    username: '',
    real_name: '',
    email: '',
    gender: 'MALE',
    password: '',
    confirmPassword: '',
  });

  const [showHelpTexts, setShowHelpTexts] = useState({
    username: false,
    real_name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [helpTexts, setHelpTexts] = useState({
    username: '',
    real_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const newInputs = Object.keys(inputs).reduce((acc, item) => ({ ...acc, [item]: inputs[item].trim() }), {});
    let hasError = Object.keys(newInputs).reduce((acc, item) => acc || newInputs[item] === '', false); // check empty
    let newShowHelpTexts = Object.keys(newInputs).reduce((acc, item) => ({ ...acc, [item]: newInputs[item] === '' }), {});
    let newHelpTexts = Object.keys(newInputs).reduce((acc, item) => ({ ...acc, [item]: newInputs[item] === '' ? 'Can\'t be empty' : '' }), {});

    // check password
    if (newInputs.password !== newInputs.confirmPassword) {
      newShowHelpTexts = { ...newShowHelpTexts, confirmPassword: true };
      newHelpTexts = { ...newHelpTexts, confirmPassword: 'Passwords don\'t match' };
      hasError = true;
    }

    if (newInputs.email !== '' && !validateEmail(newInputs.email)) {
      newShowHelpTexts = { ...newShowHelpTexts, email: true };
      newHelpTexts = { ...newHelpTexts, email: 'Invalid email address' };
      hasError = true;
    }

    if (!hasError) {
      const {
        username, real_name, email, password, gender,
      } = newInputs;
      try {
        await dispatch(
          signup({
            username, real_name, email, password, gender,
          }),
        ).unwrap();
        setShowSuccessFeedbackModal(true);
      } catch (error) {
        // TODO: handle different errors.
        newShowHelpTexts = { ...newShowHelpTexts, confirmPassword: true };
        newHelpTexts = { ...newHelpTexts, confirmPassword: 'Something is wrong, please check your entries.' };
      }
    }

    setShowHelpTexts(newShowHelpTexts);
    setHelpTexts(newHelpTexts);
  };

  const handleChange = event => {
    const { id, value } = event.target;
    setInputs(input => ({ ...input, [id]: value }));
  };

  return (
    <main className="bg-white">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2">
          <div className="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">

            <div className="w-full">
              <h1 className="text-3xl text-gray-800 font-bold mb-6">Create your Account ✨</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <TextField required label="Username" id="username" value={inputs.username} onChange={handleChange} showHelpText={showHelpTexts.username} helpText={helpTexts.username} />
                  <TextField required label="Real Name" id="real_name" value={inputs.real_name} onChange={handleChange} showHelpText={showHelpTexts.real_name} helpText={helpTexts.real_name} />
                  <TextField required label="Email" id="email" value={inputs.email} onChange={handleChange} showHelpText={showHelpTexts.email} helpText={helpTexts.email} />
                  <Select
                    required
                    label="Gender"
                    id="gender"
                    options={[
                      { label: 'Female', value: 'Female' },
                      { label: 'Male', value: 'MALE' },
                      { label: 'Other', value: 'OTHER' },
                    ]}
                    value={inputs.gender}
                    onChange={handleChange}
                  />
                  <TextField required label="Password" id="password" type="password" value={inputs.password} onChange={handleChange} showHelpText={showHelpTexts.password} helpText={helpTexts.password} />
                  <TextField required label="Confirm Password" id="confirmPassword" type="password" value={inputs.confirmPassword} onChange={handleChange} showHelpText={showHelpTexts.confirmPassword} helpText={helpTexts.confirmPassword} />

                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <div className="text-sm">
                      Have an account?
                      {' '}
                      <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signin">Sign In</Link>
                    </div>
                  </div>
                  <button type="submit" onClick={handleSubmit} className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
          <img className="absolute top-1/4 left-0 transform -translate-x-1/2 ml-8" src={AuthDecoration} width="218" height="224" alt="Authentication decoration" />
        </div>

      </div>

      <FeedbackModal
        open={showSuccessFeedbackModal}
        setOpen={setShowSuccessFeedbackModal}
        variant="success"
        title="Signup successful!"
        content="Your account has been created, signin and get started!"
        buttons={(
          <>
            <button type="button" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => history.push('/signin')}>
              Go to signin
            </button>
          </>
        )}
      />
    </main>
  );
}

export default Signup;
