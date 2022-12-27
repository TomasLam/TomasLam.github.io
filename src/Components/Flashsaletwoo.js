import React from "react";

import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faStar} from '@fortawesome/free-solid-svg-icons' ;

const Flashsaletwoo = () => {
    return(
        
                    <div class="fsale-three">
                  <div class="col">
                    <div class="card">
                      <div class="img">
                          <div class="card-menu">
                          <a href="#" class="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a> 
                              <a href="#" class="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>                                                  
                              <a href="#" class="white-circle"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></a>
                          </div>
                          <a class="btn-QW" href="">
                              <span class="shopbtn-leftt"></span>
                              QUICK VIEW
                              <span class="shopbtn-rightt"></span>
                          </a>
                      </div>
                      <div class="card-body">
                        <p class="card-cate">Category</p>  
                        <h5 class="card-title">Modern Black Blouse</h5>
                        <p class="card-rate">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </p>
                        <p class="card-pri">$29</p>
                      </div>
                    </div>
                    </div>
                

                    <div class="col">
                    <div class="card">
                      <div class="img">
                          <div class="card-menu">
                          <a href="#" class="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a> 
                              <a href="#" class="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>                                                  
                              <a href="#" class="white-circle"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></a>
                          </div>
                          <a class="btn-QW" href="">
                              <span class="shopbtn-leftt"></span>
                              QUICK VIEW
                              <span class="shopbtn-rightt"></span>
                          </a>
                      </div>
                      <div class="card-body">
                        <p class="card-cate">Category</p>  
                        <h5 class="card-title">Modern Black Blouse</h5>
                        <p class="card-rate">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </p>
                        <p class="card-pri">$29</p>
                      </div>
                      </div>
                 </div>
                 
                   </div>
                              
                
        
    )
}

export default Flashsaletwoo;
