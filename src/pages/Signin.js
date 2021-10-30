import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import { signIn } from '../slices/auth/authSlice';
import TextField from '../partials/TextField';

function Signin() {
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showSigninFailedHelpText, setShowSigninFailedHelpText] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signIn({ username: usernameInput, password: passwordInput })).unwrap();
      history.push('/');
    } catch (error) {
      setShowSigninFailedHelpText(true);
    }
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">

            <div className="w-full">
              <h1 className="text-3xl text-gray-800 font-bold mb-6">Welcome back! ✨</h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <TextField label="Username" id="username" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
                  <TextField label="Password" id="password" type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} showHelpText={showSigninFailedHelpText} helpText="Sign in failed. Check your entries and try again." />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link className="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</Link>
                  </div>
                  <button type="submit" className="btn bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-800 text-white ml-3" onClick={handleSubmit}>Sign In</button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-gray-200">
                <div className="text-sm">
                  Don’t have an account?
                  {' '}
                  <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
          <img className="absolute top-1/4 left-0 transform -translate-x-1/2 ml-8" src={AuthDecoration} width="218" height="224" alt="Authentication decoration" />
        </div>
      </div>
    </main>
  );
}

export default Signin;
