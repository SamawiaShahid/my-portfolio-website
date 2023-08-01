import Link from "next/link";


const SignIn =()=>{
    return(
         <div className="square mt-20 flex justify-center">
           <div id="signin" className="login">
              <h2>Login</h2>
            <div className="inputbox">
                <input type="text" placeholder="Username"></input>
            </div>
            <div className="inputbox">
                <input type="password"placeholder="Password"></input>
            </div>
            <div className="inputbox">
                <input type="submit"placeholder="Sign In"></input>
            </div>
            <div className="links">
                <a href="#">Forgot Password</a>
                <a href="#">Sign Up</a>
            </div>
        </div>
    </div>
    )
}
export default SignIn;
