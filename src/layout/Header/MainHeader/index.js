import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
const MainHeader = () => {
    return (
        <Fragment>
             <header className="header">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-12">
          <div className="navigation">
            <div className="logo">
              <Link to="/">
                <img src="assets/img/logo1.png" className="image-fit" alt="logo" />
              </Link>
            </div>
            <div className="main-navigation">
              <nav>
                <ul className="main-menu">
                  <li className="menu-item"> <Link to="/" className="text-light-black">Home</Link>
                    {/* <ul className="sub-menu">
                      <li className="menu-item"> <Link to="/">HomePage 1</Link>
                      </li>
                      <li className="menu-item"> <Link to="/homepage-2">Homepage 2</Link>
                      </li>
                      <li className="menu-item"> <Link to="/homepage-3">Homepage 3</Link>
                      </li>
                      <li className="menu-item"> <Link to="/homepage-4">Homepage 4</Link>
                      </li>
                      <li className="menu-item"> <Link to="/homepage-5">Homepage 5</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="menu-item"> <Link to="/about" className="text-light-black">About</Link>
                  </li>
                  <li className="menu-item "> <Link to="/shop-left">Shop</Link>
                  </li>
                  <li className="menu-item menu-item-has-children"> <Link to="/" className="text-light-black">Pages</Link>
                    <ul className="sub-menu">
                      <li className="menu-item"> <Link to="/donation-grid">Donation Archive</Link>
                      </li>
                      <li className="menu-item"> <Link to="/donation-details">Donation Details</Link>
                      </li>
                      <li className="menu-item"> <Link to="/wishlist">Wishlist</Link>
                      </li>
                      <li className="menu-item"> <Link to="/checkout">Check Out</Link>
                      </li>
                      <li className="menu-item"> <Link to="/order-details">Order</Link>
                      </li>
                      <li className="menu-item"> <Link to="/404">404 ERROR</Link>
                      </li>
                      <li className="menu-item"> <Link to="/login">Log In</Link>
                      </li>
                      <li className="menu-item"> <Link to="/register">Register</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children"> <Link to="/" className="text-light-black">Blog</Link>
                    <ul className="sub-menu">
                      <li className="menu-item"> <Link to="/blog-right">Blog Right</Link>
                      </li>
                      <li className="menu-item"> <Link to="/blog-left">Blog Left</Link>
                      </li>
                      <li className="menu-item"> <Link to="/blog-details">Blog Detail</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children"> <Link to="/#" className="text-light-black">Story</Link>
                    <ul className="sub-menu">
                      <li className="menu-item"> <Link to="/story-grid">Story Archive</Link>
                      </li>
                      <li className="menu-item"> <Link to="/story-details">Story Details</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right-side-navigation">
              <ul>
                <li className="hamburger-menu">
                  <Link to="/#" className="menu-btn"> <span />
                    <span />
                    <span />
                  </Link>
                </li>
                <li className="user-details">
                  <Link to="/#"> <i className="pe-7s-user" /> <span>Hi, Kate</span>
                  </Link>
                </li>
                <li className="wishlist"> <Link to="/#" className="text-dark-red"><i className="pe-7s-bell" /></Link>
                  <span className="cart">3</span>
                </li>
                <li className="cart"> <Link to="/#" className="text-dark-red"><i className="pe-7s-cart" /></Link>
                  <span className="cart">3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="main-sec" />
        </Fragment>
    )
}

export default MainHeader
