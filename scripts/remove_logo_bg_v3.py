from PIL import Image
import numpy as np
from collections import deque

# Load logo
img = Image.open('/home/z/my-project/public/images/logo/zzb-logo.png').convert('RGBA')
data = np.array(img)
h, w = data.shape[:2]

# Background color: (227, 234, 161) - the lemon green
bg_color = np.array([227, 234, 161])

# Main content color: (0, 168, 89) - the green eagle
# There are anti-aliased edge pixels between these two colors

# Strategy: flood fill from edges, treating pixels within tolerance of bg as transparent
# Use a more refined approach with alpha blending for anti-aliased edges

alpha = np.full((h, w), 255, dtype=np.uint8)
visited = np.zeros((h, w), dtype=bool)
queue = deque()

def color_distance(c1, c2):
    return max(abs(int(c1[0]) - int(c2[0])), abs(int(c1[1]) - int(c2[1])), abs(int(c1[2]) - int(c2[2])))

# Seed from all edge pixels
for y in range(h):
    for x in [0, w-1]:
        if not visited[y, x]:
            queue.append((y, x))
            visited[y, x] = True
for x in range(w):
    for y in [0, h-1]:
        if not visited[y, x]:
            queue.append((y, x))
            visited[y, x] = True

tolerance_far = 50   # Definitely background
while queue:
    y, x = queue.popleft()
    pixel = data[y, x, :3]
    dist = color_distance(pixel, bg_color)
    
    if dist < tolerance_far:
        # Definitely background - fully transparent
        alpha[y, x] = 0
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                visited[ny, nx] = True
                queue.append((ny, nx))
    elif dist < 80:
        # Edge zone - partially transparent based on distance
        # The closer to bg_color, the more transparent
        edge_alpha = int(255 * (dist - tolerance_far) / (80 - tolerance_far))
        edge_alpha = max(0, min(255, edge_alpha))
        alpha[y, x] = edge_alpha
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                visited[ny, nx] = True
                queue.append((ny, nx))

# Apply alpha
data[:, :, 3] = alpha

# Crop to remove fully transparent borders
def find_content_bounds(data):
    h, w = data.shape[:2]
    alpha = data[:, :, 3]
    
    # Find top
    for y in range(h):
        if np.any(alpha[y, :] > 0):
            top = y
            break
    
    # Find bottom
    for y in range(h-1, -1, -1):
        if np.any(alpha[y, :] > 0):
            bottom = y
            break
    
    # Find left
    for x in range(w):
        if np.any(alpha[:, x] > 0):
            left = x
            break
    
    # Find right
    for x in range(w-1, -1, -1):
        if np.any(alpha[:, x] > 0):
            right = x
            break
    
    return top, left, bottom + 1, right + 1

top, left, bottom, right = find_content_bounds(data)
print(f"Content bounds: top={top}, left={left}, bottom={bottom}, right={right}")
cropped = data[top:bottom, left:right]

result = Image.fromarray(cropped)
result.save('/home/z/my-project/public/images/logo/zzb-logo-nobg.png')
print(f"Saved: {result.size}")
print(f"Original: {img.size} -> Cropped: {result.size}")

# Also save a larger version (4x upscale for crisp display)
scale = 4
large = result.resize((result.size[0] * scale, result.size[1] * scale), Image.LANCZOS)
large.save('/home/z/my-project/public/images/logo/zzb-logo-nobg@4x.png')
print(f"Saved 4x version: {large.size}")
