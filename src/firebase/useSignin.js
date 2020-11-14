import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { pushNotification, setLoading, setUserData, changePage } from "../Redux/actions";
import { auth, firestore } from "firebase";

const useSignin = () => {

	// Redux functions
	const dispatch = useDispatch();
	const notification = useCallback(message => dispatch(pushNotification(message)), [dispatch]);
	const loading = useCallback(message => dispatch(setLoading(message)), [dispatch]);
	const setUser = useCallback(data => dispatch(setUserData(data)), [dispatch]);

	// SignIn
	const signIn = async (email, password) => {
		try {

			// Loading
			loading("Signing in...");

			// Signing in and getting user data ----
			const userData = await auth().signInWithEmailAndPassword(email, password);
			const { uid } = userData.user;

			// Fetching user information
			const info = await fetchUserInfo(email);

			// Set using information to state
			setUser({ uid, email, ...info });

			// Success message 
			notification("Signed in successfully");

			// Going to profile page
			dispatch(changePage("/profile"));
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

	// fetchUsernfo
	const fetchUserInfo = email => new Promise(async (resolve, reject) => {

		// Create a reference for user data
		const userInfoRef = firestore().collection("global-users").doc(email);

		try {

			// Loading
			loading("Please wait...");

			// Fetching information
			const info = await userInfoRef.get();

			// checking the information available or not
			if (!info.exists)
				// Error message (if not exist)
				reject("No information available");

			else
				// Success ---- 
				resolve(info.data());

		}
		catch{

			// Error message
			reject("Failed to fetch user info");
		}
		finally {

			// Pop loading
			loading(null);
		}
	})

	return signIn;
}

export default useSignin;
