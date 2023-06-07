import React from "react";
import "../../styles/register.css";
import { useState, useEffect } from "react";

function Login() {
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
                <h2>Log in </h2>
                <form onSubmit={form} method="post">
                    <input
                        type="text"
                        name="first_name"
                        placeholder="Email addres"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <div className="checkbox">
                        <label className="rememberLabel">
                            <input type="checkbox" name="remember" />
                            <span>Keep me logged in </span>
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

export default Login;
