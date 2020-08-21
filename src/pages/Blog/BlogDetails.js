import React, { Fragment } from 'react'
import MainHeader from '../../layout/Header/MainHeader'
import {useSelector} from 'react-redux';
import {IMAGE_URL} from '../../components/utils/config';
import Footer from '../../layout/Footer';
const BlogDetails = () => {
  const news = useSelector(state => state.news.newsDetail)
 console.log('news', news)
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
                <img src={news.length > 0 && IMAGE_URL +  news[0].image } style={{height: '600px', width:'800px'}} className="img-fluid full-width" alt="#" />
                
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="blog-meta mb-xl-20">
                  <h5 className="blog-title text-light-black">{ news.length > 0 && news[0].title}</h5>
                  <div className="blog-meta-author">
                    {/* <p className="text-light-white mb-0 fs-16"><span><i className="fas fa-user" /></span> <a href="#"> Admin</a> */}
                    {/* </p> */}
                    <p className="text-light-white mb-0 fs-16"><span><i className="fas fa-calendar-week" /></span> <a href="#"> 25 January, 2020</a>
                    </p>
                  </div>
                  <p className="text-light-white">{news.length > 0 && news[0].description}</p>
                </div>
                    <hr />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Sucscriber */}
  <Footer/>
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

