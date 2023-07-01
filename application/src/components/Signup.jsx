import { Link, json } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const { useRef } = require("react");

const Signup = ()=>{

    let navigate = useNavigate();

    let name = useRef();
    let email = useRef();
    let phone = useRef();
    let age = useRef();
    let pwd = useRef();

    let array = [];

    if(localStorage.getItem("appusers")==null)
    {
        localStorage.setItem("appusers",JSON.stringify(array));
    }

    let r = localStorage.getItem("appusers");
    let users =  JSON.parse(r);

    let handleuser =(e)=>
    {
        e.preventDefault();
        let status = users.some((user)=>{ return user.name==name.current.value});
        if(status == true)
        {
            alert("User already exsist.....Please login to continue !!!");
            navigate("/login");
        }
        else{
            let newuser = {
                name : name.current.value,
                email : email.current.value,
                phoneno : phone.current.value,
                age : age.current.value,
                password : pwd.current.value
            }

             users.push(newuser);
           localStorage.setItem("appusers",JSON.stringify(users));

           alert("sign up successfull  !!!");
           navigate("/home");

        }

    }


    return (

        <div id="signup">
            <br />
     <form  onSubmit={handleuser} >

        <h2>Sign Up</h2> <br />
    
    <input type="text" placeholder="Enter your name" ref={name}/><br /> <br />
    <input type="email" placeholder="Enter your email" ref={email}/><br /> <br />
    <input type="text" placeholder="Enter your phone Number" ref={phone}/><br /> <br />
    <input type="number" min="18" max="100" placeholder="Enter your age" ref={age}/> <br /> <br />
    <input type="password" placeholder="Enter password" ref={pwd}/> <br /> <br />

     <button id="sub">Submit</button>
     <br /> <br />

     {/* <span>Already have an account </span>  <Link to="/login"> Login</Link> */}

    </form>

        </div>
    )
}
   
export default Signup;