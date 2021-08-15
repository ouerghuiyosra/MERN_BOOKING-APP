import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light footerPage">
        <footer>
          <div className="row my-5 justify-content-center py-5">
            <div className="col-11">
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <h4 className="mb-3 mb-lg-4 bold-text "><b> AirBnB</b></h4>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h4 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h4>
                  <ul className="list-unstyled">
                    <li>Home</li>
                    <li>About</li>
 
                  </ul>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h4 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b className="bold-text">ADDRESS</b></h4>
                  <p className="mb-1">605, RATAN ICON BUILDING</p>
                  <p>SEAWOODS SECTOR</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook bold-text" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-linkedin-square bold-text" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-twitter bold-text" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-instagram bold-text" aria-hidden="true" /></span> </p><small className="rights"><span>®</span> airbnb All Rights Reserved.</small>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h4 className="mt-55 mt-2 text-muted bold-text"><b className="bold-text">OUERGHUI YOSRA</b></h4><small> <span><i className="fa fa-envelope " aria-hidden="true" /></span> ouerghui@gmail.com</small>
                </div>
            
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}

export default Footer
