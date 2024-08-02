'use client'
import { useState } from "react";

export default function Upload(){
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", image);

        const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setImageUrl(data.imageUrl);
    };

    return (
        <div className={'flex gap-4 flex-col w-full max-w-xs'}>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Pick a file</span>
                </div>
                <input onChange={handleFileChange} type="file" className="file-input file-input-bordered w-full max-w-xs"/>
            </label>
            <button className={'btn'} onClick={handleUpload}>Upload</button>
            {imageUrl && <img src={imageUrl} alt="Uploaded Image"/>}
        </div>
    );
};
