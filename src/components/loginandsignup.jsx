import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const LoginandSignup = () => {
    const [nameFieldMaxHeight, setNameFieldMaxHeight] = useState("60px");
    const [title, setTitle] = useState("Sign Up");
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSignInClick = () => {
        setNameFieldMaxHeight("0");
        setTitle("Sign In");
        setIsSignUp(false);
    };

    const handleSignUpClick = () => {
        setNameFieldMaxHeight("60px");
        setTitle("Sign Up");
        setIsSignUp(true);
    };

    return (
        <>
            <div className="container">
                <div className="form-box">
                    <h1 id="title">{title}</h1>
                    <form>
                        <div className="input-group">
                            <div className="input-field" style={{ maxHeight: nameFieldMaxHeight }}>
                                <i>
                                    <AiOutlineUser />
                                </i>
                                <input id="input" type="text" placeholder="Name" />
                            </div>
                            <div className="input-field">
                                <i>
                                    <AiOutlineMail />
                                </i>
                                <input id="input" type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i>
                                    <AiOutlineLock />
                                </i>
                                <input id="input" type="password" placeholder="Password" />
                            </div>
                            <p>
                                Forgot Password <a href="#">Click Here</a>
                            </p>
                        </div>
                        <div className="btn-field">
                            <button
                                type="button"
                                id="signupBtn"
                                onClick={handleSignUpClick}
                                className={isSignUp ? "" : "disable"}>
                                Sign Up
                            </button>
                            <button
                                type="button"
                                id="signinBtn"
                                onClick={handleSignInClick}
                                className={isSignUp ? "disable" : ""}>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginandSignup;
