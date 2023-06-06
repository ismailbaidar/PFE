import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../styles/confirmation.css";
import { useEffect, useState, useRef } from "react";
export default function ConfirmationCode({ type }) {
    const [code, setCode] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
    });

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();
    useEffect(() => {
        input1.current.focus();
    }, []);

    return (
        <div className="confirmation-code-container">
            <div className="confirmation-code-wrapper">
                <div className="first-part">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="envlope-icon"
                    />
                    <p className="paragraph-confirmation-type">
                        verify your email
                    </p>
                </div>
                <div className="second-part">
                    <div className="email-viewer">
                        A verification code has been send to s*************.com
                    </div>
                    <div className="paragraph">
                        Please check you inbox and enter the verification code
                        below to verify your email
                    </div>
                    <div className="inputs">
                        <input
                            ref={input1}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    1: e.target.value.substring(
                                        e.target.value.length - 1
                                    ),
                                });
                            }}
                            onKeyDown={(e) => {
                                setTimeout(() => {
                                    if (e.code == "Backspace") {
                                        input1.current.focus();
                                    } else {
                                        input2.current.focus();
                                    }
                                }, 50);
                            }}
                            value={code[1]}
                        ></input>
                        <input
                            ref={input2}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    2: e.target.value.substring(
                                        e.target.value.length - 1
                                    ),
                                });
                            }}
                            onKeyDown={(e) => {
                                setTimeout(() => {
                                    if (e.code == "Backspace") {
                                        input1.current.focus();
                                    } else {
                                        input3.current.focus();
                                    }
                                }, 50);
                            }}
                            value={code[2]}
                        ></input>
                        <input
                            ref={input3}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    3: e.target.value.substring(
                                        e.target.value.length - 1
                                    ),
                                });
                            }}
                            onKeyDown={(e) => {
                                setTimeout(() => {
                                    if (e.code == "Backspace") {
                                        input2.current.focus();
                                    } else {
                                        input4.current.focus();
                                    }
                                }, 50);
                            }}
                            value={code[3]}
                        ></input>
                        <input
                            ref={input4}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    4: e.target.value.substring(
                                        e.target.value.length - 1
                                    ),
                                });
                            }}
                            onKeyDown={(e) => {
                                setTimeout(() => {
                                    if (e.code == "Backspace") {
                                        input3.current.focus();
                                    } else {
                                        input5.current.focus();
                                    }
                                }, 50);
                            }}
                            value={code[4]}
                        ></input>
                        <input
                            ref={input5}
                            onChange={(e) => {
                                setCode({
                                    ...code,
                                    5: e.target.value.substring(
                                        e.target.value.length - 1
                                    ),
                                });
                            }}
                            onKeyDown={(e) => {
                                setTimeout(() => {
                                    if (e.code == "Backspace") {
                                        input4.current.focus();
                                    } else {
                                        input6.current.focus();
                                    }
                                }, 50);
                            }}
                            value={code[5]}
                        ></input>
                        <input
                            ref={input6}
                            onChange={(e) =>
                                setCode({
                                    ...code,
                                    6: e.target.value.substring(
                                        e.target.value.length - 1
                                    ),
                                })
                            }
                            onKeyDown={(e) => {
                                setTimeout(() => {
                                    if (e.code == "Backspace") {
                                        input5.current.focus();
                                    } else {
                                        input6.current.focus();
                                    }
                                }, 50);
                            }}
                            value={code[6]}
                        ></input>
                    </div>
                    <button className="verify-button">Verify</button>
                </div>
            </div>
        </div>
    );
}
