import React , {Fragment} from 'react'
import MainHeader from '../../layout/Header/MainHeader'
import {useSelector, useDispatch} from 'react-redux';
import {IMAGE_URL} from '../../components/utils/config';
import {Link, Redirect} from 'react-router-dom';
import {REQUEST_BUTTON_CLICK} from '../../actions/types';
const Wishlist = props => {

  
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const OnClick= () =>{
    dispatch({
      type: REQUEST_BUTTON_CLICK
    })
    return props.history.push('/donation-request')
    }
  
  return (
    <Fragment>
    
  {/* Navigation */}
 <MainHeader/>
  {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Wishlist</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li><a href="shop-left">Shop</a>
          </li>
          <li className="active">Wishlist</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  <section className="compare-page-wrapper section-padding">
    {/* compare main wrapper start */}
    <div className="container">
      <div className="section-bg-color">
        <div className="row">
          <div className="col-lg-12">
            {/* Wishlist Table Area */}
            <div className="cart-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="pro-remove">Remove</th>
                    <th className="pro-thumbnail">Thumbnail</th>
                    <th className="pro-title">Product</th>
                    <th className="pro-price">Description</th>
                    {/* <th className="pro-quantity">Stock Status</th>
                    <th className="pro-subtotal">Add to Cart</th> */}
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? products.map((item, index) =>
                   <tr>
                   <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                   <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={IMAGE_URL+ item.product_image} alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">{item.product_name}</a></td>
                   {/* <td className="pro-price"><span>$295.00</span></td> */}
                                  {/* <td className="pro-quantity"><span className="text-success">In Stock</span></td> */}
                   <td className="pro-subtotal">{item.product_description}
                    </td>
                  </tr>
                  )
                : 'Cart is Empty'  
                }
                  
                  {/* <tr>
                    <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                    <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/shop/product2.jpg" alt="Product" /></a></td>
                    <td className="pro-title"><a href="#">Perfect Diamond Jewellery</a></td>
                    <td className="pro-price"><span>$275.00</span></td>
                    <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                    <td className="pro-subtotal"><a href="cart" className="btn btn-solid">Add to
                        Cart</a></td>
                  </tr>
                  <tr>
                    <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                    <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/shop/product3.jpg" alt="Product" /></a></td>
                    <td className="pro-title"><a href="#">Handmade Golden Necklace</a></td>
                    <td className="pro-price"><span>$295.00</span></td>
                    <td className="pro-quantity"><span className="text-danger">Stock Out</span></td>
                    <td className="pro-subtotal"><a href="cart" className="btn btn-solid disabled">Add
                        to Cart</a></td>
                  </tr>
                  <tr>
                    <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                    <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/shop/product4.jpg" alt="Product" /></a></td>
                    <td className="pro-title"><a href="#">Diamond Exclusive Ornament</a></td>
                    <td className="pro-price"><span>$110.00</span></td>
                    <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                    <td className="pro-subtotal"><a href="cart" className="btn btn-solid">Add to
                        Cart</a></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginLeft :'15px', marginTop:'20px'}}>
          <button  
          onClick={() => OnClick()}
           className="btn btn-solid" >Make a Request</button>
           </div>
        </div>
      </div>
    </div>
    {/* compare main wrapper end */}
  </section>
  {/* Sucscriber */}
  <section className="section-padding block_newsletter bg-theme-primary">
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
    <div className="modal-dialog modal-dialog-centered">
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

export default Wishlist
