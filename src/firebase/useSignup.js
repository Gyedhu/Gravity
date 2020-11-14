import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushNotification, setLoading, changePage } from "../Redux/actions";
import { auth, firestore } from "firebase";

const useSignup = () => {

	// Redux functions
	const dispatch = useDispatch();
	const { email, name, profession } = useSelector(state => state.user);
	const notification = useCallback(message => dispatch(pushNotification(message)), [dispatch]);
	const gotoImagePicker = useCallback(() => dispatch(changePage("/image_picker")), [dispatch]);
	const loading = useCallback(message => dispatch(setLoading(message)), [dispatch]);

	console.log(email, name, profession)

	// Signup
	const signup = async (data) => {

		// Get other data
		const { dob, gender, password } = data;

		try {

			// Loading
			loading("Signing up...");

			// Signup
			const userData = await auth().createUserWithEmailAndPassword(email, password);
			const { uid } = userData.user;


			// Please wait... (Pushing data to database)
			loading("Please wait...");

			// Push user data to database
			await pushData(uid, name, email, profession, dob, gender);

			// Success message 
			notification("Signed in successfully");

			// Going to profile page
			gotoImagePicker();
		}
		catch (error) {

			// Error message
			notification(error.message ? error.message : error);
		}
		finally {

			// Pop loading
			loading(null);
		}
	}

	// Push data to database
	const pushData = (uid, name, email, profession, dob, gender) => new Promise(
		async (resolve, reject) => {

			//  Personal data
			const userData = {
				name,
				email,
				profession,
				dob,
				gender,
				stars: 1
			}

			// Global data
			const globalData = {
				name,
				profession,
				stars: 1
			}

			// Glabal users data reference
			const globalRef = firestore().collection("global-users").doc(email);

			// Personal users data reference
			const personalRef = firestore().collection("users").doc(uid);

			// Setting
			try {

				// Set personal user data
				await personalRef.set(userData);

				// Set global user data
				await globalRef.set(globalData);

				resolve("Done...");
			}
			catch {
				reject("Error while pushing data...");
			}

		});

	return signup;
}

export default useSignup;
