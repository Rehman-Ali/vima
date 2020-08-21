import React, { Fragment, useEffect } from 'react'
import MainHeader from '../../layout/Header/MainHeader'
import { useDispatch, useSelector } from "react-redux";
import { SERVER_URL , IMAGE_URL} from "../../components/utils/config";
import { ALL_NEWS_SUCCESS, ALL_NEWS_FAIL, NEWS_DETAIL} from "../../actions/types";
import {Link} from 'react-router-dom';
import Footer from '../../layout/Footer';
const BlogRight = () => {

  const allnews = useSelector((state) => state.news.allNews);
  
   const dispatch = useDispatch()
 

   const onSubmit = (item) =>{
     dispatch({
       type: NEWS_DETAIL ,
       payload: item 
      }
      )
   }


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
           
    }, []);
  
  return (
		<Fragment>
			
	
  <MainHeader/>
  {/* breadcrumb */}
  <div className="breadcrumb-area">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Blog Grid Left</h2>
        <ul>
          <li><a href="">Home</a>
          </li>
          <li className="active">Blog Left Sidebar</li>
        </ul>
      </div>
    </div>
  </div>
  {/* breadcrumb */}
  {/* Blog */}
  <section className="our-articles bg-light-theme section-padding ">
    <div className="container-fluid custom-container">
      <div className="row">
        <aside className="col-xl-3 col-lg-4">
          <div className="side-bar mb-md-40">
            <div className="main-box padding-20 side-blog mb-xl-20">
              <h5 className="text-light-black">Recent Post</h5>
              {allnews.length > 0 ? allnews.slice(0,4).map((item, index) => 
           
              <article className="side-post pb-xl-20 mb-xl-20 u-line" key={index}>
                <div className="thumb-img">
                  <a href="blog-details">
                    <img src={IMAGE_URL + item.image} style={{height:'80px', width:'80px'}} alt="thumb-img" />
                  </a>
                </div>
                <div className="content-wrap">
                  <div className="entry-meta-content">
                    <h6 className="entry-title">
                    <Link to="/blog-details" onClick={() => onSubmit(item)} className="text-light-black">{item.title}</Link>
                    </h6>
                    <div className="entry-tye"> <span className="text-light-white fw-400">06 Jan 2020</span>
                    </div>
                  </div>
                </div>
              </article>
              ): null }
           </div>
          </div>
        </aside>
        <div className="col-xl-9 col-lg-8">
          <div className=" full-width">
            <div className="row">
            {allnews.length > 0 ? allnews.map((item, index) => 
              <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                <article className="blog-item blog-item-box">
                  <div className="blog-item-img">
                    <img className="blog-img" src={IMAGE_URL + item.image} alt="img" />
                    {/* <ul className="blog-item-badge"> */}
            {/* <li><a href="#">{item.title}</a> </li> */}
                      {/* <li><a href="#">Health</a></li> */}
                    {/* </ul> */}
                  </div>
                  <div className="blog-item-content">
            <h5 className="blog-item-title"><Link to="/blog-details" onClick={() => onSubmit(item)}>{item.title}</Link></h5>
            <p>{item.description.substring(0, 80)}</p>
                    <div className="blog-item-details">
                      <span className="blog-item-date"><i className="fas fa-calendar-week" /> 23 Jan' 19</span>
                      {/* <span><i className="fas fa-comment-dots" /> 501</span> */}
                      </div>
                  </div>
                </article>
              </div>
              ): null}
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

export default BlogRight
