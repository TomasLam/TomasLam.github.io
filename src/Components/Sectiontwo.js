import React from "react";

import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faStar} from '@fortawesome/free-solid-svg-icons' ;

class Sectiontwo extends React.Component{
    render(){
    return(
        <div>
        <section class="sect-two">
        <div class="posing-girl">
            <img src="bilder/topside-girl.png" alt="posing girl"/>
        </div>

        <div class="sale-text">
            <p class="sale-off"><span class="sale-up">Sale Up</span> 
            To 50% Off</p>
            
            <p class="online-shop-text">Online shopping free home delivery over $100</p>
            <a class="shopnow-btn" href="#">
                <span class="shopbtn-left"></span>
                SHOP NOW
                <span class="shopbtn-right"></span>
            </a>
        </div>

        <div class="posing-male">
            <img src="bilder/topside-male.png" alt="posing-male"/>
        </div>
       </section>   

       <section class="featured-prod">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
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
                      <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
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
                        <p class="card-pri">$35.00</p>
                      </div>
                    </div>
                  </div>  
                  </div>   
                  </div>                   
       </section>

        </div>
        )
    }
}

export default Sectiontwo;