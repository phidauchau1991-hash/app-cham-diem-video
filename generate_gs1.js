const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Không xóa thư mục gs1Dir nữa để tránh mất dữ liệu cũ đang tốt
const imagesDir = path.join(__dirname, 'images');
const gs1Dir = path.join(imagesDir, 'Global_Success_1');
if (!fs.existsSync(gs1Dir)) {
    fs.mkdirSync(gs1Dir, { recursive: true });
}

const FAL_KEY = "21d55362-0d09-481f-b160-8a8831c3de65:0bf7f4e145d6f80558aa44482d0e1344";

const appJsPath = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const startIdx = appJsContent.indexOf('const LOCAL_DATASET = [');
const endIdx = appJsContent.indexOf('];', startIdx);
const arrayStr = appJsContent.substring(startIdx + 'const LOCAL_DATASET = '.length, endIdx + 1);

let LOCAL_DATASET;
try {
    LOCAL_DATASET = eval('(' + arrayStr + ')');
} catch (e) {
    console.error("Error parsing LOCAL_DATASET:", e);
    process.exit(1);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// CÁC TỪ CẦN PROMPT ĐẶC BIỆT ĐỂ ĐẢM BẢO CHUẨN XÁC 100%
const customPrompts = {
    "book": "A simple flat vector illustration of an open book with red cover and blank pages, no text, no letters, no words, minimalist design, clean solid white background, educational flashcard style, object focus only.",
    "Bill": "A young 7-year-old school boy named Bill, western appearance, wearing casual neat children's clothes. Cute and friendly educational flashcard character. Clean flat vector illustration style, solid white background, high quality, direct.",
    "Ba": "A young 7-year-old Vietnamese school boy named Ba, Asian appearance, wearing casual neat children's clothes. Cute and friendly educational flashcard character. Clean flat vector illustration style, solid white background, high quality, direct."
};

async function main() {
    // TẠO HÀNG LOẠT TOÀN BỘ GLOBAL SUCCESS 1 NHƯNG BỎ QUA CÁC ẢNH ĐÃ CÓ SẴN (nếu muốn)
    // Lấy tất cả từ vựng của GS1
    const gs1Vocabs = LOCAL_DATASET.filter(item => 
        item.course === "Global Success 1" && 
        item.type === "vocabulary" && 
        item.english
    );
    
    const imageMap = {};
    for (const item of gs1Vocabs) {
        if (item.image) {
            imageMap[item.image] = {
                word: item.english,
                unit: item.unit || "Unit Unknown"
            };
        }
    }

    const uniqueImages = Object.keys(imageMap).filter(img => img.trim() !== "");
    const updatedImagePaths = {};

    console.log(`Tìm thấy ${uniqueImages.length} từ vựng cần vẽ ảnh cho Toàn bộ GS1.`);

    for (const originalImg of uniqueImages) {
        const { word, unit } = imageMap[originalImg];
        const unitFolder = unit.replace(/[^a-zA-Z0-9]/g, ""); // Ví dụ: Unit1
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Ví dụ: book
        
        const newFileName = `${cleanWord}.png`;
        const newRelativePath = `Global_Success_1/${unitFolder}/${newFileName}`;
        const newAbsPath = path.join(gs1Dir, unitFolder, newFileName);
        
        if (!fs.existsSync(path.dirname(newAbsPath))) {
            fs.mkdirSync(path.dirname(newAbsPath), { recursive: true });
        }

        updatedImagePaths[originalImg] = newRelativePath;

        // Bỏ qua nếu ảnh đã được vẽ (Ví dụ Unit 2 đã vẽ xong)
        // Lưu ý: Nếu muốn ép vẽ lại, hãy xóa ảnh bằng tay.
        if (fs.existsSync(newAbsPath)) {
            console.log(`Bỏ qua: ${newAbsPath} đã tồn tại`);
            continue;
        }

        // Ưu tiên custom prompt nếu có, nếu không thì dùng prompt chung
        let prompt = customPrompts[word];
        if (!prompt) {
            prompt = `A simple flat vector illustration of ${word}, no text, no letters, no words, minimalist design, clean solid white background, educational flashcard style for children, object focus only, no anthropomorphism.`;
        }
        
        console.log(`Đang vẽ ảnh: ${word} (Unit: ${unit}) -> ${newRelativePath}`);

        try {
            const response = await fetch("https://fal.run/fal-ai/flux/schnell", {
                method: "POST",
                headers: {
                    "Authorization": `Key ${FAL_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt,
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

            // Tải ảnh về
            const imgRes = await fetch(imageUrl);
            const arrayBuffer = await imgRes.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Resize, padding, save
            await sharp(buffer)
                .resize({
                    width: 512,
                    height: 512,
                    fit: 'contain',
                    background: { r: 255, g: 255, b: 255, alpha: 1 }
                })
                .png()
                .toFile(newAbsPath);

            console.log(`=> Đã lưu: ${newAbsPath}`);
        } catch (e) {
            console.error(`Lỗi vẽ ảnh ${word}:`, e);
        }

        // CHỐNG LỖI RATE LIMIT
        await sleep(1500);
    }

    console.log("Đang cập nhật app.js...");
    let updatedAppJs = appJsContent;
    for (const [oldPath, newPath] of Object.entries(updatedImagePaths)) {
        // Thay thế chính xác path ảnh cũ
        const regex = new RegExp(`image:\\s*["']${oldPath}["']`, 'g');
        updatedAppJs = updatedAppJs.replace(regex, `image: "${newPath}"`);
    }

    // Ghi đè file
    fs.writeFileSync(appJsPath, updatedAppJs, 'utf8');
    console.log("HOÀN TẤT TOÀN BỘ GLOBAL SUCCESS 1!");
}

main();
