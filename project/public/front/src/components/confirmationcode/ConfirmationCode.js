import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FlashCard from "../Flash card/FlashCard";
import "../../styles/confirmation.css";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState, useRef } from "react";
import axios from "axios";
export default function ConfirmationCode({ type }) {
    const navigate = useNavigate()
    const [success,setSuccess]=useState()
    const [error,setError]=useState()
    const [code, setCode] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
    });



    const confirm=()=>{
        const ncode=code["1"]+code["2"]+code["3"]+code["4"]+code["5"]+code["6"]
        console.log(ncode)
        const form = new FormData()
        form.append('code',ncode)
        axios.post('http://localhost:8000/api/VerifyEmail',form)
        .then(res=>{if(res.status==200){
            setSuccess(true)
            setTimeout(() => {
                navigate('/')
            }, 10000);
        }
    else{
        setError(false)
    }})
    }

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
                    <button className="verify-button" onClick={confirm}  >   Verify</button>
                </div>
            </div>
            <div className="errorDi">
                {error && (
                    <FlashCard
                        toogle={setError}
                        type="error"
                        content="code error"
                        title="Error"
                    />
                )}

                {success && (
                    <FlashCard
                        toogle={setError}
                        type="success"
                        content="Vien verifier "
                        title="email verification"
                    />
                )}
            </div>
        </div>
    );
}
