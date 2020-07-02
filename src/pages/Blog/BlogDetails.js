import React, { Fragment } from 'react'
import MainHeader from '../../layout/Header/MainHeader'

const BlogDetails = () => {
	return (
		<Fragment>
<MainHeader/>
 {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Blog Details</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li><a href="blog">Blog</a>
          </li>
          <li className="active">Blog Details Sidebar</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/* Blog */}
  <section className="our-articles bg-light-theme section-padding ">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-xl-9 col-lg-8">
          <div className="main-box padding-20 full-width">
            <div className="post-wrapper mb-xl-20">
              <div className="blog-item-img">
                <img src="assets/img/blog/details.jpg" className="img-fluid full-width" alt="#" />
                <ul className="blog-item-badge">
                  <li><a href="#">Water</a> </li>
                  <li><a href="#">Health</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="blog-meta mb-xl-20">
                  <h5 className="blog-title text-light-black">Best Diamonds Product in Brooklyn.</h5>
                  <div className="blog-meta-author">
                    <p className="text-light-white mb-0 fs-16"><span><i className="fas fa-user" /></span> <a href="#"> Admin</a>
                    </p>
                    <p className="text-light-white mb-0 fs-16"><span><i className="fas fa-calendar-week" /></span> <a href="#"> 25 January, 2020</a>
                    </p>
                  </div>
                  <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="blog-meta mb-xl-20">
                  <h6 className="blog-title text-light-black">Why do we choose it?</h6>
                  <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="blog-meta mb-xl-20">
                  <h6 className="blog-title text-light-black">Where does it come from?</h6>
                  <p className="text-light-white mb-xl-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                  <p className="text-light-white">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div className="blog-meta mb-xl-20">
                  <h6 className="blog-title text-light-black">Where can I get that product?</h6>
                  <p className="text-light-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
                <div className="blog-meta mb-xl-20">
                  <h6 className="blog-title text-light-black">Why do we order from there?</h6>
                  <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <blockquote>
                  <p>"Chinese is the popular Producrt, Lorem Ipsum is not simply random text. It has roots in a piece of classical chinese."</p>
                </blockquote>
                <hr />
                <div className="post-details-tags-social mb-xl-20">
                  <div className="row">
                    <div className="col-lg-8 col-md-6">
                      <div className="tags-box">
                        <span className="fs-18 text-light-white"><i className="fas fa-tags" /></span>
                        <div className="tags">
                          <a href="#">Rent</a>
                          <a href="#">Buy</a>
                          <a href="#">Sale</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="social-media-box">
                        <ul className="custom">
                          <li><a href="#" className="fb"><i className="fab fa-facebook-f" /></a></li>
                          <li><a href="#" className="tw"><i className="fab fa-twitter" /></a></li>
                          <li><a href="#" className="gg"><i className="fab fa-google-plus-g" /></a></li>
                          <li><a href="#" className="ln"><i className="fab fa-linkedin-in" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-box">
                  <div className="section-header-left">
                    <h6 className="text-light-black header-title">Comments</h6>
                  </div>
                  <div className="review-box">
                    <div className="review-user">
                      <div className="review-user-img">
                        <img src="assets/img/blog/user1.jpg" className="rounded-circle" alt="#" />
                        <div className="reviewer-name">
                          <p className="text-light-black fw-600">Sarra</p>
                        </div>
                      </div>
                      <div className="review-date"> <span className="text-light-white">Jan 20, 2020</span>
                      </div>
                    </div>
                    <p className="text-light-black">Delivery was fast and friendly. product was not great especially the salad. Will not be ordering from again. Too many options to settle for this place.</p>
                  </div>
                  <div className="review-box comment-reply">
                    <div className="review-user">
                      <div className="review-user-img">
                        <img src="assets/img/blog/user2.jpg" className="rounded-circle" alt="#" />
                        <div className="reviewer-name">
                          <p className="text-light-black fw-600">Sarra </p>
                        </div>
                      </div>
                      <div className="review-date"> <span className="text-light-white">Sep 20, 2020</span>
                      </div>
                    </div>
                    <p className="text-light-black">Delivery was fast and friendly. product was not great especially the salad. Will not be ordering from again. Too many options to settle for this place.</p>
                  </div>
                  <div className="review-box">
                    <div className="review-user">
                      <div className="review-user-img">
                        <img src="assets/img/blog/user3.jpg" className="rounded-circle" alt="#" />
                        <div className="reviewer-name">
                          <p className="text-light-black fw-600">Sarra</p>
                        </div>
                      </div>
                      <div className="review-date"> <span className="text-light-white">Sep 20, 2020</span>
                      </div>
                    </div>
                    <p className="text-light-black">Delivery was fast and friendly. product was not great especially the salad. Will not be ordering from again. Too many options to settle for this place.</p>
                  </div>
                  <div className="review-box comment-reply">
                    <div className="review-user">
                      <div className="review-user-img">
                        <img src="assets/img/blog/user4.jpg" className="rounded-circle" alt="#" />
                        <div className="reviewer-name">
                          <p className="text-light-black fw-600">Sarra</p>
                        </div>
                      </div>
                      <div className="review-date"> <span className="text-light-white">Sep 20, 2020</span>
                      </div>
                    </div>
                    <p className="text-light-black">Delivery was fast and friendly. product was not great especially the salad. Will not be ordering from again. Too many options to settle for this place.</p>
                  </div>
                </div>
                <div className="comment-form">
                  <div className="section-header-left">
                    <h6 className="text-light-black header-title">Leave a Reply</h6>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="text-light-black fw-600">Full Name</label>
                          <input type="text" name="#" className="form-control form-control-submit" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="text-light-black fw-600">Email Address</label>
                          <input type="email" name="#" className="form-control form-control-submit" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="text-light-black fw-600">Your Comment</label>
                          <textarea className="form-control form-control-submit" name="#" rows={6} placeholder="Your Comment" defaultValue={""} />
                        </div>
                        <button type="submit" className="btn-second btn-submit full-width">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-xl-3 col-lg-4">
          <div className="side-bar mb-md-40">
            <div className="main-box padding-20 side-blog mb-xl-20">
              <h5 className="text-light-black">Popular Post</h5>
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
        </aside>
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

export default BlogDetails

