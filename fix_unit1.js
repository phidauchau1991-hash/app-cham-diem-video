const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const FAL_KEY = "21d55362-0d09-481f-b160-8a8831c3de65:0bf7f4e145d6f80558aa44482d0e1344";
const gs1Dir = path.join(__dirname, 'images', 'Global_Success_1', 'Unit1');

const itemsToFix = [
    {
        filename: "book.png",
        word: "book",
        prompt: "A clear, simple, single closed textbook or notebook, realistic and objective. Clean flat vector illustration, no magical elements, no floating letters. Vibrant colors, clean solid white background, educational flashcard style, distraction-free."
    },
    {
        filename: "bill.png",
        word: "Bill",
        prompt: "A young 7-year-old school boy named Bill, western appearance, wearing casual neat children's clothes. Cute and friendly educational flashcard character. Clean flat vector illustration style, solid white background, high quality, direct."
    },
    {
        filename: "ba.png",
        word: "Ba",
        prompt: "A young 7-year-old Vietnamese school boy named Ba, Asian appearance, wearing casual neat children's clothes. Cute and friendly educational flashcard character. Clean flat vector illustration style, solid white background, high quality, direct."
    }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
    for (const item of itemsToFix) {
        const newAbsPath = path.join(gs1Dir, item.filename);
        console.log(`Đang vẽ lại ảnh: ${item.word} -> ${item.filename}`);

        try {
            const response = await fetch("https://fal.run/fal-ai/flux/schnell", {
                method: "POST",
                headers: {
                    "Authorization": `Key ${FAL_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: item.prompt,
                    image_size: "square_hd",
                    num_inference_steps: 4,
                    num_images: 1,
                    enable_safety_checker: true
                })
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Fal API error: ${response.status} - ${text}`);
            }

            const data = await response.json();
            const imageUrl = data.images[0].url;

            const imgRes = await fetch(imageUrl);
            const arrayBuffer = await imgRes.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            await sharp(buffer)
                .resize({
                    width: 512,
                    height: 512,
                    fit: 'contain',
                    background: { r: 255, g: 255, b: 255, alpha: 1 }
                })
                .png()
                .toFile(newAbsPath);

            console.log(`=> Đã lưu thành công: ${item.filename}`);
        } catch (e) {
            console.error(`Lỗi vẽ ảnh ${item.word}:`, e);
        }

        await sleep(1500);
    }
    console.log("HOÀN TẤT CHỈNH SỬA UNIT 1!");
}

main();
