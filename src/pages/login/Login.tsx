import { Slideshow } from "@material-ui/icons";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <div className="logo">
                    <Slideshow />
                    <h2>Movie.TV</h2>
                </div>
            </div>
        </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" required/>
          <input type="password" placeholder="Password" required/>
          <button className="loginButton">Sign In</button>
          <span>
            New to Movie.TV? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}