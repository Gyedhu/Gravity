import { useDispatch, useSelector } from "react-redux";
import {
	pushNotification,
	clearUserData,
	setLoading,
	changePage,
	setUserData
} from "../Redux/actions";
import { auth, database, storage, firestore } from "firebase";

const useFirebase = () => {

	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	const signIn = async (email, password) => {

		// Loading message
		dispatch(setLoading("Signing in..."));

		try {
			// Signing in with email and password
			const userData = await auth().signInWithEmailAndPassword(email, password);

			// Get use id
			const { uid } = userData.user;

			// Fetching data from the database
			const data = await fetchUserData(uid);

			// Setting the data to the state
			dispatch(setUserData({
				uid,
				name: data.name,
				email: data.email,
				url: data.imageUrl,
				profession: data.profession,
				stars: data.stars
			}));

			// Success message
			dispatch(pushNotification("Signed in successfully"));

			// Going to profile page
			dispatch(changePage("/profile"));
		}
		catch (error) {
			// Error message
			dispatch(pushNotification(error.message));
		}
		finally {
			// Pop loading message
			dispatch(setLoading(null));
		}
	}

	const fetchUserData = uid => new Promise(async (resolve, reject) => {
		try {
			// Fetching user data from database
			const snap = await database().ref(`users/personal/${uid}/info`).once("value");

			// Getting the info
			const { name, email, profession, imageUrl, stars } = snap.val();

			// Resolving recieved data
			resolve({ name, email, profession, imageUrl, stars });
		}
		catch {

			// Rejecting the error message
			reject("Error while fetching info");
		}
	});

	const signUp = async (data) => {

		// Getting email and password
		const { email, password } = user;

		// Loading message
		dispatch(setLoading("Signing up"));

		try {
			// Creating user with email and password
			const userData = await auth().createUserWithEmailAndPassword(email, password);

			// Setting user info to the database
			await pushUserData(userData.user.uid, data);

			// Success message
			dispatch(pushNotification("Account created successfully"));

			// Going to the image picker page
			dispatch(changePage("/image_picker"));
		}
		catch (error) {

			// Error message
			dispatch(pushNotification(error.message ? error.message : error));
		}
	}

	const fetchData = async () => {
		const docRef = firestore().doc("users/message");
		try {
			docRef.onSnapshot(snap => {
				console.log(snap.data());
				dispatch({
					type: "set_data",
					payload: snap.data()
				})
			});
			dispatch(pushNotification("Success"));
		}
		catch {
			dispatch(pushNotification("Error while notification"));
		}
	}


	const setData = (text) => new Promise(

		async (resolve, reject) => {

			const docRef = firestore().doc("users/message");

			dispatch(setLoading("Please wait ..."));

			const date = new Date();

			try {
				await docRef.set({
					message: text,
					date: date.toLocaleString()
				});
				dispatch(pushNotification("Success"));
			}
			catch (error) {
				console.log(error);
				dispatch(pushNotification("Failed to push data"));
			}
			finally {
				dispatch(setLoading(null));
			}
		}
	)

	const pushUserData = (uid, data) => new Promise(async (resolve, reject) => {

		// Getting user's name, email and profession
		const { name, email, profession } = user;

		// Also some other data
		const { dob, gender } = data;

		// Loading message
		dispatch(setLoading("Please waite ..."));

		try {

			// Pushing user into global  user list
			await database().ref(`users/glabal/${user.name}`).set({
				name: name,
				emai: email,
				profession: profession,
				stars: 1
			});

			// Setting users info to the database
			await database().ref(`users/personal/${uid}/info/`).set({
				name: name,
				email: email,
				dob: dob,
				profession: profession,
				gender: gender,
				stars: 1
			});

			// Success message
			resolve("User info pushed successfully");

		} catch {

			// Error message
			reject("Error while pushing user info");
		}
		finally {

			// Pop loading message
			dispatch(setLoading(null));
		}
	});

	const uploadImage = (file) => new Promise((resolve) => {

		// Getting current user id
		const uid = auth().currentUser.uid;

		// Getting storage reference
		const storageRef = storage().ref(`${uid} / profileImage.jpg`);

		// Putting the image into the storage
		const task = storageRef.put(file);

		task.on("state_changed",

			snap => {
				// Displaying the upload progress
				let percentage = Math.round(snap.bytesTransferred / snap.totalBytes) * 100;
				dispatch(setLoading(`Uploading profile image ${percentage} % `));
			},

			() => {
				// Error message
				dispatch(pushNotification("Profile image uploading failed!"))
				resolve(null);
			},

			async () => {

				// After compleate the upload
				// Success message
				dispatch(pushNotification("Profile image uploaded successful"));

				// Pop loading massage
				dispatch(setLoading(null));

				// Going to profile page
				dispatch(changePage("/profile"));

				// Getting the image url
				let url = await storageRef.getDownloadURL();

				// Setting the image url to database
				await database().ref(`users/personal/${uid}/info`).update({
					imageUrl: url
				});
				await database().ref(`users/glabal/${user.name}/`).update({
					imageUrl: url
				});
			}
		);
	});

	const signOut = async () => {
		try {

			// Signint out
			await auth().signOut();

			// Success message
			dispatch(pushNotification("See you again"));

			// Clearing user data from state
			dispatch(clearUserData());

			// Going to signin page
			dispatch(changePage("/"));
		}
		catch {

			// Error message
			dispatch(pushNotification("Error while signout"));
		}
	}

	return {
		signIn,
		signUp,
		signOut,
		uploadImage,
		setData,
		fetchData
	};
}

export default useFirebase;
