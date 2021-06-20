import React, {  useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import jwt from 'jsonwebtoken';
  
  
const Login = (props) => {
	const dispatch = useDispatch();
    const state = useSelector((state) => {
      return {
        login:state.loginReducers
      };
    });
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);


    const state = {
      setEmail,
      setPassword,
      setToken,
      userId,
      token,
      loggedIn
    };
    useEffect(()=>{
   saveToken(localStorage.getItem('token'))
    },[]);
    function saveToken(token) {
      const user = jwt.decode(token);
      if (user) {
        setToken(token);
        setUserId(user.userId);
        localStorage.setItem('token', token);
      }
    }
async function loginRes(){
  try{
    const res = await axios.post('http://localhost:5000/login',{
      email,
      password,
    }).then(res)
    .dispatch(res.data.token)
    setLoggedIn(true);
  }catch(error){
if(error) throw error;
  }
}
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		loginContext.login();
		
			history.push('/dashboard');
		
	};

	const redirect = () => {
		
			history.push('/dashboard');
		
	};

	return (
		<>
		 <div value={state}>
  {props.children}

  </div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email here"
					onChange={(e) => loginContext.setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password here"
					onChange={(e) => loginContext.setPassword(e.target.value)}
				/>
				<button>Login</button>
			</form>

			{redirect()}
			{loginContext.message && <div>{loginContext.message}</div>}
		</>
	);
};

export default Login;
