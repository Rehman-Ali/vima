import React, { Fragment } from 'react'

const NotFound = () => {
	return (
		<Fragment>
	{/* start 404 */}
<section>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="404-img">
          <h1 className="text-404">4<span className="text-white">0</span>4</h1>
        </div>
        <div className="caption white-block">
          <h5 className="text-custom-white rubik full-width">Opps! Page Not Found. <a href="#" className="text-custom-white">Try Again</a></h5>
          <a href="" className="btn btn-text mt-20">Go Back Home </a>
        </div>
      </div>
    </div>
  </div>
</section>

		</Fragment>
	)
}

export default NotFound
