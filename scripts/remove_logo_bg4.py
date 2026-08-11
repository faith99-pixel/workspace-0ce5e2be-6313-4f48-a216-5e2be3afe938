import numpy as np
from PIL import Image
from collections import deque

img = Image.open('/home/z/my-project/upload/pasted_image_1786390238439.png').convert('RGB')
arr = np.array(img)
h, w = arr.shape[:2]

# Background is (227, 234, 161). Use flood fill from all 4 edges
# to find all connected background pixels
bg = np.array([227, 234, 161])

# Mark visited and background mask
visited = np.zeros((h, w), dtype=bool)
bg_mask = np.zeros((h, w), dtype=bool)
queue = deque()

# Seed from all edge pixels that match BG color
THRESHOLD = 35
for y in range(h):
    for x in [0, w-1]:
        if not visited[y, x]:
            diff = np.sqrt(np.sum((arr[y, x].astype(float) - bg) ** 2))
            if diff < THRESHOLD:
                queue.append((y, x))
                visited[y, x] = True

for x in range(w):
    for y in [0, h-1]:
        if not visited[y, x]:
            diff = np.sqrt(np.sum((arr[y, x].astype(float) - bg) ** 2))
            if diff < THRESHOLD:
                queue.append((y, x))
                visited[y, x] = True

# BFS flood fill
while queue:
    cy, cx = queue.popleft()
    bg_mask[cy, cx] = True
    for dy, dx in [(-1,0),(1,0),(0,-1),(0,1)]:
        ny, nx = cy+dy, cx+dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            visited[ny, nx] = True
            diff = np.sqrt(np.sum((arr[ny, nx].astype(float) - bg) ** 2))
            if diff < THRESHOLD:
                queue.append((ny, nx))

# Create RGBA with smooth alpha on edges
result = img.convert('RGBA')
result_arr = np.array(result)

# Set background to transparent
result_arr[bg_mask, 3] = 0

# For anti-aliased edges, use distance-based alpha
from scipy import ndimage

# Dilate the background mask slightly and feather
inverted = ~bg_mask
dilated = ndimage.binary_dilation(inverted, iterations=1)
edge = dilated & bg_mask  # These are edge pixels

# For edge pixels, compute alpha based on distance to foreground
if np.any(edge):
    # Distance transform from foreground
    dist = ndimage.distance_transform_edt(inverted)
    max_feather = 2.0
    # Edge pixels: alpha based on distance
    edge_alpha = np.clip(dist[edge] / max_feather, 0, 1) * 255
    result_arr[edge, 3] = edge_alpha.astype(np.uint8)

result = Image.fromarray(result_arr)
result.save('/home/z/my-project/public/images/logo/zzb-logo.png')

# Verify
p = result.load()
print(f'Size: {result.size}, Mode: {result.mode}')
print(f'BG corner (0,0): alpha={p[0,0][3]}')
print(f'Parrot head (60,40): alpha={p[60,40][3]}')
print(f'Parrot body (80,65): alpha={p[80,65][3]}')
print(f'Text (260,50): alpha={p[260,50][3]}')
print(f'BG pixels transparent: {np.sum(result_arr[:,:,3] == 0)}')
print(f'FG pixels opaque: {np.sum(result_arr[:,:,3] == 255)}')
