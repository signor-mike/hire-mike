/* eslint-disable no-unused-vars */
import { sRef, storage } from "@/plugins/fbase.js";
import {
	listAll,
	uploadBytes,
	ref,
	getDownloadURL,
	refFromURL,
	deleteObject,
} from "firebase/storage";
import imageCompression from "browser-image-compression";
import uniqid from "uniqid";

export default function filesUpload() {
	const getAll = async () => {
		const data = await listAll(sRef);
	};

	const compressor = async (file) => {
		const options = {
			maxSizeMB: 0.7,
			maxWidthOrHeight: 150,
			fileType: "png",
			initialQuality: 0.7,
		};
		console.log("originalFile instanceof Blob", file instanceof Blob); // true
		console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
		imageCompression(file, options)
			.then(function(compressedFile) {
				console.log(
					"compressedFile instanceof Blob",
					compressedFile instanceof Blob
				); // true
				console.log(
					`compressedFile size ${compressedFile.size /
						1024 /
						1024} MB`
				); // smaller than maxSizeMB

				uploader(compressedFile); // write your own logic
			})
			.catch(function(error) {
				console.log(error.message);
			});
	};
	const uploader = async (file) => {
		/* uploads to root */
		// const imageRef = ref(sRef, file.name);
		// console.log(imageRef);
		// await uploadBytes(imageRef, file).then((snapshot) => {
		// 	console.log("Uploaded a blob or file!", snapshot);
		// });

		/* upload to folder 'techs/' */
		uniqid(undefined, "-goodbye"); // -> "4n5pxq24kpiob12og9-goodbye"
		uniqid("hello-"); //-> "hello-4n5pxq24kpiob12og9"
		console.log(uniqid(file.name.split(".")[0] + "-", ".png"));
		const folderRef = ref(
			sRef,
			"techs/" + uniqid(file.name.split(".")[0] + "-", ".png")
		);
		await uploadBytes(folderRef, file);

		// get URL
		const url = await getDownloadURL(ref(storage, folderRef));

		console.log("url: ", url);
		return url;
	};

	const imageUploader = async (file, type, folderName) => {
		try {
			let options = {
				maxSizeMB: type === "large" ? 0.7 : 0.1,
				maxWidthOrHeight: type === "large" ? 1000 : 200,
				fileType: type === "large" ? "jpg" : "png",
				initialQuality: 0.7,
			};
			const compressedImage = await imageCompression(file, options);
			const id = uniqid();
			const fileName = `${file.name.split(".")[0]}-${id}.${
				options.fileType
			}`;
			const folderRef = ref(sRef, folderName + "/" + fileName);
			await uploadBytes(folderRef, compressedImage);
			const url = await getDownloadURL(ref(storage, folderRef));

			console.log("url: ", url);
			return url;
		} catch (error) {
			console.log(error);
		}
	};

	const deleteImage = async (url) => {
		try {
			const fileRef = url.split("/o/")[1];
			const imageRef = ref(
				storage,
				fileRef.split("?")[0].replace("%2F", "/")
			);
			await deleteObject(imageRef);
		} catch (error) {
			console.log(error);
		}
	};
	return {
		getAll,
		uploader,
		compressor,
		imageUploader,
		deleteImage,
	};
}
// getDownloadURL(ref(storage, 'images/stars.jpg'))
//  https://firebasestorage.googleapis.com/v0/b/hire-mike.appspot.com/o/techs%2Fvuex-1kwmefd20.png?alt=media&token=6a3a1e7b-e5de-414c-8793-52d87fffc8a0
