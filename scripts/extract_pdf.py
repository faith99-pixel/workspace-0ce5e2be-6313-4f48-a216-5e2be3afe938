import fitz  # pymupdf
import os

pdf_path = "/home/z/my-project/upload/ZZB-compressed.pdf"
output_dir = "/home/z/my-project/upload/pdf_images"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Extract text from all pages
print("=== PDF TEXT CONTENT ===")
for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    print(f"\n--- Page {page_num + 1} ---")
    print(text)

# Extract images from all pages
print("\n=== EXTRACTING IMAGES ===")
img_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    print(f"Page {page_num + 1}: {len(images)} images found")
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_filename = f"pdf_page{page_num+1}_img{img_idx+1}.{image_ext}"
        img_path = os.path.join(output_dir, img_filename)
        with open(img_path, "wb") as f:
            f.write(image_bytes)
        img_count += 1
        print(f"  Saved: {img_path} ({len(image_bytes)} bytes, {base_image['width']}x{base_image['height']})")

print(f"\nTotal images extracted: {img_count}")
doc.close()
