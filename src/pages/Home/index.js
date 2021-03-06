import React, { Fragment, useEffect } from 'react'
import {loadHeaderScript, loadHeaderCSS} from '../../components/utils/LoadScript';
import TopHeader from '../../layout/Header/TopHeader';
import MainHeader from '../../layout/Header/MainHeader';
import { useDispatch, useSelector } from "react-redux";
import { SERVER_URL , IMAGE_URL} from "../../components/utils/config";
import {DONATION_PRODUCT_REQUEST, ALL_NEWS_SUCCESS, ALL_NEWS_FAIL, ALL_COMPAIGN_SUCCESS, ALL_COMPAIGN_FAIL, ALL_DONATION_PRODUCT_SUCCESS, ALL_DONATION_PRODUCT_FAIL,ALL_OUR_PRODUCT_SUCCESS, ALL_OUR_PRODUCT_FAIL} from "../../actions/types";
import {Link} from 'react-router-dom';
import {
  increaseItemQuantity,
  addItemToCart,
  addToCart,
  AddWishlistProducts
} from '../../actions/cart';
import Footer from '../../layout/Footer';
const Home = () => {

  
  const allnews = useSelector((state) => state.news.allNews);
  const allCompaign = useSelector((state) => state.compaign.allCompaign);
  const allDonationProduct = useSelector((state) => state.donationProduct.allDonationProduct);
  const allOurProduct = useSelector((state) => state.ourProduct.allOurProduct);
  
  const dispatch = useDispatch();
    useEffect(() =>{
        loadHeaderScript();
        // loadHeaderCSS();
    },[])
    



    useEffect(() => {
     
          //all news
          fetch(`${SERVER_URL}api/news`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "X-Auth-Token": user.token,
            },
          })
            .then((response) => response.json())
            .then((json) => {
              dispatch({
                type: ALL_NEWS_SUCCESS,
                payload: json.news,
              });
            })
            .catch((error) => {
              dispatch({
                type: ALL_NEWS_FAIL,
              });
            });
            
            //all  compaign
          fetch(`${SERVER_URL}api/compaign`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "X-Auth-Token": user.token,
            },
          })
            .then((response) => response.json())
            .then((json) => {
              dispatch({
                type: ALL_COMPAIGN_SUCCESS,
                payload: json.compaign,
              });
            })
            .catch((error) => {
              dispatch({
                type: ALL_COMPAIGN_FAIL,
              });
            });

            // get all donation product
            fetch(`${SERVER_URL}api/donationProduct/active`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // "X-Auth-Token": user.token,
              },
            })
              .then((response) => response.json())
              .then((json) => {
                dispatch({
                  type: ALL_DONATION_PRODUCT_SUCCESS,
                  payload: json.product,
                });
              })
              .catch((error) => {
                dispatch({
                  type: ALL_DONATION_PRODUCT_FAIL,
                });
              });


               // get all our product
            fetch(`${SERVER_URL}api/product/`, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // "X-Auth-Token": user.token,
              },
            })
              .then((response) => response.json())
              .then((json) => {
                dispatch({
                  type: ALL_OUR_PRODUCT_SUCCESS,
                  payload: json.product,
                });
              })
              .catch((error) => {
                dispatch({
                  type: ALL_OUR_PRODUCT_FAIL,
                });
              });
    }, []);
  
  const products = useSelector(state => state.cart.products);



  // add and update the cart button
  const addAndUpdatenTheCart = item => {
   dispatch({
     type : DONATION_PRODUCT_REQUEST,
     payload : item
   }) 
  };

  // // add to cart function
  // const addProductToCart = item => {
  //   const product = item;
  //   let itemQty = product.quantity;
  //   let productExists = false;
  //   let productIndex = -1;
  //   products.forEach((p, idx) => {
  //     if (product._id === p._id) {
  //       productExists = true;
  //       productIndex = idx;
  //     }
  //   });
  //   if (productExists) {
  //     // if (itemQty === undefined) {
  //     //   itemQty = 1;
  //     // } else {
  //     //   itemQty = product.quantity;
  //     // }
  //     // alert.success(`Already in cart!`);
  //      console.log(`Already in cart!`);
  //     console.log('add item of product cart is', product.quantity);
  //     // dispatch(increaseItemQuantity(
  //     //   productIndex,
  //     //   product,
  //     //   (itemQty = itemQty + 1)
  //     // ));
  //   } else {
  //    dispatch(addItemToCart(product));
  //     // alert.success('Successfully added to cart!');
  //   }
  //   // to add the product in localstorage

  //  dispatch(addToCart());
  // };

    return (
        <Fragment>
   
  {/* top-Navigation */}
    <TopHeader/>
  {/* Navigation */}
   <MainHeader/>
  
  <section className="about-us-slider swiper-container p-relative slider-banner-1">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide-item">
        <img src="assets/img/banner/banner1.jpg" className="img-fluid full-width" alt="Banner" />
        <div className="transform-center z-index-3">
          <div className="container-fluid custom-container">
            <div className="row justify-content-center">
              <div className="col-lg-12 align-self-center">
                <div className="right-side-content far-right">
                  <h6 className="text-white">Around the world.</h6>
                  <h1 className="text-white fw-600">We help all people in need</h1>
                  <p className="text-white fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish
                    shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                  <Link to="/add-donation" className="btn-solid with-line btn-big mt-20"><span>Donate Now <i className="fas fa-caret-right" /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay overlay-bg-dark overlay-bg-img" />
      </div>
      <div className="swiper-slide slide-item">
        <img src="assets/img/banner/banner2.jpg" className="img-fluid full-width" alt="Banner" />
        <div className="transform-center z-index-3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 align-self-center">
                <div className="right-side-content text-center">
                  <h6 className="text-white">Around the world.</h6>
                  <h1 className="text-white fw-600">Our Helping people in need</h1>
                  <p className="text-white fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish
                    shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfishf</p>
                  <Link to="/add-donation" className="btn-solid with-line btn-big mt-20"><span>Donate Now <i className="fas fa-caret-right" /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay overlay-bg-dark overlay-bg-img" />
      </div>
      <div className="swiper-slide slide-item">
        <img src="assets/img/banner/banner3.jpg" className="img-fluid full-width" alt="Banner" />
        <div className="transform-center z-index-3">
          <div className="container-fluid custom-container">
            <div className="row justify-content-center">
              <div className="col-lg-12 align-self-center">
                <div className="left-side-content text-right">
                  <h6 className="text-white">Around the world.</h6>
                  <h1 className="text-white fw-600">Our Helping people in need</h1>
                  <p className="text-white fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish
                    shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfishf</p>
                  <Link to="/add-donation" className="btn-solid with-line btn-big mt-20"><span>Donate Now<i className="fas fa-caret-right" /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay overlay-bg-dark overlay-bg-img" />
      </div>
    </div>
    {/* Add Arrows */}
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
  </section>
  {/* slider */}
  <section className="service-type">
    <div className="row">
      <div className="col-lg-3 col-md-6 bg-custom-primary border-custom-right border-sm-bottom">
        <div className="service-box">
          <div className="service-box-wrapper">
            <div className="service-icon-box">
              <img src="assets/img/help.svg" alt className="img-fluid" />
            </div>
            <div className="service-text-box">
              <p>Participate</p>
              <h6>As a Volunteers</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 bg-custom-primary border-custom-right border-sm-bottom">
        <div className="service-box">
          <div className="service-box-wrapper">
            <div className="service-icon-box">
              <img src="assets/img/money.svg" alt className="img-fluid" />
            </div>
            <div className="service-text-box">
              <p>Be a Hand</p>
              <h6>As a Donor</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 bg-custom-primary border-custom-right border-sm-bottom">
        <div className="service-box">
          <div className="service-box-wrapper">
            <div className="service-icon-box">
              <img src="assets/img/investor.svg" alt className="img-fluid" />
            </div>
            <div className="service-text-box">
              <p>Participate</p>
              <h6>As a Sponsor</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 bg-custom-primary">
        <div className="service-box">
          <div className="service-box-wrapper">
            <div className="service-icon-box">
              <img src="assets/img/cash.svg" alt className="img-fluid" />
            </div>
            <div className="service-text-box">
              <p>Be a Hand</p>
              <h6>As a Fundraiser</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Browse by category */}
  {/* <section className="browse-cat bg-theme-primary section-padding">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left title">
            <h3 className="text-light-black header-title">People's Stories </h3>
            <span className="fs-14 align-self-center"><a href="#">See All</a></span>
          </div>
        </div>
        <div className="col-12">
          <div className="category-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category1.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Martha, NY</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category2.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Michle, CA</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category3.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Adem, LA</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category4.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Jimmy, CA</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category5.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Nico, FL</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category6.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Richa, NY</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category7.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Jordan, NY</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category8.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Hemlet, NJ</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category9.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Ricky, LA</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category8.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Casendra, LA</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category9.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Rob, CA</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category8.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Mily, TX</span>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="story-grid.html" className="categories">
                  <div className="icon text-custom-white bg-light-green ">
                    <img src="assets/img/categories/category9.png" className="rounded-circle" alt="categories" />
                  </div> <span className="text-light-black cat-name">Rob, NY</span>
                </a>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </div>
    </div>
  </section> */}

  
  {/* Browse by category */}
  {/* sell section */}
  <section className="recent-order section-padding">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left title">
            <h3 className="text-light-black header-title">Available Product for Donation </h3>
            <span className="fs-14"><Link to="/donation-product">See All products</Link></span>
          </div>
        </div>
        {allDonationProduct.length > 0 ? allDonationProduct.slice(0,6).map((item, index) =>
        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6" >
        <div className="product-box mb-md-20" >
          <div className="product-img" style={{height: '200px'}}>
            {/* <a href=""> */}
              <img src={IMAGE_URL +item.product_image} style={{height: '200px'}} className="img-fluid full-width" alt="product-img" />
            {/* </a> */}
            <div className="product-badge">
              {/* <div className="product-label new"> <span>Veg</span>
              </div> */}
            </div>
            <div className="button-group"> 
            {/* <a href="wishlist.html" data-toggle="tooltip" data-placement="left" title data-original-title="Add to wishlist" tabIndex={-1}><i className="pe-7s-like" /></a> */}
              {/* <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title data-original-title="Quick View"><i className="pe-7s-search" /></span></a> */}
            </div>
            <div className="cart-hover">
              <Link to="/donation-request" className="btn-cart  fw-600" onClick={() => addAndUpdatenTheCart(item)} tabIndex={-1}>Make Request</Link>
            </div>
          </div>
          <div className="product-caption text-center" style={{height: '130px'}}>
            <div className="product-status">
              <ul className="product-raised">
                {/* <li><strong>Distribute:</strong> 45000</li> */}
                {/* <li><strong>Goal:</strong><span className="text-highlight"> 70000</span></li> */}
              </ul>
              <div className="progress">
                <div className="progress-bar progress-bar-color" style={{width: '100%'}} />
              </div>
            </div>
            <h6 className="product-title fw-500 mt-10"><Link to="/#" className="text-color-primary">{item.product_name}</Link></h6>
            {/* <div className="product-money mt-10"> <span className="text-color-primary fw-600">$90.00</span> */}
              {/* <span className="text-price">$250.00</span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      
        ):  null}
            </div>
    </div>
  </section>
  {/* sell section end */}
  {/*shopping section end*/}
  {/* advertisement banner*/}
  <section className="section-padding advertisement-banner-1">
    <div className="container-fluid custom-container">
      <div className="row">
        {/*  */}
        <div className="col-lg-8 custom-center">
          <div className="advertisement-text-1 mb-30">
            <h6 className="sub-head">What We do</h6>
            <h3 className="text-white heading">Delivering help and hope
              to <span className="text-color-secondary"> people</span> through <span className="text-color-secondary"> sponsorship</span></h3>
            <p />
          </div>
          <div className="promo-se-icons mb-30 mb-sm-20">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="icon-box d-flex align-items-center">
                  <img src="assets/img/dn1.png" alt />
                  <h5 className="slab">Build Homes</h5>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box d-flex align-items-center">
                  <img src="assets/img/dn2.png" alt />
                  <h5 className="slab">Build Schools</h5>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="icon-box last d-flex align-items-center">
                  <img src="assets/img/dn3.png" alt />
                  <h5 className="slab">Medical Expenses</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 align-self-center">
          <div className="blob play-btn ">
            <a href="https://www.youtube.com/watch?v=Yxql1GVPJVk" className="popup-video"> <i className="fas fa-play" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* advertisement banner*/}
  {/* Hot Deals */}
  <section className="ex-collection section-padding bg-theme-primary">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left">
            <h3 className="text-light-black header-title title"> Help We Served</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-1.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-primary text-color-secondary">Water Delivery</span>
              <h4><a href="#">More than One Life Changed</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-2.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-secondary text-color-primary">Education</span>
              <h4><a href="#">Help for Children of the East</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-3.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-primary text-color-secondary">Food &amp; Meals</span>
              <h4><a href="#">More than One Life Changed</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-4.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-secondary text-color-primary">Water Delivery</span>
              <h4><a href="#">Help for Children of the East</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-5.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-primary text-color-secondary">Health &amp; Care</span>
              <h4><a href="#">More than One Life Changed</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-6.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-secondary text-color-primary">Finance</span>
              <h4><a href="#">Help for Children of the East</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="story-wrapper">
            <img src="assets/img/story-big/about-7.jpg" alt className="full-width img-fluid mx-auto d-block" />
            <div className="story-box-content story-content-wrapper">
              <span className="story-badge bg-custom-primary text-color-secondary">Education</span>
              <h4><a href="#">More than One Life Changed</a> </h4>
              <a href="#" className="btn btn-text btn-text-white">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Hot deals End*/}

  {/*shopping section end*/}
  {/* advertisement banner*/}
  <section className="section-padding advertisement-banner-1 center-bg-effect">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="advertisement-text-1 center-block-div">
            <h6 className="sub-head">Our Causes</h6>
            <h3 className="text-white heading">Lets Chenge The World <span className="text-dark-red">With Humanity</span></h3>
            <div className="ad-count justify-content-center">
              <div className="countdown-box">
                <div className="time-box"> <span id="mb-days" />
                </div>
                <div className="time-box"> <span id="mb-hours" />
                </div>
                <div className="time-box"> <span id="mb-minutes" />
                </div>
                <div className="time-box"> <span id="mb-seconds" />
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-text btn-text-white mt-20">Become A Volunteer</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* advertisement banner*/}
  {/*Special offer*/}
  <section className="section-padding ex-collection bg-theme-primary">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="section-header-left">
            <h3 className="text-light-black header-title title">Our Donation Campaigns</h3>
          </div>
        </div>
        {allCompaign.length > 0 ? allCompaign.slice(0,3).map((item, index) => <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="sa-causes-single sa-causes-single-2" key={index} >
            <div className="causes-details-wrap">
              <div className="causes-details">
             <h5><a href="#">{item.category}</a></h5>
                <p>{item.title}</p>
                <div className="entry-thumb mtmb-spacing">
                  <img src={IMAGE_URL + item.image} style={{height:'200px'}} alt="img" className="img-fluid full-width" />
                  <div className="dontaion-category"><a href="#">{item.category}</a></div>
                </div>
                <div className="cause-progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                    {/* <span>17%</span> */}
                  </div>
                </div>
                <div className="causes-amount">
                  <div className="left">
                    <p>Raised</p>
            <span>Rs. {item.raised_amount}</span>
                  </div>
                  <div className="right">
                    <p>Goal</p>
             <span>Rs. {item.goal_amount}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-area text-center">
              <Link className="btn-donation text-btn" to="/add-donation">donate now</Link>
            </div>
          </div>
        </div>
        ): null}
       {/* // <div className="col-xl-4 col-lg-6 col-md-6">
        //   <div className="sa-causes-single sa-causes-single-2">
        //     <div className="causes-details-wrap">
        //       <div className="causes-details">
        //         <h5><a href="#">Health &amp; Infectious Diseases</a></h5>
        //         <p>Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.</p>
        //         <div className="entry-thumb mtmb-spacing">
        //           <img src="assets/img/donation/article1.jpg" alt="img" className="img-fluid full-width" />
        //           <div className="dontaion-category"><a href="#">Education</a></div>
        //         </div>
        //         <div className="cause-progress">
        //           <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{width: '17%'}}>
        //             <span>17%</span>
        //           </div>
        //         </div>
        //         <div className="causes-amount">
        //           <div className="left">
        //             <p>Raised</p>
        //             <span>$4585.00</span>
        //           </div>
        //           <div className="right">
        //             <p>Goal</p>
        //             <span>$4585.00</span>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="btn-area text-center">
        //       <a className="btn-donation text-btn" href="#">donate now</a>
        //     </div>
        //   </div>
        // </div>
        // <div className="col-xl-4 col-lg-6 col-md-6">
        //   <div className="sa-causes-single sa-causes-single-2">
        //     <div className="causes-details-wrap">
        //       <div className="causes-details">
        //         <h5><a href="#">Hunger &amp; Nurition</a></h5>
        //         <p>Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.</p>
        //         <div className="entry-thumb mtmb-spacing">
        //           <img src="assets/img/donation/article3.jpg" alt="img" className="img-fluid full-width" />
        //           <div className="dontaion-category"><a href="#">Health</a></div>
        //         </div>
        //         <div className="cause-progress">
        //           <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{width: '17%'}}>
        //             <span>17%</span>
        //           </div>
        //         </div>
        //         <div className="causes-amount">
        //           <div className="left">
        //             <p>Raised</p>
        //             <span>$4585.00</span>
        //           </div>
        //           <div className="right">
        //             <p>Goal</p>
        //             <span>$4585.00</span>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="btn-area text-center">
        //       <a className="btn-donation text-btn" href="#">donate now</a>
        //     </div>
        //   </div>
        // </div>
        // <div v className="col-xl-4 col-lg-6 col-md-6">
        //   <div className="sa-causes-single sa-causes-single-2">
        //     <div className="causes-details-wrap">
        //       <div className="causes-details">
        //         <h5><a href="#">Water Delivery</a></h5>
        //         <p>Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.</p>
        //         <div className="entry-thumb mtmb-spacing">
        //           <img src="assets/img/donation/article2.jpg" alt="img" className="img-fluid full-width" />
        //           <div className="dontaion-category"><a href="#">Hygine</a></div>
        //         </div>
        //         <div className="cause-progress">
        //           <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{width: '17%'}}>
        //             <span>17%</span>
        //           </div>
        //         </div>
        //         <div className="causes-amount">
        //           <div className="left">
        //             <p>Raised</p>
        //             <span>$4585.00</span>
        //           </div>
        //           <div className="right">
        //             <p>Goal</p>
        //             <span>$4585.00</span>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="btn-area text-center">
        //       <a className="btn-donation text-btn" href="#">donate now</a>
        //     </div>
        //   </div>
        // </div> */}
      </div>
    </div>
  </section>
  {/*shopping end section*/}
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
            <span className="fs-14"><Link to="/blog-right">See All</Link></span>
          </div>
        </div>
        {allnews.length > 0 ? allnews.slice(0,4).map((item, index) => 
         <div className="col-xl-3 col-lg-3 col-md-6" key={index}>
         <article className="blog-item blog-item-box">
           <div className="blog-item-img">
             <img className="blog-img" src={IMAGE_URL + item.image} alt="img" />
             <ul className="blog-item-badge">
               {/* <li><a href="#">Water</a> </li> */}
        <li><a href="#">{item.title}</a></li>
             </ul>
           </div>
           <div className="blog-item-content">
        <h5 className="blog-item-title"><a href="#">{item.title}</a></h5>
        <p>{item.description}</p>
             <div className="blog-item-details">
               <span className="blog-item-date"><i className="fas fa-calendar-week" /> 23 Jan' 19</span>
               <span><i className="fas fa-comment-dots" /> 501</span></div>
           </div>
         </article>
       </div>
       
        ): null}
       {/* <div className="col-xl-3 col-lg-3 col-md-6">
          <article className="blog-item blog-item-box">
            <div className="blog-item-img">
              <img className="blog-img" src="assets/img/blog/blog2.jpg" alt="img" />
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
              <img className="blog-img" src="assets/img/blog/blog3.jpg" alt="img" />
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
              <img className="blog-img" src="assets/img/blog/blog4.jpg" alt="img" />
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
        </div> */}
      </div>
    </div>
  </section>
  {/* END/BLOG Section */}
  {/* Sucscriber */}
 
  {/* END Subscriber */}
  {/* footer */}
  <Footer/>

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

export default Home
