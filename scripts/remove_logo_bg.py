from PIL import Image
import numpy as np

img = Image.open('/home/z/my-project/upload/pasted_image_1786390238439.png').convert('RGBA')
arr = np.array(img)

# Sample the background color from top-left corner region
bg_sample = arr[0:5, 0:5, :3].mean(axis=(0, 1))
print(f'Detected BG color: RGB({int(bg_sample[0])}, {int(bg_sample[1])}, {int(bg_sample[2])})')

# Create alpha mask: transparent where close to background color
bg_rgb = arr[:,:,:3].astype(float)
diff = np.sqrt(np.sum((bg_rgb - bg_sample) ** 2, axis=2))
# Threshold - pixels close to BG become transparent
alpha = np.where(diff < 50, 0, 255).astype(np.uint8)
arr[:,:,3] = alpha

result = Image.fromarray(arr)
result.save('/home/z/my-project/public/images/logo/zzb-logo.png')
print(f'Saved transparent logo: {result.size}')
