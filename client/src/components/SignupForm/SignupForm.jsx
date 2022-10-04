import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../utils/userService';
import useUser from '../../hooks/useUser';

function SignupForm({ updateMessage }) {
  const navigate = useNavigate()
  const { handleSignupOrLogin } = useUser()

  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  });

  const handleChange = (e) => {
    updateMessage('');
    setState((oldState) => ({
      ...oldState,
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      // Successfully signed up - show GamePage
      navigate('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      updateMessage(err.message);
    }
  }

  const isFormInvalid = () => {
    return !(state.name && state.email && state.password === state.passwordConf);
  }

  return (
    <div>
      <header className="header-footer">Sign Up</header>
      <form className="form-horizontal" onSubmit={handleSubmit} >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Name" value={state.name} name="name" onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" placeholder="Email" value={state.email} name="email" onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="password" className="form-control" placeholder="Password" value={state.password} name="password" onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="password" className="form-control" placeholder="Confirm Password" value={state.passwordConf} name="passwordConf" onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default" disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
