from PIL import Image
import numpy as np

# Load the logo
img = Image.open('/home/z/my-project/public/images/logo/zzb-logo.png')
img = img.convert('RGBA')

# Convert to numpy for manipulation
data = np.array(img)

# Get the pixel at top-left corner (likely background)
bg_color = data[0, 0, :3]  # RGB of top-left pixel
print(f"Detected background color: RGB({bg_color[0]}, {bg_color[1]}, {bg_color[2]})")

# Method 1: Remove white/near-white background
# Also check for any light colored background
white_threshold = 200
mask_white = (
    (data[:, :, 0] > white_threshold) &
    (data[:, :, 1] > white_threshold) &
    (data[:, :, 2] > white_threshold)
)

# Method 2: Remove pixels close to the detected bg color
diff = np.abs(data[:, :, :3].astype(int) - bg_color.astype(int))
mask_bg = (diff[:, :, 0] < 30) & (diff[:, :, 1] < 30) & (diff[:, :, 2] < 30)

# Combine masks
mask = mask_white | mask_bg

# Apply mask - set alpha to 0 for background pixels
data[mask, 3] = 0

# Create new image
result = Image.fromarray(data)

# Also try a more aggressive approach - flood fill from corners
def flood_fill_remove_bg(img_array, tolerance=40):
    h, w = img_array.shape[:2]
    alpha = img_array[:, :, 3].copy()
    
    # Check corners for background color
    corners = [
        img_array[0, 0, :3],
        img_array[0, -1, :3],
        img_array[-1, 0, :3],
        img_array[-1, -1, :3]
    ]
    
    from collections import deque
    visited = np.zeros((h, w), dtype=bool)
    queue = deque()
    
    # Seed from all corners
    for y, x in [(0, 0), (0, w-1), (h-1, 0), (h-1, w-1)]:
        if not visited[y, x]:
            queue.append((y, x))
            visited[y, x] = True
    
    while queue:
        y, x = queue.popleft()
        pixel = img_array[y, x, :3]
        
        # Check if this pixel is similar to any corner color
        is_bg = False
        for corner in corners:
            diff = np.abs(pixel.astype(int) - corner.astype(int))
            if diff[0] < tolerance and diff[1] < tolerance and diff[2] < tolerance:
                is_bg = True
                break
        
        if is_bg:
            alpha[y, x] = 0
            # Add neighbors
            for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                ny, nx = y + dy, x + dx
                if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                    visited[ny, nx] = True
                    queue.append((ny, nx))
    
    img_array[:, :, 3] = alpha
    return img_array

# Apply flood fill on original image
img2 = Image.open('/home/z/my-project/public/images/logo/zzb-logo.png').convert('RGBA')
data2 = np.array(img2)
data2 = flood_fill_remove_bg(data2, tolerance=45)
result2 = Image.fromarray(data2)

# Save both results
result.save('/home/z/my-project/public/images/logo/zzb-logo-nobg-v1.png')
result2.save('/home/z/my-project/public/images/logo/zzb-logo-nobg-v2.png')

print("Saved v1 (threshold) and v2 (flood fill) versions")
print(f"Original size: {img.size}")

# Check what we got
print(f"V1 has {sum(result.getchannel('A').getdata())} total alpha")
print(f"V2 has {sum(result2.getchannel('A').getdata())} total alpha")
