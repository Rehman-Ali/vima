import React, { Fragment } from 'react'
import MainHeader from '../../layout/Header/MainHeader'

const OwnProductShop = () => {
	return (
		<Fragment>

  {/* Navigation */}
  <MainHeader/>
  {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Shop Grid Left</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li className="active">Shop Left Sidebar</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/*product Start*/}
  <section className="section-padding our-product bg-light-theme">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="side-bar mb-md-40">
            <div className="main-box padding-20 side-shop mb-xl-20">
              <h5 className="text-light-black">Top Products</h5>
              <article className="side-post pb-xl-20 mb-xl-20 u-line">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/img/shop/sp1.jpg" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="shop-details" className="text-light-black">Brown liquid inside</a>
                    </h6>
                    <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="side-post pb-xl-20 mb-xl-20 u-line">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/img/shop/sp2.jpg" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="shop-details" className="text-light-black">Brown liquid inside</a>
                    </h6>
                    <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="side-post pb-xl-20 mb-xl-20 u-line">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/img/shop/sp3.jpg" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="shop-details" className="text-light-black">Brown liquid inside</a>
                    </h6>
                    <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="side-post">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/img/shop/sp4.jpg" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="shop-details" className="text-light-black">Brown liquid inside</a>
                    </h6>
                    <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="main-box padding-20 trending-blog-cat mb-xl-20">
              <h5 className="text-light-black">Price</h5>
              <div className="delivery-slider">
                <input type="text" className="delivery-range-slider" defaultValue />
              </div>
            </div>
            <div className="main-box padding-20 trending-blog-cat mb-xl-20">
              <h5 className="text-light-black">Brands</h5>
              <div className="filter">
                <form>
                  <label className="custom-checkbox">
                    <input type="checkbox" name="#" /> <span className="checkmark" /> Goldturn <span className="text-light-white">(3)</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" name="#" /> <span className="checkmark" /> Silverline <span className="text-light-white">(6)</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" name="#" /> <span className="checkmark" /> Gemtuk <span className="text-light-white">(10)</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" name="#" /> <span className="checkmark" /> Ringwing <span className="text-light-white">(6)</span>
                  </label>
                </form>
              </div>
            </div>
            <div className="main-box padding-20 trending-blog-cat mb-xl-20">
              <h5 className="text-light-black">Weight</h5>
              <div className="filter">
                <form>
                  <label className="custom-radio">
                    <input type="radio" name="#" /> <span className="radio" /> Small
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="#" /> <span className="radio" /> Medium
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="#" /> <span className="radio" /> Large
                  </label>
                </form>
              </div>
            </div>
            <div className="main-box padding-20 blog-tags mb-xl-20">
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
            </div>
            <div className="main-box padding-20 trending-blog-cat mb-xl-20">
              <h5 className="text-light-black">Categories</h5>
              <ul>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Children <span className="text-light-white fw-400">(110)</span></a>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Charity <span className="text-light-white fw-400">(98)</span></a>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Donation <span className="text-light-white fw-400">(52)</span></a>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Paintings <span className="text-light-white fw-400">(26)</span></a>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Antique <span className="text-light-white fw-400">(55)</span></a>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Handicraft <span className="text-light-white fw-400">(48)</span></a>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <a href="#" className="text-light-black fw-600">Ceramicart <span className="text-light-white fw-400">(50)</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="full-width">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product2.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product4.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product3.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product4.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product3.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product2.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product3.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product4.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product2.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product4.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product3.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="product-box mb-md-20">
                  <div className="product-img">
                    <a href="shop-details">
                      <img src="assets/img/shop/product4.jpg" className="img-fluid full-width" alt="product-img" />
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
          <div className="custom-pagination align-item-center">
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
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Product-end*/}
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
  {/* modal boxes */}
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

export default OwnProductShop

