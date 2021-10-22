import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Toast from '../components/Toast';
import AuthImage from '../images/auth-image.jpg';
import AuthDecoration from '../images/auth-decoration.png';
import { signIn } from '../features/auth/authSlice';

function Signin() {
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showSigninFailedToast, setShowSigninFailedToast] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signIn({ username: usernameInput, password: passwordInput })).unwrap();
      history.push('/');
    } catch (error) {
      setShowSigninFailedToast(true);
    }
  };
  useEffect(() => {
  }, []);

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
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Username</label>
                    <input id="email" className="form-input w-full" type="email" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input id="password" className="form-input w-full" type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} autoComplete="on" />
                  </div>
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
                  Don’t you have an account?
                  <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signup">Sign Up</Link>
                </div>
                {/* Warning */}
                <div className="mt-5">
                  <div className="bg-yellow-100 text-yellow-600 px-3 py-2 rounded">
                    <svg className="inline w-3 h-3 flex-shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are free until March 31st.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Toast open={showSigninFailedToast} setOpen={setShowSigninFailedToast}>
              {`Error: ${auth.error}`}
            </Toast>
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
