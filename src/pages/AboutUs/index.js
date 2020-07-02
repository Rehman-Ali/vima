import React, { Fragment,useEffect } from 'react'
import {loadHeaderScript, loadHeaderCSS} from '../../components/utils/LoadScript';
import MainHeader from '../../layout/Header/MainHeader';
const AboutUS = () => {
    
  useEffect(() =>{
    loadHeaderScript();
    // loadHeaderCSS();
},[])
  
  return (
        <Fragment>
           
  {/* Navigation */}
  <MainHeader/>
   {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Our History</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li className="active">About us</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/* about us */}
  <section className="aboutus section-padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="history-title mb-md-40">
            <h2 className="text-light-black">See what we do for the poor people and <span className="text-light-green">the children</span></h2>
            <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
              vel facilisis.</p>
            <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
            <a href="#" className="btn-solid with-line btn-big mt-20"><span>Learn More <i className="fas fa-caret-right" /></span></a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <div className="histry-img mb-xs-20">
                <img src="assets/img/about/about1.jpg" className="img-fluid full-width" alt="Histry" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <div className="histry-img mb-xl-20">
                <img src="assets/img/about/about2.jpg" className="img-fluid full-width" alt="Histry" />
              </div>
              <div className="histry-img">
                <img src="assets/img/about/about3.jpg" className="img-fluid full-width" alt="Histry" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about us */}
  {/* How It Woks */}
  <section className="section-padding how-it-works bg-theme-primary">
    <div className="container">
      <div className="section-header-style-2">
        <h6 className="text-light-green sub-title">Our Process</h6>
        <h3 className="text-light-black header-title">How Does It Work</h3>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="how-it-works-box arrow-1">
            <div className="how-it-works-box-inner"> <span className="icon-box">
                <img src="assets/img/how1.png" alt="icon" />
                <span className="number-box">01</span>
              </span>
              <h6>Search</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="how-it-works-box arrow-2">
            <div className="how-it-works-box-inner"> <span className="icon-box">
                <img src="assets/img/how2.png" alt="icon" />
                <span className="number-box">02</span>
              </span>
              <h6>Select</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="how-it-works-box arrow-1">
            <div className="how-it-works-box-inner"> <span className="icon-box">
                <img src="assets/img/how3.png" alt="icon" />
                <span className="number-box">03</span>
              </span>
              <h6>Order</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="how-it-works-box">
            <div className="how-it-works-box-inner"> <span className="icon-box">
                <img src="assets/img/how4.png" alt="icon" />
                <span className="number-box">04</span>
              </span>
              <h6>Enjoy</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* How It Woks */}
  {/*Testimonail*/}
  <section className="feedback-area-two section-padding bg-custom-primary">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left text-center">
            <h3 className="text-white header-title">People Say About US</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="feedback-slider p-relative swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="feedback-item-two">
                  <img src="assets/img/testimonial/testimonial1.jpg" alt="Feedback" />
                  <p className="text-white fs-16">I like Ecom and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra
                    maecenas accumsan lacus vel facilisist amet, sed do eiusm.</p>
                  <h5 className="text-color-secondary fw-600 no-margin">Janadhon doe</h5>
                  <span className="text-color-secondary fw-400">Co-founder</span>
                </div>
              </div>
            </div>
            {/* Add Arrows */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Testimonail End*/}
  {/* Blog section */}
  <section className="section-padding blog-section bg-theme-primary">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left title">
            <h3 className="text-light-black header-title">Our Latest News</h3>
            <span className="fs-14"><a href="#">See All</a></span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <article className="blog-item blog-item-box">
            <div className="blog-item-img">
              <img className="blog-img" src="assets/img/news/article4.jpg" alt="img" />
              <ul className="blog-item-badge">
                <li><a href="#">Water</a> </li>
                <li><a href="#">Health</a></li>
              </ul>
            </div>
            <div className="blog-item-content">
              <h5 className="blog-item-title"><a href="#">Save the Children's Role in Fight Against Malnutrition Hailed</a></h5>
              <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
              <div className="blog-item-details">
                <span className="blog-item-date"><i className="fas fa-calendar-week" /> 23 Jan' 19</span>
                <span><i className="fas fa-comment-dots" /> 501</span></div>
            </div>
          </article>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <article className="blog-item blog-item-box">
            <div className="blog-item-img">
              <img className="blog-img" src="assets/img/news/article3.jpg" alt="img" />
              <ul className="blog-item-badge">
                <li><a href="#">Water</a> </li>
                <li><a href="#">Health</a></li>
              </ul>
            </div>
            <div className="blog-item-content">
              <h5 className="blog-item-title"><a href="#">Save the Children's Role in Fight Against Malnutrition Hailed</a></h5>
              <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
              <div className="blog-item-details">
                <span className="blog-item-date"><i className="fas fa-calendar-week" /> 23 Jan' 19</span>
                <span><i className="fas fa-comment-dots" /> 501</span></div>
            </div>
          </article>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <article className="blog-item blog-item-box">
            <div className="blog-item-img">
              <img className="blog-img" src="assets/img/news/article2.jpg" alt="img" />
              <ul className="blog-item-badge">
                <li><a href="#">Water</a> </li>
                <li><a href="#">Health</a></li>
              </ul>
            </div>
            <div className="blog-item-content">
              <h5 className="blog-item-title"><a href="#">Save the Children's Role in Fight Against Malnutrition Hailed</a></h5>
              <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
              <div className="blog-item-details">
                <span className="blog-item-date"><i className="fas fa-calendar-week" /> 23 Jan' 19</span>
                <span><i className="fas fa-comment-dots" /> 501</span></div>
            </div>
          </article>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <article className="blog-item blog-item-box">
            <div className="blog-item-img">
              <img className="blog-img" src="assets/img/news/article1.jpg" alt="img" />
              <ul className="blog-item-badge">
                <li><a href="#">Water</a> </li>
                <li><a href="#">Health</a></li>
              </ul>
            </div>
            <div className="blog-item-content">
              <h5 className="blog-item-title"><a href="#">Save the Children's Role in Fight Against Malnutrition Hailed</a></h5>
              <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
              <div className="blog-item-details">
                <span className="blog-item-date"><i className="fas fa-calendar-week" /> 23 Jan' 19</span>
                <span><i className="fas fa-comment-dots" /> 501</span></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  {/* END/BLOG Section */}
  {/* Sucscriber */}
  <section className="section-padding block_newsletter">
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
                <img src="assets/img/logo.png" className="img-fluid" alt="img" />
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

export default AboutUS
