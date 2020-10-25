import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Form, Input, Button, ImagePicker } from "../../components";
import { setLoading, setNotification, setOtherInfo } from "../../Redux/actions";
import { connect } from "react-redux";
import { auth, database, storage } from "firebase";

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

    const changePage = e => {
        e.preventDefault();
        goto("signup");
    }

    const handleOtherInfoSubmit = async data => {

        setLoading("Signing up...");

        try {
            // Signin up with email and password
            const userData = await auth().createUserWithEmailAndPassword(email, password);
            const { user } = userData;
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
                        const userRef = database().ref(`users/info/${user.uid}`);
                        userRef.set({
                            name: name,
                            email: email,
                            profileImage: url,
                            dob: data["date of birth"],
                            profession: data.profession,
                            gender: data.gender
                        }); 
                        setLoading("");
                    }
                );
            }
        }
        catch (error) {
            setNotification(error.message);
        } finally {
            setLoading("");
        }
    }

    // Pack an image
    const imagePicker = (file, url) => {
        setFile(file);
        setUrl(url);
    }

    return (
        <Form
            show={currentForm === "other_info"}
            header="Welcome"
            onSubmit={handleSubmit(handleOtherInfoSubmit)}
        >
            <ImagePicker url={url} onClick={imagePicker} />
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
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherInfo);
