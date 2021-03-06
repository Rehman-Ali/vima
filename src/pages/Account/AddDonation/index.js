import React, { Fragment , useState, Component, useRef} from "react";
import MainHeader from "../../../layout/Header/MainHeader";
import SideBar from "../SideBar";
// import {useAlert} from 'react-alert';
import {SERVER_URL} from '../../../components/utils/config';
import axios from 'axios';
import Footer from "../../../layout/Footer";
const AddDonation = () => {

 

  // :
  // const alert = useAlert();
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product_name, setProduct_name] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  
  
  // for error handling
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState( '');
  const [product_nameError, setProduct_nameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [stateError, setStateError] = useState('');
  const [cityError, setCityError] = useState('');
  const [descriptioError, setDescriptionError] = useState('');
  
 

const onChangeName= (e) =>{
  setNameError('')
  setName(e.target.value);
  
}

const onChangeEmail= (e) =>{
  setEmailError('')
  setEmail(e.target.value);
  
}
const onChangeProduct_name= (e) =>{
  setProduct_nameError('')
  setProduct_name(e.target.value);
  
}
const onChangeAddress= (e) =>{
  setAddressError('')
  setAddress(e.target.value);
  
}
const onChangePhone= (e) =>{
  setPhoneError('')
  setPhone(e.target.value);
  
}
const onChangeCountry= (e) =>{
  setCountryError('')
  setCountry(e.target.value);
  
}
const onChangeState= (e) =>{
  setStateError('')
  setState(e.target.value);
  
}
const onChangeCity= (e) =>{
  setCityError('')
  setCity(e.target.value);
  
}
const onChangeDescription= (e) =>{
  setDescriptionError('')
  setDescription(e.target.value);
  
}


const onFileChange =(event) => {
	let images = [];
    	for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif|PNG|JPEG|JPG)$/))
        // this.setState({ images, message })
	setImages(images)
}



