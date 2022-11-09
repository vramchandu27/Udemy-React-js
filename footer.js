import React from 'react';
 
const Footer = () => {
    return(
        <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>IT park pvt lmt INC</h4>
                    <ul className="list-unstyled">
                        <li>342-879-1298</li>
                        <li>Tamilnadu, India</li>
                        <li>121 Anna nagar Chennai</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Stuffs</h4>
                    <ul className="list-unstyled">
                        <li>Developing</li>
                        <li>Testing</li>
                        <li>Supporting </li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Offers</h4>
                    <ul className="list-unstyled">
                        <li>Enabling</li>
                        <li>Pension</li>
                        <li>recreating </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} IT park pvt lmt INC | All rights reserved | Terms of Service | Privacy
                </p>
            </div> 
        </div>
  </div>
    )
}
  
export default Footer;