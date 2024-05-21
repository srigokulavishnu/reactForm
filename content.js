import React, { useState }  from "react";
const Content = () => {
    const [username,setUsername]=useState(""); 
    const [pass,setPass]=useState(""); 
    const [cpass,setCpass]=useState(""); 
    const [mail,setMail]=useState(""); 
    const [phone,setPhone]=useState(""); 

    
      function Validate (e){ 
      
       

       let isvalid=true;
        
        
        
        if(username === "" || pass === "" || cpass === "" || mail === "" || phone === "")
            {
                alert("All fields Required");
                isvalid=false;
                
            }
        else{    
        if(pass.length < 6)
            {
                alert("Password must be 6 caharacters ");
                isvalid=false;
            }
        if(cpass !== pass)
            {
                alert("Passwords don't match");
                isvalid=false;
            }
        if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail)))
            {
                alert("Invalid Mail");
                isvalid=false;
            }
        if(!(/^\d{10}$/.test(phone)))
            {
                alert("Invalid Phone Number");
                isvalid=false;
            }
            if(isvalid === false){
                e.preventDefault();
    
            }
            
          
        }
        if(isvalid === false){
            e.preventDefault();

        }
    }

    return (

        
 <div className="loginpage">
        <form action="/" id="form" method="get">
       <center><h2>Register</h2></center> 
        <div className="loginele">
              <label className="loginlable" for ="username">Username:</label>
              <input type="text" id="username"    
                            onChange={(e)=> setUsername(e.target.value)}></input>
              

        </div>

        <div className="loginele">
            <label className="loginlable" for="password">Password:</label>
            <input type="password" id="password"  onChange={(e)=> setPass(e.target.value)}></input>
            

      </div>
      <div className="loginele">
        <label className="loginlable" for="cpassword">Confirm password:</label>
        <input type="password" id="cpassword"  onChange={(e)=> setCpass(e.target.value)} ></input>
        

  </div>
  <div className="loginele">
    <label className="loginlable" for ="mail">E-mail:</label>
    <input type="text" id="mail"  onChange={(e)=> setMail(e.target.value)}></input>
    <div className="error" id="mail-error"></div>

</div>
<div className="loginele">
    <label className="loginlable" for="phone">phone no:</label>
    <input type="text" id="phone"  onChange={(e)=> setPhone(e.target.value)}></input>
    <div id="error"></div>

</div>
<button    type="submit" onClick={(e) => Validate (e)} >Register</button>
</form>    
    </div>
       
   
    );
    
   
}
export default Content;