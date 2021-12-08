import { sRef, storage } from "@/plugins/fbase.js";
import {
	listAll,
	uploadBytes,
	ref,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";
import imageCompression from "browser-image-compression";
import uniqid from "uniqid";

export default function filesUpload() {
	const getAll = async () => {
		const data = await listAll(sRef);
		return data;
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
		imageUploader,
		deleteImage,
	};
}
/* uploads to root */
// const imageRef = ref(sRef, file.name);
// console.log(imageRef);
// await uploadBytes(imageRef, file).then((snapshot) => {
// 	console.log("Uploaded a blob or file!", snapshot);
// });
