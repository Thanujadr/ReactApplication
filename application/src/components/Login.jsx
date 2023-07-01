import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ()=>{

    let mail = useRef();
    let pwd = useRef();

    let nav = useNavigate();

    function loginvalidate()
    {
        let email = mail.current.value;
        let password = pwd.current.value;
    
    
    let users = localStorage.getItem("appusers");
    users = JSON.parse(users);
    console.log(users);
    let userdetails;
    for (let i = 0; i < users.length; i++) {
      
        if(users[i].email == email)
        {
            userdetails = users[i];
            break;
        }
    }
    console.log(userdetails);
    if(userdetails == undefined)
    {
        alert("user does not exist !!!")
    }
    else if( userdetails.password != password )
    {
         alert("Wrong password ,,,,please enter valid password !!!")
    }
    else
    {
        alert("login successfully !!!")
        localStorage.setItem("currentuser",JSON.stringify(userdetails));
         nav("/home");
    }
    
    }


    return(
        <div>

        <div id="login">
            <h1>Login</h1>
            <br /> <br />

            <input type="email" placeholder="Enter your email" ref={mail}/><br /><br />
            <input type="password" placeholder="Enter password" id="" ref={pwd}/> <br /> <br />
           <button type="submit" onClick={loginvalidate}>Login</button>
             <br /> <br />
            <span>Don't have an account  </span><Link to="/"> SignUp</Link> 
        </div>

        </div>
    )
}
export default Login;