const onSubmit = async(e) => {
  e.preventDefault();
 

  if (name === "") {
    setNameError("Please Enter Name!");
  } else if (phone === "") {
    setPhoneError("Please Enter phone!");
  }else if (country === "") {
    setCountryError("Please Enter country!");
  }else if (state === "") {
    setStateError("Please Enter state!");
  }else if (city === "") {
    setCityError("Please Enter city!");
  }else if (address === "") {
    setAddressError("Please Enter address!");
  }else if (description === "") {
    setDescriptionError("Please Enter description!");
  }else {
    
  
    var formData = new FormData();
    const uploaders = images.map(image => {
				  const data = new FormData();
					data.append("image", image, image.name);
					data.append('name',name)
					data.append('phone',phone)
					data.append('country',country)
					data.append('state',state)
					data.append('description',description)
					data.append('city',city)
					data.append('address',address)
					data.append('product_name',product_name)
					data.append('user_id',user.user_id)
					
			    	// Make an AJAX upload request using Axios`
			    	return axios.post(`${SERVER_URL}api/donationProduct/upload`, data)
			    	.then(response => {
						console.log('response ', response)
					})
				});
		  

   }
     
};
 

 
 
 
  return (
    <Fragment>
      {/* Navigation */}
      <MainHeader />
      {/* breadcrumb */}
      <div className="breadcrumb-area">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="breadcrumb-content">
            <h2>User Account</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li className="active">Add Donation</li>
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
                <SideBar />
              </div>
            </aside>
            <div className="col-xl-9 col-lg-8">
              <div className="full-width">
                <div className="row" style={{ marginLeft: "20px" }}>
                  <div className="col-xl-12 col-lg-12">
                    <div className="">
                                
                    {/* <form  onSubmit={(e) => onSubmit(e)}> */}
                      <form  >
                        <h4 className="text-light-black fw-600">
                        Add Donation
                        </h4>
                        <div className="col-sm-12">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
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
                              </div>
                              <div className="col-md-6 col-sm-12">
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
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label className="text-light-white fs-14">
                                    Phone No
                                  </label>
                                  <input
                                    type="text"
                                      name="phone"
                                      value={phone}
                                      onChange={(e) => onChangePhone(e)}

                                    className="form-control form-control-submit"
                                    placeholder="Enter Your Phone"
                                    required
                                  />
                                  <p style={{ color: "red", paddingLeft: "10px" }}>
                              {phoneError}
                            </p>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                  <label className="text-light-white fs-14">
                                   Product Name 
                                  </label>
                                  <input
                                    type="text"
                                      name="Product Name"
                                      value={product_name}
                                      onChange={(e) => onChangeProduct_name(e)}
                                    className="form-control form-control-submit"
                                    placeholder="Enter Product Name"
                                    
                                  />
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <div className="form-group">
                                  <label className="text-light-white fs-14">
                                    Country
                                  </label>
                                  <input
                                    type="text"
                                      name="country"
                                      value={country}
                                      onChange={(e) => onChangeCountry(e)}

                                    className="form-control form-control-submit"
                                    placeholder="Enter Your Country"
                                    required
                                  />
                                  <p style={{ color: "red", paddingLeft: "10px" }}>
                              {countryError}
                            </p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="form-group">
                                  <label className="text-light-white fs-14">
                                    State
                                  </label>
                                  <input
                                    type="text"
                                      name="state"
                                      value={state}
                                      onChange={(e) => onChangeState(e)}
                                    className="form-control form-control-submit"
                                    placeholder="Enter Your State"
                                    required
                                  />
                                  <p style={{ color: "red", paddingLeft: "10px" }}>
                              {stateError}
                            </p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="form-group">
                                  <label className="text-light-white fs-14">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={(e) => onChangeCity(e)}
                                    className="form-control form-control-submit"
                                    placeholder="Enter Your city"
                                    required
                                  />
                                  <p style={{ color: "red", paddingLeft: "10px" }}>
                              {cityError}
                            </p>
                            
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                Your Address
                              </label>
                              <input
                                type="text"
                                id="password-field"
                                name="address"
                                value={address}
                                onChange={(e) => onChangeAddress(e)}
                                className="form-control form-control-submit"
                                placeholder="Enter your Address"
                                required
                              />
                              <p style={{ color: "red", paddingLeft: "10px" }}>
                              {addressError}
                            </p>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                Description
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                cols="30"
                                rows="8"
                                placeholder="Description or Message about Donation..."
                                name="description"
                                onChange={(e) => onChangeDescription(e)}
                                value={description}
                              ></textarea>
                              <p style={{ color: "red", paddingLeft: "10px" }}>
                              {descriptioError}
                            </p>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                Attach File
                              </label>
                              <input
                              type="file" onChange={onFileChange}
                                // type="file"
                                // //   name="name"
                                // //   value={name}
                                // //   onChange={(e) => onChangeName(e)}
                                // name="file" 
                                // onChange={(e) => onFileChange(e)}
                                //  multiple

                                // className="form-control form-control-submit"
                                // placeholder="Enter Your Name"
                                // required
                                
                              />
                              {/* <p style={{ color: "red", paddingLeft: "10px" }}>
                              {emailError}
                            </p> */}
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="form-group">
                              <button
                                // type="submit"
                                className="btn-second-2 btn-submit full-width"
                                onClick={(e) => onSubmit(e)}
                              >
                                submit
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
      </section>
      <hr/>
            {/* {data.path && <div><textarea value={data.path} onChange={uploadFile} /></div>}
            {data.path && <img src={data.path} alt={data.name} />} */}

      {/* Sucscriber */}
      {/* END Subscriber */}
      {/* footer */}
     
     <Footer/>
      {/* footer */}
      {/* modal boxes */}
      <div className="modal fade" id="address-box">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
              <h4 className="modal-title fw-700">Change Address</h4>
            </div>
            <div className="modal-body">
              <div className="location-picker">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a new address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="search-box">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
              <div className="search-box p-relative full-width">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pizza, Burger, Chinese"
                />
              </div>
            </div>
            <div className="modal-body" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddDonation;


// import React, { Fragment , useState, Component, useRef} from "react";
// import MainHeader from "../../../layout/Header/MainHeader";
// import SideBar from "../SideBar";
// // import {useAlert} from 'react-alert';
// import {SERVER_URL} from '../../../components/utils/config';
// import axios from 'axios';
// // import React, { Component } from 'react';
// // import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/';

// class AddDonation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         	images: [],
//         	imageUrls: [],
//         	message: ''
//         }
//     }

//     selectFiles = (event) => {
//     	let images = [];
//     	for (var i = 0; i < event.target.files.length; i++) {
//             images[i] = event.target.files.item(i);
//         }
//         images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
//         let message = `${images.length} valid image(s) selected`
//         this.setState({ images, message })
//     }

//     uploadImages = () => {
    
	//     	const uploaders = this.state.images.map(image => {
	// 		    const data = new FormData();
	// 		    data.append("image", image, image.name);
				
	// 	    	// Make an AJAX upload request using Axios`
	// 	    	return axios.post(`${SERVER_URL}api/donationProduct/upload`, data)
	// 	    	.then(response => {
	// 				this.setState({imageUrl: [response.data.imageUrls, ...this.state.imageUrls]});
	// 			})
	// 		});

// 	 	// Once all the files are uploaded 
// 		axios.all(uploaders).then(() => {
// 			console.log('done');
// 		}).catch(err => alert(err.message));

//     }

//     render() {
//         return (
//         	<div>
// 	        	<br/>
// 	        	<div className="col-sm-12">
//         			<h1>Image Uploader</h1><hr/>
// 	        		<div className="col-sm-4">
// 		        		<input className="form-control " type="file" onChange={this.selectFiles} multiple/>
// 		        	</div>
// 		        	{ this.state.message? <p className="text-info">{this.state.message}</p>: ''}
// 		        	<br/><br/><br/>
// 		        	<div className="col-sm-4">
// 		            	<button className="btn btn-primary" value="Submit" onClick={this.uploadImages}>Submit</button>
// 		        	</div>
// 	            </div>
// 	            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><br/>
// 	            <div className="row col-lg-12">
// 		        	{ 
// 			          	this.state.imageUrls.map((url, i) => (
// 				          		<div className="col-lg-2" key={i}>
// 				          			<img src={BASE_URL + url} className="img-rounded img-responsive" alt="not available"/><br/>
// 				          		</div>
// 				          	))
// 			        }
// 		        </div>
// 		    </div>
//         );
//     }
// }

 			
// export default AddDonation;