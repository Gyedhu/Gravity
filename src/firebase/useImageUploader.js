import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushNotification, setLoading, changePage, setUrl } from "../Redux/actions";
import { auth, firestore, storage } from "firebase";

const useImageUploader = () => {

	// Redux functions
	const dispatch = useDispatch();
	const email = useSelector(state => state.user.email);
	const notification = useCallback(message => dispatch(pushNotification(message)), [dispatch]);
	const loading = useCallback(message => dispatch(setLoading(message)), [dispatch]);
	const gotoProfile = useCallback(() => dispatch(changePage("/profile")), [dispatch]);
	const setImage = useCallback(url => dispatch(setUrl(url)), [dispatch]);


	// Push url in database
	const pushUrl = imageUrl => new Promise(
		async (resolve, reject) => {

			// Get uid
			const uid = auth().currentUser.uid;

			// Glabal users data reference
			const globalRef = firestore().collection("global-users").doc(email);

			// Personal users data reference
			const personalRef = firestore().collection("users").doc(uid);

			try {

				// Set url in globaly
				await globalRef.set({ imageUrl }, { merge: true });

				// Set url in persoal
				await personalRef.set({ imageUrl }, { merge: true });

				// Success message
				resolve();
			}
			catch (error) {

				// Error message
				reject("Error while upload url");
			}

		});

	// Uploader
	const upload = task => new Promise((resolve, reject) => {

		// Upload progress
		task.on("state_changed",

			// Progress
			snap => {

				// Progress percentage
				let percentage = Math.round(snap.bytesTransferred / snap.totalBytes) * 100;

				// Display upload progress
				loading(`${percentage}% uploaded`);
			},

			// Error
			() => {

				// Error message 
				reject("Failed to upload file");
			},

			// Compleate
			() => {

				// Success message
				resolve();
			}
		);
	});


	// image Uploader
	const uploadImage = async file => {

		// Get uid
		const uid = auth().currentUser.uid;

		// Create image storage reference
		const imageRef = storage().ref(uid + "/profileImage/profile.jpg");

		// Upload
		try {

			// Loading
			loading("Uploading...");

			// Put image file
			const task = imageRef.put(file);

			// Please wait...
			loading("Please wait...");

			// Upload progress
			await upload(task);

			// Please wait...
			loading("Please wait...");

			// Getting the image url
			let url = await imageRef.getDownloadURL();

			// Set image in state
			setImage(url);

			// Set url in database
			await pushUrl(url);

			// Success message
			notification("Uploaded successfully");

			// Change page
			gotoProfile("/profile");

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

	return uploadImage;

}

export default useImageUploader;
