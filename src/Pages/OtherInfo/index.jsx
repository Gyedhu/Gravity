import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Form, Input, Button, ImagePicker } from "../../components";
import { setLoading, setNotification, setOtherInfo } from "../../Redux/actions";
import { connect } from "react-redux";
import { auth, database, storage } from "firebase";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
    name: state.user.name,
    password: state.user.password,
    email: state.user.email
});

const mapDispatchToProps = dispatch => ({
    setLoading: value => dispatch(setLoading(value)),
    setNotification: value => dispatch(setNotification(value)),
    setOtherInfo: (dob, gender, url, profession) => dispatch(setOtherInfo({ dob, gender, url, profession }))
});

const OtherInfo = ({ currentForm, goto, email, name, password, setLoading, setNotification }) => {

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    const [url, setUrl] = useState("");
    const [file, setFile] = useState(null);
    const [homepage, setHomepage] = useState(false);

    const changePage = e => {
        e.preventDefault();
        goto("signup");
    }

    const pushUserData = (uid, data, url) => {
        const userRef = database().ref(`users/info/${uid}`);
        userRef.set({
            name: name,
            email: email,
            profileImage: url,
            dob: data["date of birth"],
            profession: data.profession,
            gender: data.gender
        });
    }

    // Signup
    const handleOtherInfoSubmit = async data => {

        // Set loading with message
        setLoading("Signing up...");

        try {
            // Signin up with email and password
            const userData = await auth().createUserWithEmailAndPassword(email, password);

            // if success
            // get the user
            const { user } = userData;

            // make a url variable to store image url
            let url = null;

            // Uploading profile photo
            if (file) {

                // Getting a storage ref
                const storageRef = storage().ref(`${user.uid}/profilePicture.jpg`);
                // Uploading image
                const task = storageRef.put(file);

                task.on("state_changed",

                    // Getting displaying uploading progress
                    snap => {
                        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                        setLoading(`Uploading profile image ${percentage}%`);
                    },

                    // Error handler
                    () => setNotification("Profile image uploading failed!"),

                    // On compleate
                    async () => {
                        setNotification("Profile image uploaded successful");
                        url = await storageRef.getDownloadURL();
                        setUrl(url);

                        // Uploading user information into databast
                        pushUserData(user.uid, data, url);
                        setLoading("");

                        // Change route to homepage
                        setHomepage(true);
                    }
                );
            } else {
                // Uploading user information into databast 
                pushUserData(user.uid, data, null);
                setLoading("");

                // Change route to homepage
                setHomepage(true);
            }
        }
        catch (error) {
            setNotification(error.message);
        } finally {
            setLoading("");
        }
    }

    // Pick an image
    const pickImage = (file, url) => {
        setFile(file);
        setUrl(url);
    }

    return (
        <>
            <Form
                show={currentForm === "other_info"}
                header="Welcome"
                onSubmit={handleSubmit(handleOtherInfoSubmit)}
            >
                <ImagePicker url={url} onClick={pickImage} />
                <Input
                    label="Gender"
                    ref={register({ required: true })}
                    message={errors.gender && "Please fill!"}
                    options={["Male", "Female", "Other"]}
                />

                <Input
                    label="Date of Birth"
                    type="Date"
                    ref={register({ required: true })}
                    message={errors["date of birth"] && "Please enter you date of birth!"}
                />

                <Input
                    label="Profession"
                    ref={register({ required: true })}
                    message={errors.profession && "Please enter you profession!"}
                    options={[
                        "Engineer",
                        "Doctor",
                        "Web developer",
                        "Full stack developer",
                        "Electretian",
                        "Software developer",
                        "Teacher"
                    ]}
                />

                <Button type="button" title="Submit" />
                <Button title="<< Previsous?" link={true} onClick={changePage} />
            </Form >
            {homepage && <Redirect to="/homepage" />}
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherInfo);
