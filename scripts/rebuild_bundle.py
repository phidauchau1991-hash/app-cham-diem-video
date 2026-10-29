import json, os, glob

# Chạy từ thư mục gốc hoặc thư mục webapp
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_dir = os.path.join(base_dir, 'lab', 'data')
registry = {}

json_files = sorted(glob.glob(os.path.join(data_dir, 'global_success_*.json')))
for fpath in json_files:
    fname = os.path.basename(fpath)
    book_id = fname.replace('.json', '')
    with open(fpath, 'r', encoding='utf-8') as f:
        registry[book_id] = json.load(f)

js_content = '/**\n * NHẬT MỸ LEARNING APP - GLOBAL SUCCESS COURSEBOOKS REGISTRY\n * Tự động đóng gói từ master JSON files\n */\n'
js_content += 'window.BOOK_REGISTRY = ' + json.dumps(registry, ensure_ascii=False, indent=2) + ';\n'

bundle_path = os.path.join(data_dir, 'books-data.js')
with open(bundle_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully rebuilt lab/data/books-data.js ({os.path.getsize(bundle_path)/1024:.1f} KB) with {len(registry)} books.")
