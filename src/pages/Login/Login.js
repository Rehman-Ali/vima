import React, { Fragment , useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {useAlert} from 'react-alert';
import {SERVER_URL} from '../../components/utils/config';
import {LOGIN_FAIL, LOGIN_SUCCESS} from '../../actions/types';

const Login = props => {
	 
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('user'))
	
	 const alert = useAlert() ;
	const onChangeEmail = (e) => {
	  setError('');
	  setEmail(e.target.value);
	};
	const onChangePassword = (e) => {
	  setError('');
	  setPassword(e.target.value);
	};
  
	useEffect(() => {
	  if(user !== undefined && user !== null ){
		  return props.history.push('/') 
		}else if (user === undefined || user === null){
		  return props.history.push('/login')
		}
		else{
		  return props.history.push('/not-found')
		}
			
	}, [user])   
  
	const onSubmit = (e) => {
	  e.preventDefault();
	  if(email === ''){
		  setError('Email and Password Invalid!');
	  }else if(password === ''){
		  setError('Email and Password Invalid!');
	  }else{
		  setLoading(true);
		  let data = {
			  email: email,
			  password: password,
			  
		  }
		  fetch(`${SERVER_URL}api/user/login`, {
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  //   'X-Auth-Token': this.state.User.token,
			  },
			  body: JSON.stringify(data),
			})
			  .then(response => response.json())
			  .then(json => {
				dispatch({
				  type: LOGIN_SUCCESS,
				  payload: json
				});
				console.log('json', json)
				if(json.success === 1){
				  localStorage.setItem('user', JSON.stringify(json))
				  setLoading(false)
				  alert.success('Login successfully!')
				}else{
				  setLoading(false)
				  alert.error('Invalid credential Please try again!')
				}
				
			  })
			  .catch(error => {
				dispatch({
				  type: LOGIN_FAIL,
				  payload: 'Some server Error'
				});
				setLoading(false)
			   alert.error('Email and password is Invalid!')
			  });
		 
   
  
	  }
	}
	
	return (
		<Fragment>
		<div className="inner-wrapper">
  <div className="container-fluid no-padding">
    <div className="row no-gutters overflow-auto">
      <div className="col-md-6">
        <div className="main-banner">
          <img src="assets/img/slider.jpg" className="img-fluid full-width main-img" alt="banner" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="section-2 user-page main-padding">
          <div className="login-sec">
            <div className="login-box">
              <form>
                <h4 className="text-light-black fw-600">Sign in with your Ecom account</h4>
                <div className="row">
                  <div className="col-12">
                    <p className="text-light-black">Have a corporate username? <a href="#">Click here</a>
                    </p>
                    <div className="form-group">
                      <label className="text-light-white fs-14">Email</label>
					  <input type="email" name="#" className="form-control form-control-submit" 
					  name="email"
					  value={email}
					  onChange={(e) => onChangeEmail(e)} 
					  placeholder="Email I'd" required />
                    </div>
                    <div className="form-group">
                      <label className="text-light-white fs-14">Password</label>
					  <input type="password" id="password-field" name="#"
					   name="password"
					   value={password}
					   onChange={(e) => onChangePassword(e)}
					  className="form-control form-control-submit" defaultValue="password" placeholder="Password" required />
                      <div data-name="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
					  <span style={{color:'red', paddingLeft:'10px'}}>{error}</span>
                    </div>
                    <div className="form-group checkbox-reset">
                      <label className="custom-checkbox mb-0">
                        <input type="checkbox" name="#" /> <span className="checkmark" /> Keep me signed in</label> <a href="#">Reset password</a>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-second-2 btn-submit full-width"  onClick={(e) => onSubmit(e)}>Sign in</button>
                    </div>
                    <div className="form-group text-center"> <span>or</span>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-second-2 btn-facebook full-width">
                        <img src="assets/img/facebook-logo.svg" alt="btn logo" />Continue with Facebook</button>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-second-2 btn-google full-width">
                        <img src="assets/img/google-logo.png" alt="btn logo" />Continue with Google</button>
                    </div>
                    <div className="form-group text-center mb-0"> <a href="register">Create your account</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

		</Fragment>
	)
}

export default Login
