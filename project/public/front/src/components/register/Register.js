import React from "react";
import "../../styles/register.css";
import { useState, useEffect } from "react";

function Register() {
    const form = (e) => {
        e.preventDefault();
    };
    const [currentState, setCurrentState] = useState(0);
    const image = [{ url: "../img/1.png" }, { url: "../img/2.png" }];
    useEffect(() => {
        const Next = setInterval(() => {
            if (currentState === image.length - 1) {
                setCurrentState(0);
            } else {
                setCurrentState(currentState + 1);
            }
        }, 3000);
        return () => {
            clearInterval(Next);
        };
    }, [currentState]);
    const goToNext = (c) => {
        setCurrentState(c);
    };
    return (
        <section className="register-wrapper">
            <div className="slider">
                <div className="img-slider">
                    <img
                        className="slider-img"
                        src={`${image[currentState].url}`}
                        alt="#"
                    />
                </div>
                <div className="next-slide">
                    {image.map((e, i) => {
                        return (
                            <span
                                className={`slider-point ${
                                    i === currentState ? "active" : ""
                                }`}
                                key={i}
                                onClick={() => {
                                    goToNext(i);
                                }}
                            ></span>
                        );
                    })}
                </div>
            </div>
            <div className="form">
                <h2>Create your account </h2>
                <form onSubmit={form} method="post">
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                    />
                    <div className="checkbox">
                        <label className="rememberLabel">
                            <input type="checkbox" name="remember" />
                            <span>Remember Me</span>
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <a href="" className="google">
                        <div className="google-sign-in">
                            <img src="./img/google-logo.png" alt="#" />
                            <span>Sign In With Google</span>
                        </div>
                    </a>
                </form>
            </div>
        </section>
    );
}

export default Register;
