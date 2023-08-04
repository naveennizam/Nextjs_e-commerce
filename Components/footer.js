import React from 'react'

const Footer = () => {
    return (
        <> 
        {/* npm i @artsy/fresnel , add thid --> disableDynamicMediaQueries 
          to keep it away  Warning: Expected server HTML to contain a matching <div> in <div>. */}
     
            <div className="footer text-light bg-dark py-4 mt-5" disableDynamicMediaQueries>
                <div className="container " >
                    <div className="row ">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="ft-logo">
                                <img src="https://easetemplate.com/free-website-templates/cointrade/images/logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <hr className="footer-line" />
                    <div className="row  py-3">

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 px-5">
                            <div className="footer-widget ">
                                <h5 className="footer-title">Company</h5>
                                <ul className="list-unstyled ">
                                    <li><a href="#" className='nav-link p-0 text-muted'>About</a></li>
                                    <li><a href="#" className='nav-link p-0 text-muted'>Support</a></li>

                                    <li><a href="#" className='nav-link p-0 text-muted'>Legal & Privacy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 px-5 ">
                            <div className="footer-widget ">
                                <h5 className="footer-title"> Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#" className='nav-link p-0 text-muted'>News</a></li>
                                    <li><a href="./login" className='nav-link p-0 text-muted'>Contact us</a></li>
                                    <li><a href="#" className='nav-link p-0 text-muted'>FAQ</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 px-5">
                            <div className="footer-widget ">
                                <h5 className="footer-title">Social</h5>
                                <ul className="list-unstyled">

                                    <li><a href="www.linkedin.com/in/naveen-nizam-079637211" className='nav-link p-0 text-muted'>Linked In</a></li>
                                    <li><a href="https://github.com/naveennizam" className='nav-link p-0 text-muted'>Github</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
                            <div className="tiny-footer">
                                <p>Copyright © All Rights Reserved 2023 | Template Design & Development by <i className='text-warning '>Naveen Nizam</i></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer