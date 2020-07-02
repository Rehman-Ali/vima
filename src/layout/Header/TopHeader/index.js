import React, { Fragment } from 'react'

const TopHeader = () => {
    return (
        <Fragment>
            <div className="top-header">
    <div className="container-fluid custom-container">
      <div className="row">
        <div className="col-md-6">
          <div className="top-left">
            <ul className="top-info">
              <li><a href="#"><i className="fas fa-phone-alt" /> +000 123 45678</a></li>
              <li><a href="#"><i className="fas fa-envelope" /> info@example.com</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="top-right">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-square" /></a> </li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter-square" /></a> </li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a> </li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin" /></a> </li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-youtube" /></a> </li>
            </ul>
            <a href="#" className="top-btn">$ Donate now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
    )
}

export default TopHeader
