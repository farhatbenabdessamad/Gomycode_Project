import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Loguin.css';
import { loginUser, signupUser } from '../redux/action/authAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState(0);
console.log({
  status,
  phone
})
  const dispatch = useDispatch();
  const navigate= useNavigate()
  // const {error } = useSelector((state) => state.auth);

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      dispatch(signupUser({ name, email, password, status, phone }, navigate));
    } else {
      dispatch(loginUser({ email, password }, navigate));
    }
  };

  return (
    <div>
      <>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <p className="login-text">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" style={{ color: "#943ABA" }} />
              <i className="fa fa-lock fa-stack-1x" />
            </span>
          </p>
          {isRegistering ? (
            <>
              <input
                type="text"
                className="login-username"
                autoFocus={true}
                required={true}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="login-username"
                required={true}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="login-password"
                required={true}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select defaultValue={"Expert"} onChange={(e) => setStatus(e.target.value)} style={{
                background: 'transparent', border: '0 solid', borderBottom: '1px solid rgba(255, 255, 255, 0.5)', color: 'white', display: 'block', margin: '1rem', padding: '0.5rem', transition: '250ms background ease-in', width: 'calc(100% - 3rem)'}}>                
                <option value="Expert" style={{background:"black"}}>Expert</option>
                <option value="Association" style={{background:"black"}}>Association</option>
                <option value="Engineering office" style={{background:"black"}}>Engineering office</option>
                </select>
              <input
                type="number"
                className="login-username"
                required={true}
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                type="email"
                className="login-username"
                autoFocus={true}
                required={true}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="login-password"
                required={true}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}
          <div className="button-wrapper">
            <input
              type="submit"
              name="Login"
              value={isRegistering ? "Sign Up" : "Login"}
              className="login-submit"
            />
            <button type="button" onClick={handleToggleRegister} className="register-button">
              {isRegistering ? "Cancel" : "Sign Up"}
            </button>
          </div>
        </form>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
        <div className="underlay-photo" />
        <div className="underlay-black" />
      </>
    </div>
  );
};

export default Login;
