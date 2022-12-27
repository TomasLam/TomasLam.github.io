

import React, {useState} from 'react';


function Theform() {

  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const checkEmail = (e) =>{
    setEmail(e.target.value);
    if(regex.test(email)=== false){
      setError('Enter valid email adress ');
    }else{
      setError('')
      return true;
    }
    //alert('test');
  }

  const submit = () =>{
    if(email!==''){
      setMsg('Comment posted') 
      alert('Comment posted')
    }else{
      setError('Please enter email')
    }
  }
  return (
    <div class="theform">
    <div class="name-email">
          <label class="fnametext" for="Firstname"></label>
          <input class="fnameinput" type="text" id="fullName" placeholder="Fullname" required/>

          <label class="emailtxt-lower" for="Emailadress"></label>
          <input class="emailinput-lower" type="email" id="email" placeholder="Email" onChange={checkEmail} required />
          <p class="email-error">{error}</p>
          </div>

          
       
          <div class="comment-box">
          <label class="comments-lower" for="comments"></label>
          <textarea class="commentsinput-lower" type="text"  id="comments" placeholder="Comments"/>
          </div>

          <div>
              <button class="post-btn" type="submit" onClick={submit}>Post Comments</button>
          </div>
          <p>{msg}</p>
          <script src="all-letter.js"> </script>
  </div>
  );
}

export default Theform;
