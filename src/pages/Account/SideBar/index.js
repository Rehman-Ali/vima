import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const SideBar = () => {
    return (
        <Fragment>
            <div className="main-box padding-20 trending-blog-cat mb-xl-20">
              <h5 className="text-light-black">Account Info</h5>
              <ul>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="/profile" className="text-light-black fw-600">Profile</Link>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="/add-donation" className="text-light-black fw-600">Add Donation</Link>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="/donation-history" className="text-light-black fw-600">Donation History</Link>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="/become-volunteer" className="text-light-black fw-600">Become Volunteer </Link>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="/donation-request" className="text-light-black fw-600">Request for Donation</Link>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="/change-password" className="text-light-black fw-600">Change Password</Link>
                </li>
                <li className="pb-xl-20 u-line mb-xl-20"> <Link to="#" className="text-light-black fw-600">Logout</Link>
                </li>
              </ul>
            </div>
        </Fragment>
    )
}

export default SideBar
