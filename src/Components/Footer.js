import React from "react";


import {} from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component{
    render() {
        return(
            <footer>
                 <section class="cpyright"> 
          <div class="brand-icons">
          <button type="button" class="fb-icons"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button>
            <button type="button" class="ig-icon"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></button>
            <button type="button" class="twi-icon"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></button>
            <button type="button" class="gg-icon"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
            <button type="button" class="lk-icon"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></button>
        </div>

        <p class="copyrighttxt">© 2022 Fixxo. All Rights Reserved</p>
        </section>

        <hr className="hrline" />
            </footer>

            
        )
    }
}

export default Footer;