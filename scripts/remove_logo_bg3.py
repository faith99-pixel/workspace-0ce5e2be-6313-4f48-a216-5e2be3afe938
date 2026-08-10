import numpy as np
from PIL import Image

img = Image.open('/home/z/my-project/upload/pasted_image_1786390238439.png').convert('RGBA')
arr = np.array(img, dtype=float)

# Background is exactly (227, 234, 161)
bg = np.array([227, 234, 161], dtype=float)

# Calculate per-pixel Euclidean distance from background color
diff = np.sqrt(np.sum((arr[:,:,:3] - bg) ** 2, axis=2))

# Background pixels (distance < 5) -> fully transparent
# Foreground pixels (distance > 30) -> fully opaque
# Anti-aliased edge pixels -> smooth alpha

alpha = np.clip((diff - 5) / 25, 0, 1)
alpha = (alpha * 255).astype(np.uint8)
arr[:,:,3] = alpha

result = Image.fromarray(arr.astype(np.uint8))
result.save('/home/z/my-project/public/images/logo/zzb-logo.png')

# Verify
p = result.load()
print(f'Size: {result.size}, Mode: {result.mode}')
print(f'BG corner (0,0): alpha={p[0,0][3]}')
print(f'Parrot area (55,55): alpha={p[55,55][3]}')
print(f'Text area (260,55): alpha={p[260,55][3]}')
