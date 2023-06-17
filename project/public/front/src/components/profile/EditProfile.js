import "../../styles/edit-profile.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/userSlice";
export default function EditProfile() {
    const username = useRef();
    const email = useRef();
    const emailConfirmation = useRef();

    const dispatch = useDispatch();

    function sendForm() {
        if (
            email.current.value === emailConfirmation.current.value &&
            username.current.value.length > 1
        ) {
            const data = new FormData();
            data.append("username", username.current.value);
            data.append("email", email.current.value);
            dispatch(updateUser(data));
        }
    }

    return (
        <div className="edit-profile">
            <legend>Edit Profile Information</legend>
            <label htmlFor="">
                username
                <input type="text" placeholder="example" ref={username} />
            </label>

            <label htmlFor="">
                email
                <input
                    type="email"
                    placeholder="example@example.com"
                    ref={email}
                />
            </label>
            <label htmlFor="">
                confirm email
                <input
                    type="email"
                    placeholder="example@example.com"
                    ref={emailConfirmation}
                />
            </label>
            <button
                onClick={() => sendForm()}
                className="update-profile-button"
            >
                Update Profile
            </button>
        </div>
    );
}
