import React, { Fragment, useState } from 'react'
import MainHeader from '../../../layout/Header/MainHeader'
import SideBar from '../SideBar'
import {SERVER_URL} from '../../../components/utils/config';
import Footer from '../../../layout/Footer';
// import {useAlert} from 'react-alert';

const Profile = () => {
  
  // const alert = useAlert();
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(user !== undefined ? user.name : '');
  const [email, setEmail] = useState( user !== undefined ? user.email : '');
  
  // for error handling
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState( '');
  
 

const onChangeName= (e) =>{
  setNameError('')
  setName(e.target.value);
  
}

const onChangeEmail= (e) =>{
  setEmailError('')
  setEmail(e.target.value);
  
}
// const onChangeDescription= (e) =>{
//   setDescriptionError('')
//   setDescription(e.target.value);
  
// }





const onSubmit = (e) => {
  e.preventDefault();

  if (name === "") {
    setNameError("Please Enter Name!");
  } else if (email === "") {
    setEmailError("Please Enter Email!");
  } else {
    

    const data = {
      name: name ,
      email: email,
        
    };


    fetch(`${SERVER_URL}api/user/profile`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
       'X-Auth-Token': user.token,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => {
        // alert.success(json.msg)
        // setLoading(false)
        // props.history.push('/donation-product')
      })
      .catch(error => {
        
        // alert.error('Invalid Activity Try Again!')
      });

  

   }
     
};
 

  return (
		<Fragment>
			
    {/* Navigation */}
    <MainHeader/>
           {/* breadcrumb */}
            <div className="breadcrumb-area">
              <div className="overlay overlay-bg" />
              <div className="container">
                <div className="breadcrumb-content">
                  <h2>User Account</h2>
                  <ul>
                    <li><a href="">Home</a>
                    </li>
                    <li className="active">Account</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* breadcrumb */}
            {/* Blog */}
            <section className="our-articles bg-light-theme section-padding ">
              <div className="container-fluid custom-container">
                <div className="row">
                  <aside className="col-xl-3 col-lg-4">
                    <div className="side-bar mb-md-40">
                      
                      <SideBar/>
                    </div>
                  </aside>
                  <div className="col-xl-9 col-lg-8">
                <div className="full-width">
                      <div className="row" style={{marginLeft:'20px'}}>
                <div className="">
                <div className="login-sec">
                  <div className="login-box">
                    <form>
                      <h4 className="text-light-black fw-600">
                        Update your account
                      </h4>
                      <div className="row" style={{marginLeft:'20px'}} >
                        <div className="col-12">
                          <div className="form-group">
                            <label className="text-light-white fs-14">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={(e) => onChangeName(e)}
                            
                              className="form-control form-control-submit"
                              placeholder="Enter Your Name"
                              required
                            />
                            <p style={{ color: "red", paddingLeft: "10px" }}>
                              {nameError}
                            </p>
                          </div>
                          <div className="form-group">
                            <label className="text-light-white fs-14">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => onChangeEmail(e)}
                              className="form-control form-control-submit"
                              placeholder="Email I'd"
                              required
                            />
                            <p style={{ color: "red", paddingLeft: "10px" }}>
                              {emailError}
                            </p>
                          </div>
                          {/* <div className="form-group">
                            <label className="text-light-white fs-14">
                              Password (8 character minimum)
                            </label>
                            <input
                              type="password"
                              id="password-field"
                            //   name="password"
                            //   value={password}
                            //   onChange={(e) => onChangePassword(e)}
                              className="form-control form-control-submit"
                              defaultValue="password"
                              placeholder="Password"
                              required
                            />
                           
                            
                          </div> */}
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn-second-2 btn-submit full-width"
                              onClick={(e) => onSubmit(e)}
                            >
                             Update  account
                            </button>
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
              </div>
            </section>
            {/* Sucscriber */}
          <Footer/>
          
            {/* footer */}
            {/* modal boxes */}
            <div className="modal fade" id="address-box">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title fw-700">Change Address</h4>
                  </div>
                  <div className="modal-body">
                    <div className="location-picker">
                      <input type="text" className="form-control" placeholder="Enter a new address" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="search-box">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="search-box p-relative full-width">
                      <input type="text" className="form-control" placeholder="Pizza, Burger, Chinese" />
                    </div>
                  </div>
                  <div className="modal-body" />
                </div>
              </div>
            </div>

		</Fragment>
	)
}

export default Profile;

