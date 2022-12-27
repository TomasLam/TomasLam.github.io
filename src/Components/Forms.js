import React from 'react';
import {} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons' ;

const Forms = () => {
    return(
            <section class="formsite">

        <div class="contact-icon">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> 
            <p class="contact-text">Contacts</p>
        </div>

        <div class="maps">
            <img src="bilder/map2.svg" alt="map" /> 
        </div> 

            </section>
    )
}

export default Forms

