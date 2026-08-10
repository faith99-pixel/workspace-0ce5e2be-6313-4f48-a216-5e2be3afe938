from PIL import Image
import numpy as np
from collections import Counter

img = Image.open('/home/z/my-project/public/images/logo/zzb-logo.png').convert('RGBA')
data = np.array(img)

# Get unique colors and their counts
pixels = data.reshape(-1, 4)
unique, counts = np.unique(pixels, axis=0, return_counts=True)

# Sort by count descending
sorted_indices = np.argsort(counts)[::-1]
print("Top 15 colors in the logo:")
for i in sorted_indices[:15]:
    r, g, b, a = unique[i]
    print(f"  RGBA({r:3d}, {g:3d}, {b:3d}, {a:3d}) - {counts[i]:5d} pixels ({counts[i]/len(pixels)*100:.1f}%)")

# Find non-background pixels (not close to 227, 234, 161)
bg = np.array([227, 234, 161])
diff = np.abs(data[:, :, :3].astype(int) - bg.astype(int))
non_bg = ~((diff[:,:,0] < 30) & (diff[:,:,1] < 30) & (diff[:,:,2] < 30))
print(f"\nNon-background pixels: {np.sum(non_bg)} / {data.shape[0]*data.shape[1]}")

# Show what colors those non-bg pixels are
non_bg_pixels = data[non_bg]
if len(non_bg_pixels) > 0:
    unique2, counts2 = np.unique(non_bg_pixels, axis=0, return_counts=True)
    sorted2 = np.argsort(counts2)[::-1]
    print("\nNon-background colors:")
    for i in sorted2[:10]:
        r, g, b, a = unique2[i]
        print(f"  RGBA({r:3d}, {g:3d}, {b:3d}, {a:3d}) - {counts2[i]:5d} pixels")

# Save the non-bg mask as image for inspection
mask = np.zeros_like(data)
mask[non_bg] = data[non_bg]
result = Image.fromarray(mask)
result.save('/home/z/my-project/public/images/logo/zzb-logo-content-only.png')
print("\nSaved content-only version to zzb-logo-content-only.png")
