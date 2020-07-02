import React, { Fragment } from 'react'
import MainHeader from '../../layout/Header/MainHeader'

const Checkout = () => {
	return (
		<Fragment>
			
  {/* Navigation */}
 <MainHeader/>
 {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Checkout</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li><a href="shop-left">Shop</a>
          </li>
          <li className="active">Checkout</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/*check-out*/}
  <section className="final-order section-padding bg-light-theme">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-lg-9">
          <div className="main-box padding-20">
            <div className="row mb-xl-20">
              <div className="col-md-6">
                <div className="section-header-left">
                  <h3 className="text-light-black header-title fw-700">Review and place order</h3>
                </div>
                <h6 className="text-light-black fw-700 fs-14">Review address, payments, and tip to complete your purchase</h6>
                <h6 className="text-light-black fw-700 mb-2">Your order setting</h6>
                <p className="text-light-green fw-600">Delivery, ASAP (60-70m)</p>
                <p className="text-light-white title2 mb-1">Jhon Deo <span><a href="#">Change Details</a></span>
                </p>
                <p className="text-light-black fw-600 mb-1">Home</p>
                <p className="text-light-white mb-1">314 79th st 70 Brooklyn, NY 11209
                  <br />Cross Street, Rite Aid</p>
                <p className="text-light-white">(347) 1234567890</p>
              </div>
              <div className="col-md-6">
                <div className="advertisement-img">
                  <img src="https://via.placeholder.com/670X300" className="img-fluid full-width" alt="advertisement-img" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="payment-sec">
                  <div className="section-header-left">
                    <h3 className="text-light-black header-title">Delivery Instructions</h3>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control form-control-submit" rows={4} placeholder="Delivery Details" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label className="custom-checkbox">
                      <input type="checkbox" name="#" /> <span className="checkmark" /> Spare me the napkins and plasticware. I'm trying to save the earth.</label>
                  </div>
                  <div className="section-header-left">
                    <h3 className="text-light-black header-title">Payment information</h3>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div id="accordion">
                        <div className="card">
                          <div className="card-header"> <a className="collapsed card-link fw-500 fs-14" data-toggle="collapse" href="#collapseOne">
                              Pay with a Gift Card
                            </a>
                          </div>
                          <div id="collapseOne" className="collapse" data-parent="#accordion">
                            <div className="card-body no-padding payment-option-tab">
                              <div className="form-group">
                                <div className="credit-card gift-card p-relative">
                                  <input type="text" name="#" className="form-control-submit fs-16" defaultValue="AC2B76" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header"> <a className="collapsed card-link fw-500 fs-14" data-toggle="collapse" href="#collapseTwo">
                              Add a promo code
                            </a>
                          </div>
                          <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body no-padding payment-option-tab">
                              <div className="form-group">
                                <div className="credit-card promocode p-relative input-group">
                                  <input type="text" name="#" className="form-control-submit fs-16" placeholder="AC2B76" />
                                  <button type="submit" className="btn-second btn-submit ml-1">Apply</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="payment-option-tab">
                          <ul className="nav nav-tabs">
                            <li className="nav-item"> <a className="nav-link fw-600 active" data-toggle="tab" href="#savecreditcard">Saved credit card</a>
                            </li>
                            <li className="nav-item"> <a className="nav-link fw-600" data-toggle="tab" href="#newcreditcard">New credit card</a>
                            </li>
                            <li className="nav-item"> <a className="nav-link fw-600" data-toggle="tab" href="#cash">Cash</a>
                            </li>
                            <li className="nav-item"> <a className="nav-link fw-600" data-toggle="tab" href="#paypal">PayPal<sup>TM</sup></a>
                            </li>
                            <li className="nav-item"> <a className="nav-link fw-600" data-toggle="tab" href="#amexcheckout">Amex Express Checkout</a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div className="tab-pane active" id="savecreditcard">
                              <div className="form-group">
                                <div className="credit-card p-relative">
                                  <input type="text" name="#" className="form-control form-control-submit" defaultValue="VISA....1877,exp 12/21" />
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                              </div>
                              <div className="driver-tip-sec mb-xl-20">
                                <ul className="nav nav-tabs">
                                  <li className="nav-item"> <a className="nav-link fw-600 active" data-toggle="tab" href="#savetipcard">Tip with Credit Card</a>
                                  </li>
                                  <li className="nav-item"> <a className="nav-link fw-600 disabled" data-toggle="tab" href="#cashtip">Tip with Cash</a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div className="tab-pane active" id="savetipcard">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="tip-percentage">
                                          <form>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>30%</span>
                                            </label>
                                          </form>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="custom-tip">
                                          <div className="input-group mb-3">
                                            <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                            </div>
                                            <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Donate the change</h3>
                              </div>
                              <div className="form-group">
                                <label className="custom-checkbox">
                                  <input type="checkbox" name="#" /> <span className="checkmark" />
                                  Donate $0.77 to No kid Products. By checking this box you agree to the Donate the Change <a href="#">Terms of use</a> <span className="ml-2"><a href="#">Learn More</a></span>
                                </label>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                              </div>
                              <p className="text-center text-light-black no-margin">By placing your order, you agree to Ecom's <a href="#">terms of use</a> and <a href="#">privacy agreement</a>
                              </p>
                            </div>
                            <div className="tab-pane fade" id="newcreditcard">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="text-light-white fw-700">Card Number</label>
                                    <div className="credit-card card-front p-relative">
                                      <input type="text" name="#" className="form-control form-control-submit" placeholder="1234 5678 9101 1234" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label className="text-light-white fw-700">Expires on</label>
                                    <input type="text" name="#" className="form-control form-control-submit" placeholder="12/21" />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="text-light-white fw-700">Security Code</label>
                                    <div className="credit-card card-back p-relative">
                                      <input type="text" name="#" className="form-control form-control-submit" placeholder={123} />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label className="text-light-white fw-700">ZIP Code</label>
                                    <input type="text" name="#" className="form-control form-control-submit" placeholder={123456} />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="custom-checkbox">
                                      <input type="checkbox" name="#" /> <span className="checkmark" />
                                      Save Credit card</label>
                                  </div>
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                              </div>
                              <div className="driver-tip-sec mb-xl-20">
                                <ul className="nav nav-tabs">
                                  <li className="nav-item"> <a className="nav-link fw-600 active" data-toggle="tab" href="#tipnewcard">Tip with Credit Card</a>
                                  </li>
                                  <li className="nav-item"> <a className="nav-link fw-600 disabled" data-toggle="tab" href="#newcashtip">Tip with Cash</a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div className="tab-pane active" id="tipnewcard">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="tip-percentage">
                                          <form>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>30%</span>
                                            </label>
                                          </form>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="custom-tip">
                                          <div className="input-group mb-3">
                                            <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                            </div>
                                            <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Donate the change</h3>
                              </div>
                              <div className="form-group">
                                <label className="custom-checkbox">
                                  <input type="checkbox" name="#" /> <span className="checkmark" />
                                  Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <a href="#">Terms of use</a> <span className="ml-2"><a href="#">Learn More</a></span>
                                </label>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                              </div>
                              <p className="text-center text-light-black no-margin">By placing your order, you agree to Ecom's <a href="#">terms of use</a> and <a href="#">privacy agreement</a>
                              </p>
                            </div>
                            <div className="tab-pane fade" id="cash">
                              <p className="text-light-black">Have the cash ready when you receive your order.</p>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Donate the change</h3>
                              </div>
                              <div className="form-group">
                                <label className="custom-checkbox">
                                  <input type="checkbox" name="#" /> <span className="checkmark" />
                                  Apologies, but you can't donate with the selected payment type</label>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                              </div>
                              <p className="text-center text-light-black no-margin">By placing your order, you agree to Ecom's <a href="#">terms of use</a> and <a href="#">privacy agreement</a>
                              </p>
                            </div>
                            <div className="tab-pane fade" id="paypal">
                              <p className="text-light-black">Please review your order and make any necessary changes before checking out with PayPal.</p>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                              </div>
                              <div className="driver-tip-sec mb-xl-20">
                                <ul className="nav nav-tabs">
                                  <li className="nav-item"> <a className="nav-link fw-600 active" data-toggle="tab" href="#paypaltipcard">Tip with Credit Card</a>
                                  </li>
                                  <li className="nav-item"> <a className="nav-link fw-600 disabled" data-toggle="tab" href="#paypalcashtip">Tip with Cash</a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div className="tab-pane active" id="paypaltipcard">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="tip-percentage">
                                          <form>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>30%</span>
                                            </label>
                                          </form>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="custom-tip">
                                          <div className="input-group mb-3">
                                            <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                            </div>
                                            <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Donate the change</h3>
                              </div>
                              <div className="form-group">
                                <label className="custom-checkbox">
                                  <input type="checkbox" name="#" /> <span className="checkmark" />
                                  Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <a href="#">Terms of use</a> <span className="ml-2"><a href="#">Learn More</a></span>
                                </label>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn-first paypal-btn text-custom-white full-width fw-500">Checkout with
                                  <img src="assets/img/pay-pal.png" alt="image" />
                                </button>
                              </div>
                              <p className="text-center text-light-black no-margin">By placing your order, you agree to Ecom's <a href="#">terms of use</a> and <a href="#">privacy agreement</a>
                              </p>
                            </div>
                            <div className="tab-pane fade" id="amexcheckout">
                              <div className="card">
                                <div className="card-header"> <a className="card-link fw-500 fs-14" data-toggle="collapse" href="#saveamex">
                                    Saved Card
                                  </a>
                                </div>
                                <div id="saveamex" className="collapse show" data-parent="#accordion">
                                  <div className="card-body no-padding payment-option-tab">
                                    <div className="form-group">
                                      <div className="credit-card amex-card-front p-relative">
                                        <input type="text" name="#" className="form-control form-control-submit" defaultValue="VISA....1877,exp 12/21" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-header"> <a className="collapsed card-link fw-500 fs-14" data-toggle="collapse" href="#newcardamex">
                                    Add New Card
                                  </a>
                                </div>
                                <div id="newcardamex" className="collapse" data-parent="#accordion">
                                  <div className="card-body no-padding payment-option-tab">
                                    <div className="row">
                                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                        <div className="form-group">
                                          <label className="text-light-white fw-700">Card Number</label>
                                          <div className="credit-card amex-card-front p-relative">
                                            <input type="text" name="#" className="form-control form-control-submit" placeholder="1234 5678 9101 1234" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-2 col-lg-6 col-md-2 col-sm-6">
                                        <div className="form-group">
                                          <label className="text-light-white fw-700">Expires on</label>
                                          <input type="text" name="#" className="form-control form-control-submit" placeholder="12/21" />
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                                        <div className="form-group">
                                          <label className="text-light-white fw-700">Security Code</label>
                                          <div className="credit-card amex-card-back p-relative">
                                            <input type="text" name="#" className="form-control form-control-submit" placeholder={123} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6">
                                        <div className="form-group">
                                          <label className="text-light-white fw-700">ZIP Code</label>
                                          <input type="text" name="#" className="form-control form-control-submit" placeholder={123456} />
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="form-group">
                                          <label className="custom-checkbox">
                                            <input type="checkbox" name="#" /> <span className="checkmark" />
                                            Save Credit card</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Add a tip for your driver</h3>
                              </div>
                              <div className="driver-tip-sec mb-xl-20">
                                <ul className="nav nav-tabs">
                                  <li className="nav-item"> <a className="nav-link fw-600 active" data-toggle="tab" href="#tipcard">Tip with Credit Card</a>
                                  </li>
                                  <li className="nav-item"> <a className="nav-link fw-600 disabled" data-toggle="tab" href="#cashtip">Tip with Cash</a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div className="tab-pane active" id="tipcard">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="tip-percentage">
                                          <form>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" defaultChecked /> <span>15%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>25%</span>
                                            </label>
                                            <label className="radio-inline text-light-green fw-600">
                                              <input type="radio" name="tip-percentage" /> <span>30%</span>
                                            </label>
                                          </form>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="custom-tip">
                                          <div className="input-group mb-3">
                                            <div className="input-group-prepend"> <span className="input-group-text text-light-green fw-500">Custom tip</span>
                                            </div>
                                            <input type="text" className="form-control form-control-submit" placeholder="Custom tip" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="section-header-left">
                                <h3 className="text-light-black header-title">Donate the change</h3>
                              </div>
                              <div className="form-group">
                                <label className="custom-checkbox">
                                  <input type="checkbox" name="#" /> <span className="checkmark" />
                                  Donate $0.77 to No kid Hungry. By checking this box you agree to the Donate the Change <a href="#">Terms of use</a> <span className="ml-2"><a href="#">Learn More</a></span>
                                </label>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn-first green-btn text-custom-white full-width fw-500">Place Your Order</button>
                              </div>
                              <p className="text-center text-light-black no-margin">By placing your order, you agree to Ecom's <a href="#">terms of use</a> and <a href="#">privacy agreement</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="sidebar">
            <div className="cart-detail-box">
              <div className="card">
                <div className="card-header padding-15 fw-700">Your order from
                  <p className="text-light-white no-margin fw-500">Jhon Deo</p>
                </div>
                <div className="card-body no-padding" id="scrollstyle-4">
                  <div className="cat-product-box">
                    <div className="cat-product">
                      <div className="cat-name">
                        <a href="#">
                          <p className="text-light-green fw-700"><span className="text-dark-white">1</span> Sports Shoes</p> <span className="text-light-white fw-700">small, Sports Shoes</span>
                        </a>
                      </div>
                      <div className="delete-btn">
                        <a href="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                        </a>
                      </div>
                      <div className="price"> <a href="#" className="text-dark-white fw-500">
                          $2.25
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cat-product-box">
                    <div className="cat-product">
                      <div className="cat-name">
                        <a href="#">
                          <p className="text-light-green fw-700"><span className="text-dark-white">1</span>Lader Jacket</p> <span className="text-light-white fw-700">small,Lader Jacket</span>
                        </a>
                      </div>
                      <div className="delete-btn">
                        <a href="#" className="text-dark-white"> <i className="far fa-trash-alt" />
                        </a>
                      </div>
                      <div className="price"> <a href="#" className="text-dark-white fw-500">
                          $2.25
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item-total">
                    <div className="total-price border-0 pb-0"> <span className="text-dark-white fw-600">Items subtotal:</span>
                      <span className="text-dark-white fw-600">$8.50</span>
                    </div>
                    <div className="total-price border-0 pt-0 pb-0"> <span className="text-light-green fw-600">Delivery fee:</span>
                      <span className="text-light-green fw-600">Free</span>
                    </div>
                    <div className="total-price border-0 pt-0 pb-0"> <span className="text-dark-white fw-600">Sales tax:</span>
                      <span className="text-dark-white fw-600">$1.50</span>
                    </div>
                    <div className="total-price border-0 pt-0 pb-0"> <span className="text-dark-white fw-600">Tip:</span>
                      <span className="text-dark-white fw-600">$1.50</span>
                    </div>
                    <div className="total-price border-0 "> <span className="text-light-black fw-700">Total:</span>
                      <span className="text-light-black fw-700">$18.50</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 modify-order">
                  <button className="text-custom-white full-width fw-500 bg-light-green"><i className="fas fa-chevron-left mr-2" /> Modify Your Order</button>
                  <a href="#" className="total-amount"> <span className="text-custom-white fw-700">TOTAL</span>
                    <span className="text-custom-white fw-700">$18.50</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
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

export default Checkout

