import React, { useRef } from "react";
import "../../styles/register.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/userSlice";
import SignUpButton from "../login/SignUpButton";
function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();
    const dispatch = useDispatch();
    const form = (e) => {
        e.preventDefault();
        if (password.current.value === passwordConfirmation.current.value) {
            const data = new FormData();
            data.append("name", username.current.value);
            data.append("email", email.current.value);
            data.append("password", password.current.value);
            dispatch(register(data));
        }
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
                        placeholder="Username"
                        required
                        ref={username}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        ref={email}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        ref={password}
                    />
                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                        ref={passwordConfirmation}
                    />
                    <div className="checkbox">
                        <label className="rememberLabel">
                            <input type="checkbox" name="remember" />
                            <span>Remember Me</span>
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <SignUpButton></SignUpButton>
                </form>
            </div>
        </section>
    );
}

export default Register;
