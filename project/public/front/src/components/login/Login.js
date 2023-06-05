import React from "react";
import "../../styles/login.css";
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
        <section className="register">
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
                    <button type="submit">Log in</button>
                    <a href="">
                        <div className="google-sign-in">
                            <img src="./img/google-logo.png" alt="#" />
                            <a href="">Sign In With Google</a>
                        </div>
                    </a>
                    <div className="box-2">
                        <p>
                            Don't have an account?{" "}
                            <span className="sign-up-span">
                                <a href="">Sign up</a>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
