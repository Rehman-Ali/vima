import React, { Fragment } from 'react'
import MainHeader from '../../layout/Header/MainHeader'

const ShopDetails = () => {
	return (
		<Fragment>
		
  {/* Navigation */}
  <MainHeader/>
  {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Shop Details</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li><a href="shop-left">Shop</a>
          </li>
          <li className="active">Shop Details</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/*Shop-Details*/}
  <section className="section-padding  bg-theme-primary">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="shop-detail-image">
            <div className="detail-slider">
              <div className="swiper-container gallery-top">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#" className="popup">
                      <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                    </a>
                    <div className="shop-type-tag"> <a href="#" className="bg-custom-black type-tag">Sale</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="popup">
                      <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                    </a>
                    <div className="shop-type-tag"> <a href="#" className="bg-custom-black type-tag">Sale</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="popup">
                      <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                    </a>
                    <div className="shop-type-tag"> <a href="#" className="bg-custom-black type-tag">Sale</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="popup">
                      <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                    </a>
                    <div className="shop-type-tag"> <a href="#" className="bg-custom-black type-tag">Sale</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="popup">
                      <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                    </a>
                    <div className="shop-type-tag"> <a href="#" className="bg-custom-black type-tag">Sale</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="popup">
                      <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                    </a>
                    <div className="shop-type-tag"> <a href="#" className="bg-custom-black type-tag">Sale</a>
                    </div>
                  </div>
                </div>
                {/* Add Arrows */}
                {/* Add Arrows */}
                <div className="swiper-button-next swiper-button-white" />
                <div className="swiper-button-prev swiper-button-white" />
              </div>
              <div className="swiper-container gallery-thumbs ">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="assets/img/shop/shop-d96x96.jpg" className="img-fluid full-width" alt="slider" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/shop/shop-d96x96.jpg" className="img-fluid full-width" alt="slider" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/shop/shop-d96x96.jpg" className="img-fluid full-width" alt="slider" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/shop/shop-d96x96.jpg" className="img-fluid full-width" alt="slider" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/shop/shop-d96x96.jpg" className="img-fluid full-width" alt="slider" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/shop/shop-d96x96.jpg" className="img-fluid full-width" alt="slider" />
                  </div>
                </div>
                {/* Add Arrows */} <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="shop-detail-contents mb-md-40 mt-md-40">
            <div className="shop-detail-content-wrapper">
              <h6 className="text-custom-black">Handmade Golden Necklace Full Family Package</h6>
            </div>
            <div className="ratings d-flex mb-xl-20"> <span className="text-yellow"><i className="fas fa-star" /></span>
              <span className="text-yellow"><i className="fas fa-star" /></span>
              <span className="text-yellow"><i className="fas fa-star" /></span>
              <span className="text-dark-white"><i className="fas fa-star" /></span>
              <span className="text-dark-white"><i className="fas fa-star" /></span>
              <div className="pro-review"> <span>1 Reviews</span>
              </div>
            </div>
            <div className="price">
              <h5 className="text-custom-red price-tag">$45 <span className="text-light-white fw-400 fs-14">$50</span></h5>
            </div>
            <div className="product-full-des mb-20">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
            <div className="availibity mt-20">
              <p className="text-custom-black fw-600">Avability: <span className="text-success ml-2">In Stock</span></p>
            </div>
            <div className="quantity mb-xl-20">
              <p className="text-custom-black mb-0 mr-2 fw-600">Qty:</p>
              <div className="product-qty-input">
                <button className="minus-btn" type="button" name="button"> <i className="fas fa-minus" />
                </button>
                <input type="text" className="form-control form-control-qty text-center" name="name" defaultValue={1} />
                <button className="plus-btn" type="button" name="button"> <i className="fas fa-plus" />
                </button>
              </div>
            </div>
            <div className="shop-bottom">
              <div className="shop-meta mt-20">
                <p className="text-custom-black mb-0 fw-600">Categories:</p>
                <ul className="list-inline ml-2">
                  <li className="list-inline-item"><a href="#">Necklace</a>
                  </li>
                  <li className="list-inline-item"><a href="#">Diamond</a>
                  </li>
                  <li className="list-inline-item"><a href="#">Sale</a>
                  </li>
                </ul>
              </div>
              <div className="shop-meta mt-20">
                <p className="text-custom-black mb-0 fw-600">Tags:</p>
                <ul className="list-inline ml-2">
                  <li className="list-inline-item"><a href="#">Luxary</a>
                  </li>
                  <li className="list-inline-item"><a href="#">Diamond</a>
                  </li>
                  <li className="list-inline-item"><a href="#">New Arrivel</a>
                  </li>
                </ul>
              </div>
              <div className="product-btn mt-20"> <a href="#" className="btn-solid with-line ml-2">Add to Cart </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="shop-detail-description-sec">
            <div className="tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item"> <a className="nav-link  active" data-toggle="tab" href="#description">Description</a>
                </li>
                <li className="nav-item"> <a className="nav-link " data-toggle="tab" href="#reviews">Reviews (4)</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="description">
                  <p className=" mb-xl-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncusp</p>
                </div>
                <div className="tab-pane fade" id="reviews">
                  {/* comments */}
                  <div className="comment-box p-relative">
                    <div id="comment-box">
                      <ul className="comments">
                        <li className="comment">
                          <article>
                            <div className="comment-avatar">
                              <img src="assets/img/user/user-1.png" className="rounded-circle" alt="comment" />
                            </div>
                            <div className="comment-content">
                              <div className="comment-meta">
                                <div className="comment-meta-header">
                                  <h6 className="text-color-primary fw-500 author mb-3">Rosalina Pong</h6>
                                  <div className="post-date">
                                    <div className="date bg-custom-black">29 Jan <span className="year bg-custom-red ">2020</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="comment-meta-reply"> <a href="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</a>
                                </div>
                              </div>
                              <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li className="comment">
                          <article>
                            <div className="comment-avatar ">
                              <img src="assets/img/user/user-2.png" className="rounded-circle" alt="comment" />
                            </div>
                            <div className="comment-content">
                              <div className="comment-meta">
                                <div className="comment-meta-header">
                                  <h6 className="text-color-primary fw-500 author mb-3">Brian Wright</h6>
                                  <div className="post-date">
                                    <div className="date bg-custom-black">30Ja <span className="year bg-custom-red ">2020</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="comment-meta-reply"> <a href="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</a>
                                </div>
                              </div>
                              <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                            </div>
                          </article>
                          <ul className="children">
                            <li className="comment">
                              <article>
                                <div className="comment-avatar">
                                  <img src="assets/img/user/user-3.png" className="rounded-circle" alt="comment" />
                                </div>
                                <div className="comment-content ">
                                  <div className="comment-meta">
                                    <div className="comment-meta-header">
                                      <h6 className="text-color-primary fw-500 author mb-3">Sarah Wright</h6>
                                      <div className="post-date">
                                        <div className="date bg-custom-black ">30 Jan <span className="year bg-custom-red">2020</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="comment-meta-reply"> <a href="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</a>
                                    </div>
                                  </div>
                                  <div className="comment">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  </div>
                                </div>
                              </article>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* comments */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Shop-Details End*/}
  {/* Shop-Details-Description */}
  <section className="section-padding shop-description">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left title">
            <h3 className="text-light-black header-title ">Related Items</h3>
            <span className="fs-14">
              <a href="order-details">See all</a>
            </span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="product-box mb-md-20">
            <div className="product-img">
              <a href="shop-details">
                <img src="assets/img/shop/product1.jpg" className="img-fluid full-width" alt="product-img" />
              </a>
              <div className="product-badge">
                <div className="product-label new"> <span>Veg</span>
                </div>
              </div>
              <div className="button-group"> <a href="wishlist" data-toggle="tooltip" data-placement="left" title data-original-title="Add to wishlist" tabIndex={-1}><i className="pe-7s-like" /></a>
                <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title data-original-title="Quick View"><i className="pe-7s-search" /></span></a>
              </div>
              <div className="cart-hover">
                <a href="shop-details" className="btn-cart  fw-600" tabIndex={-1}>Add To Cart</a>
              </div>
            </div>
            <div className="product-caption text-center">
              <div className="product-status">
                <ul className="product-raised">
                  <li><strong>Distribute:</strong> 45000</li>
                  <li><strong>Goal:</strong><span className="text-highlight"> 70000</span></li>
                </ul>
                <div className="progress">
                  <div className="progress-bar progress-bar-color" style={{width: '75%'}} />
                </div>
              </div>
              <h6 className="product-title fw-500 mt-10"><a href="shop-details" className="text-color-primary">Veg Curry</a></h6>
              <div className="product-money mt-10"> <span className="text-color-primary fw-600">$90.00</span>
                <span className="text-price">$250.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="product-box mb-md-20">
            <div className="product-img">
              <a href="shop-details">
                <img src="assets/img/shop/product1.jpg" className="img-fluid full-width" alt="product-img" />
              </a>
              <div className="product-badge">
                <div className="product-label new"> <span>Veg</span>
                </div>
              </div>
              <div className="button-group"> <a href="wishlist" data-toggle="tooltip" data-placement="left" title data-original-title="Add to wishlist" tabIndex={-1}><i className="pe-7s-like" /></a>
                <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title data-original-title="Quick View"><i className="pe-7s-search" /></span></a>
              </div>
              <div className="cart-hover">
                <a href="shop-details" className="btn-cart  fw-600" tabIndex={-1}>Add To Cart</a>
              </div>
            </div>
            <div className="product-caption text-center">
              <div className="product-status">
                <ul className="product-raised">
                  <li><strong>Distribute:</strong> 45000</li>
                  <li><strong>Goal:</strong><span className="text-highlight"> 70000</span></li>
                </ul>
                <div className="progress">
                  <div className="progress-bar progress-bar-color" style={{width: '75%'}} />
                </div>
              </div>
              <h6 className="product-title fw-500 mt-10"><a href="shop-details" className="text-color-primary">Veg Curry</a></h6>
              <div className="product-money mt-10"> <span className="text-color-primary fw-600">$90.00</span>
                <span className="text-price">$250.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="product-box mb-md-20">
            <div className="product-img">
              <a href="shop-details">
                <img src="assets/img/shop/product1.jpg" className="img-fluid full-width" alt="product-img" />
              </a>
              <div className="product-badge">
                <div className="product-label new"> <span>Veg</span>
                </div>
              </div>
              <div className="button-group"> <a href="wishlist" data-toggle="tooltip" data-placement="left" title data-original-title="Add to wishlist" tabIndex={-1}><i className="pe-7s-like" /></a>
                <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title data-original-title="Quick View"><i className="pe-7s-search" /></span></a>
              </div>
              <div className="cart-hover">
                <a href="shop-details" className="btn-cart  fw-600" tabIndex={-1}>Add To Cart</a>
              </div>
            </div>
            <div className="product-caption text-center">
              <div className="product-status">
                <ul className="product-raised">
                  <li><strong>Distribute:</strong> 45000</li>
                  <li><strong>Goal:</strong><span className="text-highlight"> 70000</span></li>
                </ul>
                <div className="progress">
                  <div className="progress-bar progress-bar-color" style={{width: '75%'}} />
                </div>
              </div>
              <h6 className="product-title fw-500 mt-10"><a href="shop-details" className="text-color-primary">Veg Curry</a></h6>
              <div className="product-money mt-10"> <span className="text-color-primary fw-600">$90.00</span>
                <span className="text-price">$250.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="product-box mb-md-20">
            <div className="product-img">
              <a href="shop-details">
                <img src="assets/img/shop/product1.jpg" className="img-fluid full-width" alt="product-img" />
              </a>
              <div className="product-badge">
                <div className="product-label new"> <span>Veg</span>
                </div>
              </div>
              <div className="button-group"> <a href="wishlist" data-toggle="tooltip" data-placement="left" title data-original-title="Add to wishlist" tabIndex={-1}><i className="pe-7s-like" /></a>
                <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title data-original-title="Quick View"><i className="pe-7s-search" /></span></a>
              </div>
              <div className="cart-hover">
                <a href="shop-details" className="btn-cart  fw-600" tabIndex={-1}>Add To Cart</a>
              </div>
            </div>
            <div className="product-caption text-center">
              <div className="product-status">
                <ul className="product-raised">
                  <li><strong>Distribute:</strong> 45000</li>
                  <li><strong>Goal:</strong><span className="text-highlight"> 70000</span></li>
                </ul>
                <div className="progress">
                  <div className="progress-bar progress-bar-color" style={{width: '75%'}} />
                </div>
              </div>
              <h6 className="product-title fw-500 mt-10"><a href="shop-details" className="text-color-primary">Veg Curry</a></h6>
              <div className="product-money mt-10"> <span className="text-color-primary fw-600">$90.00</span>
                <span className="text-price">$250.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop-Details-Description END */}
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
  {/* footer */}
  <div className="modal" id="quick_view">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal">×</button>
          {/* product details inner end */}
          <div className="product-details-inner">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="shop-detail-image">
                  <div className="detail-slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <a href="#" className="popup">
                            <img src="assets/img/shop/maindetail.jpg" className="img-fluid full-width" alt="slider" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="shop-detail-contents mb-md-40 mt-md-40">
                  <div className="shop-detail-content-wrapper">
                    <h3 className="text-custom-black">Handmade Golden Necklace Full Family Package</h3>
                  </div>
                  <div className="ratings d-flex mb-xl-20"> <span className="text-yellow"><i className="fas fa-star" /></span>
                    <span className="text-yellow"><i className="fas fa-star" /></span>
                    <span className="text-yellow"><i className="fas fa-star" /></span>
                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                    <div className="pro-review"> <span>1 Reviews</span>
                    </div>
                  </div>
                  <div className="price">
                    <h4 className="text-custom-red price-tag">$45 <span className="text-light-white fw-400 fs-14">$50</span></h4>
                  </div>
                  <div className="product-full-des mb-20">
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                  </div>
                  <div className="availibity mt-20">
                    <h6 className="text-custom-black fw-600">Avability: <span className="text-success ml-2">In Stock</span></h6>
                  </div>
                  <div className="quantity mb-xl-20">
                    <h6 className="text-custom-black mb-0 mr-2 fw-600">Qty:</h6>
                    <div className="product-qty-input">
                      <button className="minus-btn" type="button" name="button"> <i className="fas fa-minus" />
                      </button>
                      <input type="text" className="form-control form-control-qty text-center" name="name" defaultValue={1} />
                      <button className="plus-btn" type="button" name="button"> <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="shop-bottom">
                    <div className="shop-meta mt-20">
                      <h6 className="text-custom-black mb-0 fw-600">Categories:</h6>
                      <ul className="list-inline ml-2">
                        <li className="list-inline-item"><a href="#">Necklace</a>
                        </li>
                        <li className="list-inline-item"><a href="#">Diamond</a>
                        </li>
                        <li className="list-inline-item"><a href="#">Sale</a>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-meta mt-20">
                      <h6 className="text-custom-black mb-0 fw-600">Tags:</h6>
                      <ul className="list-inline ml-2">
                        <li className="list-inline-item"><a href="#">Luxary</a>
                        </li>
                        <li className="list-inline-item"><a href="#">Diamond</a>
                        </li>
                        <li className="list-inline-item"><a href="#">New Arrivel</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-btn mt-20"> <a href="#" className="btn-solid with-line ml-2">Add to Cart <i className="pe-7s-cart" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* product details inner end */}
        </div>
      </div>
    </div>
  </div>


		</Fragment>
	)
}

export default ShopDetails

