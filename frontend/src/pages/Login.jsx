import { useState } from "react";
import "./Login.scss";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate

} from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    // navigate('/');
    login(dispatch, { username, password });
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1 >Login to your account</h1>
        <form action="">
          <input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleClick} disabled={isFetching}>LOGIN</button>

          {error && <p>something went wrong....</p>}

          <div className="link">DO NOT YOU REMEMBER THE PASSWORD?</div>
          <div className="link" onClick={() => navigate('/register')}>CREATE A NEW ACCOUNT</div>
        </form>
      </div>
    </div>
  );
};

export default Login;