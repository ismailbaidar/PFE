import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../../features/userSlice";
const SignUpButton = () => {
    const dispatch = useDispatch();
    const clientId =
        "130611290490-fu0cj8ae0va6l6djkgsnaa8eo2odqvgo.apps.googleusercontent.com";
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: "",
            });
        }
        gapi.load("client:auth2", start);
    }, []);
    const responseGoogle = async (response) => {
        dispatch(loginGoogle(response));
    };

    return (
        <GoogleLogin
            className="google-sign-up-button"
            clientId="130611290490-fu0cj8ae0va6l6djkgsnaa8eo2odqvgo.apps.googleusercontent.com"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    );
};

export default SignUpButton;
