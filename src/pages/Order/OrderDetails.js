import React, { Fragment } from 'react'
import MainHeader from '../../layout/Header/MainHeader'

const OrderDetails = () => {
	return (
		<Fragment>
		
  <div id="banner-adv" className="banner-adv">
    <a href="#"> <span className="text">Get FREE DELIVERY on your first order.</span>
    </a> <span className="close-banner" />
  </div>
  {/* Navigation */}
 <MainHeader/>
  {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Order Details</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li><a href="shop-left">Shop</a>
          </li>
          <li className="active">Orders</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/* tracking map */}
  <section className="checkout-page section-padding bg-light-theme">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-md-12">
          <div className="tracking-sec">
            <div className="tracking-details padding-20 p-relative">
              <h5 className="text-light-black fw-600">Sports Shoes</h5>
              <span className="text-light-white">Estimated Delivery time</span>
              <h2 className="text-light-black fw-700 no-margin">9:00pm-9:10pm</h2>
              <div id="add-listing-tab" className="step-app">
                <ul className="step-steps">
                  <li className="done">
                    <a href="javascript:void(0)"> <span className="number" />
                      <span className="step-name">Order sent<br />8:38pm</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="javascript:void(0)"> <span className="number" />
                      <span className="step-name">In the works</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> <span className="number" />
                      <span className="step-name">Out of delivery</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> <span className="number" />
                      <span className="step-name">Delivered</span>
                    </a>
                  </li>
                </ul>
                <button type="button" className="fullpageview text-light-black fw-600" data-modal="modal-12">Full Page View</button>
              </div>
            </div>
            <div className="tracking-map">
              <div id="pickupmap" />
            </div>
          </div>
          {/* recipt */}
          <div className="recipt-sec padding-20">
            <div className="recipt-name title u-line full-width mb-xl-20">
              <div className="recipt-name-box">
                <h5 className="text-light-black fw-600 mb-2">Sport Shoes</h5>
                <p className="text-light-white ">Estimated Delivery time</p>
              </div>
              <div className="countdown-box">
                <div className="time-box"> <span id="mb-hours" />
                </div>
                <div className="time-box"> <span id="mb-minutes" />
                </div>
                <div className="time-box"> <span id="mb-seconds" />
                </div>
              </div>
            </div>
            <div className="u-line mb-xl-20">
              <div className="row">
                <div className="col-lg-4">
                  <div className="recipt-name full-width padding-tb-10 pt-0">
                    <h5 className="text-light-black fw-600">Delivery (ASAP) to:</h5>
                    <span className="text-light-white ">Jhon Moxley</span>
                    <span className="text-light-white ">Home</span>
                    <span className="text-light-white ">314 79th St</span>
                    <span className="text-light-white ">Rite Aid, Brooklyn, NY, 11209</span>
                    <p className="text-light-white ">(347) 123456789</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="recipt-name full-width padding-tb-10 pt-0">
                    <h5 className="text-light-black fw-600">Delivery instructions</h5>
                    <p className="text-light-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="ad-banner padding-tb-10 h-100">
                    <img src="assets/img/shop/check1.jpg" className="img-fluid full-width" alt="banner-adv" />
                  </div>
                </div>
              </div>
            </div>
            <div className="u-line mb-xl-20">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="text-light-black fw-600 title">Your Order <span><a href="#" className="fs-12">Print recipt</a></span></h5>
                  <p className="title text-light-white">Jan 15, 2020 8:38pm <span className="text-light-black">Order #123456789012345</span>
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="checkout-product">
                    <div className="img-name-value">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/img/shop/sp1.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="product-value"> <span className="text-light-white">1</span>
                      </div>
                      <div className="product-name"> <span><a href="#" className="text-light-white">Belt</a></span>
                      </div>
                    </div>
                    <div className="amount">
                      <span className="text-light-white">ID: #2354</span>
                    </div>
                    <div className="Category">
                      <span className="text-light-white">Handmade</span>
                    </div>
                    <div className="price"> <span className="text-light-white">$20.99</span>
                    </div>
                  </div>
                  <div className="checkout-product">
                    <div className="img-name-value">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/img/shop/sp2.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="product-value"> <span className="text-light-white">2</span>
                      </div>
                      <div className="product-name"> <span><a href="#" className="text-light-white">Shoes</a></span>
                      </div>
                    </div>
                    <div className="amount">
                      <span className="text-light-white">ID: #2354</span>
                    </div>
                    <div className="Category">
                      <span className="text-light-white">Handmade</span>
                    </div>
                    <div className="price"> <span className="text-light-white">$35.50</span>
                    </div>
                  </div>
                  <div className="checkout-product">
                    <div className="img-name-value">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/img/shop/sp3.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="product-value"> <span className="text-light-white">5</span>
                      </div>
                      <div className="product-name"> <span><a href="#" className="text-light-white">Jeans</a></span>
                      </div>
                    </div>
                    <div className="amount">
                      <span className="text-light-white">ID: #2354</span>
                    </div>
                    <div className="Category">
                      <span className="text-light-white">Handmade</span>
                    </div>
                    <div className="price"> <span className="text-light-white">$95.50</span>
                    </div>
                  </div>
                  <div className="checkout-product">
                    <div className="img-name-value">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/img/shop/sp4.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="product-value"> <span className="text-light-white">6</span>
                      </div>
                      <div className="product-name"> <span><a href="#" className="text-light-white">T-Shirt</a></span>
                      </div>
                    </div>
                    <div className="amount">
                      <span className="text-light-white">ID: #2354</span>
                    </div>
                    <div className="Category">
                      <span className="text-light-white">Handmade</span>
                    </div>
                    <div className="price"> <span className="text-light-white">$130.5</span>
                    </div>
                  </div>
                  <div className="checkout-product">
                    <div className="img-name-value">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/img/shop/sp5.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="product-value"> <span className="text-light-white">2</span>
                      </div>
                      <div className="product-name"> <span><a href="#" className="text-light-white">Purse</a></span>
                      </div>
                    </div>
                    <div className="amount">
                      <span className="text-light-white">ID: #2354</span>
                    </div>
                    <div className="Category">
                      <span className="text-light-white">Handmade</span>
                    </div>
                    <div className="price"> <span className="text-light-white">$25.45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="payment-method mb-md-40">
                  <h5 className="text-light-black fw-600">Payment Method</h5>
                  <div className="method-type"> <i className="far fa-credit-card text-dark-white" />
                    <span className="text-light-white">Credit Card</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="price-table u-line">
                  <div className="item"> <span className="text-light-white">Item subtotal:</span>
                    <span className="text-light-white">$30.5</span>
                  </div>
                  <div className="item"> <span className="text-light-white">Delivery fee:</span>
                    <span className="text-light-white">$30.5</span>
                  </div>
                  <div className="item"> <span className="text-light-white">Tax and fees:</span>
                    <span className="text-light-white">$30.5</span>
                  </div>
                  <div className="item"> <span className="text-light-white">Driver tip:</span>
                    <span className="text-light-white">$30.5</span>
                  </div>
                </div>
                <div className="total-price padding-tb-10">
                  <h5 className="title text-light-black fw-700">Total: <span>$33.36</span></h5>
                </div>
              </div>
              <div className="col-12 d-flex"> <a href="#" className="btn-first white-btn fw-600 help-btn">Need Help?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* tracking map */}
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


		</Fragment>
	)
}

export default OrderDetails

