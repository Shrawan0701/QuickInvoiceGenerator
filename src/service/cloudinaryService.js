import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "invoices-thumbnail"); // Replace with your preset
    formData.append("cloud_name", "da9ej0tre"); // Replace with your cloud name

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/da9ej0tre/image/upload`,
        formData
    );

    return res.data.secure_url;
};