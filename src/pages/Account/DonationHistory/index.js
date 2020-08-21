import React, { Fragment , useEffect} from 'react'
import MainHeader from '../../../layout/Header/MainHeader'
import SideBar from '../SideBar'
import { ALL_DONATION_PRODUCT_HISTORY_SUCCESS, ALL_DONATION_PRODUCT_HISTORY_FAIL} from "../../../actions/types";
import {useSelector, useDispatch} from 'react-redux';
import {SERVER_URL,IMAGE_URL} from '../../../components/utils/config';
import Footer from '../../../layout/Footer';
const DonationHistory = () => {
  const allDonationProductHistory = useSelector((state) => state.donationProduct.allDonationProductHistory);
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))
 
  useEffect(() => {
     // get all donation product
     fetch(`${SERVER_URL}api/donationProduct/user-product`, {
       method: "GET",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
          "X-Auth-Token": user.token,
       },
     })
       .then((response) => response.json())
       .then((json) => {
         dispatch({
           type: ALL_DONATION_PRODUCT_HISTORY_SUCCESS,
           payload: json.product,
         });
       })
       .catch((error) => {
         dispatch({
           type: ALL_DONATION_PRODUCT_HISTORY_FAIL,
         });
       });
}, []);


  
  
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
                    <li className="active">Donation History</li>
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
                      {/* <div className="main-box padding-20 side-blog mb-xl-20">
                        <h5 className="text-light-black">Popular Donation</h5>
                        <article className="side-post pb-xl-20 mb-xl-20 u-line">
                          <div className="thumb-img">
                            <a href="blog-details">
                              <img src="assets/img/blog/sblog1.jpg" alt="thumb-img" />
                            </a>
                          </div>
                          <div className="content-wrap">
                            <div className="entry-meta-content">
                              <h6 className="entry-title">
                                <a href="blog-details" className="text-light-black">Best Jwellary blog in Brooklyn</a>
                              </h6>
                              <div className="entry-tye"> <span className="text-light-white fw-400">06 Jan 2020</span>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="side-post pb-xl-20 mb-xl-20 u-line">
                          <div className="thumb-img">
                            <a href="blog-details">
                              <img src="assets/img/blog/sblog2.jpg" alt="thumb-img" />
                            </a>
                          </div>
                          <div className="content-wrap">
                            <div className="entry-meta-content">
                              <h6 className="entry-title">
                                <a href="blog-details" className="text-light-black">15 Best Italian Rings you must try</a>
                              </h6>
                              <div className="entry-tye"> <span className="text-light-white fw-400">02 Feb 2020</span>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="side-post pb-xl-20 mb-xl-20 u-line">
                          <div className="thumb-img">
                            <a href="blog-details">
                              <img src="assets/img/blog/sblog3.jpg" alt="thumb-img" />
                            </a>
                          </div>
                          <div className="content-wrap">
                            <div className="entry-meta-content">
                              <h6 className="entry-title">
                                <a href="blog-details" className="text-light-black">Best Gold Product you must try</a>
                              </h6>
                              <div className="entry-tye"> <span className="text-light-white fw-400">05 Jan 2020</span>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="side-post">
                          <div className="thumb-img">
                            <a href="blog-details">
                              <img src="assets/img/blog/sblog4.jpg" alt="thumb-img" />
                            </a>
                          </div>
                          <div className="content-wrap">
                            <div className="entry-meta-content">
                              <h6 className="entry-title">
                                <a href="blog-details" className="text-light-black">Best Diamond blog in Brooklyn</a>
                              </h6>
                              <div className="entry-tye"> <span className="text-light-white fw-400">21 Mar 2020</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div> */}
                      {/* <div className="main-box padding-20 blog-tags mb-xl-20">
                        <h5 className="text-light-black">Tags</h5>
                        <a href="#">#Donation</a>
                        <a href="#">#Education</a>
                        <a href="#">#Handicraft</a>
                        <a href="#">#Paintings</a>
                        <a href="#">#Medival</a>
                        <a href="#">#Trending</a>
                        <a href="#">#Health</a>
                        <a href="#">#Luxary</a>
                        <a href="#">#Rings</a>
                        <a href="#">#Pearl</a>
                        <a href="#">#Luxary</a>
                        <a href="#">#Bestseller</a>
                        <a href="#">#Low Cost</a>
                      </div> */}
                      <SideBar/>
                    </div>
                  </aside>
                  <div className="col-xl-9 col-lg-8">
                    <div className=" full-width">
                      <div className="row">
                        {allDonationProductHistory.length > 0 ? allDonationProductHistory.map((item, index) =>
                        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                        <div className="sa-causes-single sa-causes-single-2">
                          <div className="entry-thumb">
                            <img src={IMAGE_URL + item.product_image} alt="img" className="img-fluid full-width" />
                            {/* <div className="dontaion-category"><a href="#">Education</a></div> */}
                          </div>
                          <div className="causes-details-wrap">
                            <div className="causes-details">
                        <h5><a href="#">{item.product_name}</a></h5>
                        <p>{item.product_description}</p>
                              {/* <div className="cause-progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{width: '17%'}}>
                                  <span>17%</span>
                                </div>
                              </div> */}
                              {/* <div className="causes-amount">
                                <div className="left">
                                  <p>Raised</p>
                                  <span>$4585.00</span>
                                </div>
                                <div className="right">
                                  <p>Goal</p>
                                  <span>$4585.00</span>
                                </div>
                              </div> */}
                            </div>
                          </div>
                          <div className="btn-area text-center">
                            <a className="btn-donation text-btn" disabeled href="#">Status: {item.status == '1' ? 'Approved' : 'Pending' }</a>
                          </div>
                        </div>
                      </div>
                      
                        
                        ) : null}
                         </div>
                    </div>
                    {/* <div className="custom-pagination align-item-center">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item active"><a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
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

export default DonationHistory
