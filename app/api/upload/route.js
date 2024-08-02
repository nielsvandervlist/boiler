import {uploadImage} from "@/lib/uploadImage";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return new Response(JSON.stringify({ message: "No file provided" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const imageUrl = await uploadImage({
            name: file.name,
            type: file.type,
            data: buffer,
        });

        return new Response(JSON.stringify({ imageUrl }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Upload error:", error);
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
