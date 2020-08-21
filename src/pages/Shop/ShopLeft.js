import React, { Fragment , useEffect} from 'react'
import MainHeader from '../../layout/Header/MainHeader'
import { ALL_DONATION_PRODUCT_SUCCESS,DONATION_PRODUCT_REQUEST, ALL_DONATION_PRODUCT_FAIL} from "../../actions/types";
import {useSelector, useDispatch} from 'react-redux';
import {SERVER_URL,IMAGE_URL} from '../../components/utils/config';
import {
  addItemToCart,
  addToCart,
} from '../../actions/cart';
import {Link} from 'react-router-dom';
import Footer from '../../layout/Footer';

const ShopLeft = () => {
  const allDonationProduct = useSelector((state) => state.donationProduct.allDonationProduct);
  const products = useSelector(state => state.cart.products);

   const dispatch = useDispatch()
  useEffect(() => {
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
}, []);

const addAndUpdatenTheCart = item => {
  dispatch({
    type : DONATION_PRODUCT_REQUEST,
    payload : item
  }) 
 };


  // // add and update the cart button
  // const addAndUpdatenTheCart = item => {
  //   let product = item;
  //   let productExists = false;
  //   products.forEach((p, idx) => {
  //     if (product._id === p._id) {
  //       productExists = true;
  //       // assign product from redux cart
  //       product = p;
  //     }
  //   });
  //   if (productExists) {
  //     addProductToCart(product);
  //   } else {
  //     addProductToCart(product);
  //   }
  // };

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

  {/* Navigation */}
  <MainHeader/>
  {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Dontion Product Shop</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li className="active">Dontion Products</li>
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
              <h5 className="text-light-black">Top Sponsers</h5>
              <article className="side-post pb-xl-20 mb-xl-20 u-line">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/images/1.jpg" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="#" className="text-light-black">Oil & Gas Development Company</a>
                    </h6>
                    {/* <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div> */}
                  </div>
                </div>
              </article>
              <article className="side-post pb-xl-20 mb-xl-20 u-line">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/images/2.png" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="#" className="text-light-black">Pakistan Petroleum Limited</a>
                    </h6>
                    {/* <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div> */}
                  </div>
                </div>
              </article>
              <article className="side-post pb-xl-20 mb-xl-20 u-line">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/images/3.png" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="#" className="text-light-black">NESPAK</a>
                    </h6>
                    
                  </div>
                </div>
              </article>
              <article className="side-post">
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src="assets/images/4.png" alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                      <a href="#" className="text-light-black">Telonor</a>
                    </h6>
                    {/* <div className="entry-tye"> <span className="text-light-green fs-18 fw-600">$50.25</span>
                    </div> */}
                  </div>
                </div>
              </article>
            </div>
           
             </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="full-width">
            <div className="row">
              {allDonationProduct.length > 0 ? allDonationProduct.map((item, index) =>
              
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="product-box mb-md-20">
                <div className="product-img"  style={{height: '200px'}}>
                  <a href="shop-details">
                    <img src={IMAGE_URL + item.product_image} style={{height: '200px'}} className="img-fluid full-width" alt="product-img" />
                  </a>
                  {/* <div className="product-badge">
                    <div className="product-label new"> <span>Veg</span>
                    </div>
                  </div> */}
                  <div className="button-group"> 
                  {/* <a href="wishlist" data-toggle="tooltip" data-placement="left" title data-original-title="Add to wishlist" tabIndex={-1}><i className="pe-7s-like" /></a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"><span data-toggle="tooltip" data-placement="left" title data-original-title="Quick View"><i className="pe-7s-search" /></span></a> */}
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
                <h6 className="product-title fw-500 mt-10"><a href="shop-details" className="text-color-primary">{item.product_name}</a></h6>
                  {/* <div className="product-money mt-10"> <span className="text-color-primary fw-600">$90.00</span> */}
                    {/* <span className="text-price">$250.00</span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          
              
              ) : 'null'}
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
  {/*Product-end*/}
  {/* Sucscriber */}
 <Footer/>
 
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

export default ShopLeft

