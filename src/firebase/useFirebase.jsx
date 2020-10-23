import "firebase/auth";
import { connect } from "react-redux";
import { setLoading } from "../Redux/actions";

const mapStateToProps = state => ({
    loading: state.process.loading
});

const mapDispatchToProps = dispatch => ({
    setLoading: value => dispatch(setLoading(value))
});

const useFirebase = ({ loading, setLoading }) => {

    // Signup
    // const signUp = async (username, email, password, callback) => {

    //     const _callback = ({ user }) => {
    //         dispatch(readUsername(username));
    //         dispatch(readEmail(email));
    //         uploadUserData(user.uid, username, email);
    //         callback();
    //     }

    //     auth_process(
    //         auth().createUserWithEmailAndPassword(email, password),
    //         "Account created successfully",
    //         null,
    //         _callback
    //     );
    // }

    // // Signin
    const signIn = async (email, password, callback) => {

    }

    // // Signout
    // const signOut = async (callback) => {

    //     const _callback = () => {
    //         dispatch(readPassword(null));
    //         dispatch(readUsername(null));
    //         dispatch(readPassword(null));
    //         dispatch(setUID(null));
    //         dispatch(setProfileImage(null));
    //         localStorage.clear();
    //         callback();
    //     }

    //     auth_process(
    //         auth().signOut(),
    //         "Signout successfully",
    //         "Error while signout",
    //         _callback
    //     );
    // }

    // const auth_process = async (action, success, failed, callback) => {
    //     dispatch(setLoading());
    //     let response = null;

    //     try {
    //         response = await action;
    //         dispatch(setNotification({
    //             message: success,
    //             type: "success"
    //         }));
    //         if (typeof callback === "function") callback(response);
    //     } catch (error) {
    //         dispatch(setNotification({
    //             message: failed ? failed : error.message,
    //             type: "error"
    //         }));
    //     } finally {
    //         dispatch(setLoading());
    //     }
    // }

    // const uploadUserData = (uid, username, email) => {
    //     database().ref().child("users/info/" + uid).set({
    //         username,
    //         email
    //     });
    // }

    // const uploadProfileImage = (file) => {
    //     if (username) {

    //         dispatch(setLoading());

    //         try {
    //             // Create a storage ref
    //             const storageRef = storage().ref(`${username}/profileImage.jpg`);
    //             database().ref().child("users/info/" + uid).update({
    //                 profileImage: file.name
    //             });

    //             // Upload file
    //             let task = storageRef.put(file);


    //             task.on("state_changed",
    //                 snap => {
    //                     let percentage = snap.bytesTransferred / snap.totalBytes * 100;
    //                     console.log(percentage + "%");
    //                 },
    //                 () => {
    //                     dispatch(setNotification({
    //                         message: "Error",
    //                         type: "error"
    //                     }));
    //                 },
    //                 () => {
    //                     dispatch(setNotification({
    //                         message: "Profile image uploaded successfully",
    //                         type: "success"
    //                     }));
    //                 }
    //             );

    //         } catch{
    //             dispatch(setNotification({
    //                 message: "uploading profile image failed!",
    //                 type: "error"
    //             }));
    //         } finally {
    //             dispatch(setLoading());
    //         }

    //     }
    // }

    // const fetchUserData = () => {
    //     if (uid) {
    //         const userInfoRef = database().ref().child("users/info/" + uid);
    //         userInfoRef.once("value").then(snap => {
    //             const { username, email } = snap.val();
    //             dispatch(readUsername(username));
    //             dispatch(readEmail(email));
    //         });
    //     }
    // }

    return ({
        // signUp,
        signIn,
        // signOut,
        // fetchUserData,
        // uploadProfileImage
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(useFirebase);