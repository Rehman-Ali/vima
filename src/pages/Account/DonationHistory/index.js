import React, { Fragment , useEffect} from 'react'
import MainHeader from '../../../layout/Header/MainHeader'
import SideBar from '../SideBar'
import { ALL_DONATION_PRODUCT_HISTORY_SUCCESS, ALL_DONATION_PRODUCT_HISTORY_FAIL} from "../../../actions/types";
import {useSelector, useDispatch} from 'react-redux';
import {SERVER_URL,IMAGE_URL} from '../../../components/utils/config';
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
            <section className="section-padding bg-theme-primary block_newsletter">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-header-left text-center">
                      <h3 className="text-light-black header-title">Grab Our Newsletter</h3>
                      <p>To receive latest offers and discounts from the shop. </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="subscribe-wrapper">
                      <form id="subscribe-form" method="post" action="#">
                        <div className="subscribe-content">
                          <input type="text" name="subscribe-input" id="subscribe-input" defaultValue placeholder="Enter Your Email Address" className="form-control input-text required-entry validate-email" />
                          <button className="button" type="submit"><span>Subscribe</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END Subscriber */}
            {/* footer */}
            <footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">
              <div className="u-line instagram-slider swiper-container">
                <ul className="hm-list hm-instagram swiper-wrapper">
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta1.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta2.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta3.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta4.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta5.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta6.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta7.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon"> <span><i className="fab fa-instagram text-red-light" /></span>
                    </div>
                  </li>
                  <li className="swiper-slide">
                    <a href="#">
                      <img src="assets/img/insta/insta6.jpg" alt="instagram" />
                    </a>
                    <div className="insta-icon">
                      <div><i className="fab fa-instagram text-red-light" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="container-fluid custom-container">
                <div className="row">
                  <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-contact">
                      <h6 className="text-custom-white">About Us</h6>
                      <div className="logo mb-xl-20">
                        <a href="#">
                          <img src="assets/img/logo1.png" className="img-fluid" alt="img" />
                        </a>
                      </div>
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                  </div>
                  <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                      <h6 className="text-custom-white">Get to Know Us</h6>
                      <ul>
                        <li><a href="about" className="text-white fw-500">About Us</a>
                        </li>
                        <li><a href="blog-left" className="text-white fw-500">Blog</a>
                        </li>
                        <li><a href="#" className="text-white fw-500">Socialize</a>
                        </li>
                        <li><a href="" className="text-white fw-500">Ecom</a>
                        </li>
                        <li><a href="#" className="text-white fw-500">Perks</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                      <h6 className="text-custom-white">Let Us Help You</h6>
                      <ul>
                        <li><a href="#" className="text-white fw-500">Account Details</a>
                        </li>
                        <li><a href="order-details" className="text-white fw-500">Order History</a>
                        </li>
                        <li><a href="#" className="text-white fw-500">Find Product</a>
                        </li>
                        <li><a href="login" className="text-white fw-500">Login</a>
                        </li>
                        <li><a href="#" className="text-white fw-500">Track order</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                      <h6 className="text-custom-white">Get to Know Us</h6>
                      <ul>
                        <li><a href="about" className="text-white fw-500">About Us</a>
                        </li>
                        <li><a href="blog-details" className="text-white fw-500">Blog</a>
                        </li>
                        <li><a href="#" className="text-white fw-500">Socialize</a>
                        </li>
                        <li><a href="" className="text-white fw-500">Ecom</a>
                        </li>
                        <li><a href="#" className="text-white fw-500">Perks</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                    <div className="footer-links">
                      <h6 className="text-custom-white">Contact info</h6>
                      <ul className="contact-info">
                        <li>
                          <a href="#" className="text-white"> <span><i className="pe-7s-timer" /></span>
                            Monday - Friday: 9:00 AM - 06:00 PM</a>
                        </li>
                        <li>
                          <a href="#" className="text-white"> <span><i className="pe-7s-mail" /></span>
                            info@example.com</a>
                        </li>
                        <li>
                          <a href="#" className="text-white"> <span><i className="pe-7s-call" /></span>
                            (+348) 123 456 7890</a>
                        </li>
                        <li>
                          <a href="#" className="text-white"> <span><i className="pe-7s-map-marker" /></span>
                            (+348) 123 456 7890</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="copyright bg-black">
              <div className="container-fluid custom-container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="payment-logo mb-md-20">
                      <div className="payemt-icon">
                        <img src="assets/img/footer-bottom-img.png" alt="#" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center medewithlove align-self-center"> <a href="#" className="text-custom-white">Made with Real <i className="fas fa-heart" /> Slidesigma</a>
                  </div>
                  <div className="col-lg-4">
                    <div className="copyright-text"> <span className="text-white">© <a href="#" className="text-white">Slidesigma</a> - 2020 | All Right Reserved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
