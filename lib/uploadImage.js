import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
    region: "auto", // Cloudflare R2 doesn't require specifying a region
    endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    },
});

export async function uploadImage({ name, type, data }) {
    try {
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: "dump", // Replace with your Cloudflare R2 bucket name
                Key: name,
                Body: data,
                ContentType: type,
            },
        });

        const result = await upload.done();
        const key = result.Key.replace(/ /g, "%20");

        return `${process.env.CLOUDFLARE_DEV_R2_BUCKET_URL}/${key}`

        // return `https://${result.Bucket}.${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${result.Key}`;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Image upload failed");
    }
}
