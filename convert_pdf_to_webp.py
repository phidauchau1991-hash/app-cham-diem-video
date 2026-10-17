import os
import sys
import fitz  # PyMuPDF
from PIL import Image

# Đảm bảo in console tiếng Việt không bị lỗi cp1252 trên Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

def convert_pdf_to_webp(pdf_path, output_dir, max_pages=None, zoom=2.0, quality=80):
    os.makedirs(output_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    total_pages = len(doc) if max_pages is None else min(len(doc), max_pages)
    
    print(f"Bắt đầu chuyển đổi: {os.path.basename(pdf_path)} ({total_pages} trang)")
    
    mat = fitz.Matrix(zoom, zoom)
    for i in range(total_pages):
        page = doc[i]
        pix = page.get_pixmap(matrix=mat, alpha=False)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        
        # Lưu file webp
        out_filename = f"page_{i+1:03d}.webp"
        out_path = os.path.join(output_dir, out_filename)
        img.save(out_path, "WEBP", quality=quality, method=4)
        
        size_kb = os.path.getsize(out_path) / 1024
        print(f"Trang {i+1:02d}/{total_pages} -> {out_filename} ({pix.width}x{pix.height}, {size_kb:.1f} KB)")
    
    doc.close()
    print("Hoàn tất chuyển đổi 100%!")

if __name__ == "__main__":
    pdf_file = r"d:\2. TÀI LIỆU LỖI THỜI\6. Data_Factory_NhatMy\2. BGLOBAL\Tieng-anh-1-Global-Success.pdf"
    out_dir = r"d:\2. TÀI LIỆU LỖI THỜI\6. Data_Factory_NhatMy\webapp\book_pages\global_success_1"
    convert_pdf_to_webp(pdf_file, out_dir)
