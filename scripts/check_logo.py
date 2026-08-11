from PIL import Image
import numpy as np

# Check original logo properties
img = Image.open('/home/z/my-project/public/images/logo/zzb-logo.png').convert('RGBA')
data = np.array(img)
print(f"Original: size={img.size}, mode={img.mode}")
print(f"Background at (0,0): RGB{tuple(data[0,0,:3])}")
print(f"Background at (1,1): RGB{tuple(data[1,1,:3])}")
print(f"Center pixel: RGB{tuple(data[53,161,:3])}")

# Check the v2 result
img2 = Image.open('/home/z/my-project/public/images/logo/zzb-logo-nobg-v2.png').convert('RGBA')
data2 = np.array(img2)
transparent = np.sum(data2[:,:,3] == 0)
total = data2.shape[0] * data2.shape[1]
print(f"\nV2: {transparent}/{total} pixels are transparent ({transparent/total*100:.1f}%)")

# Check if center is still opaque
print(f"V2 center alpha: {data2[53,161,3]}")

# Sample a few points on the eagle
for y, x in [(30, 50), (40, 100), (50, 200), (60, 250)]:
    if y < data2.shape[0] and x < data2.shape[1]:
        print(f"  V2 ({y},{x}): RGBA{tuple(data2[y,x,:])}")