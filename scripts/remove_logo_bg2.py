from PIL import Image
import numpy as np

img = Image.open('/home/z/my-project/upload/pasted_image_1786390238439.png').convert('RGBA')
arr = np.array(img)

# Background is yellow-green: high R, very high G, medium B
# Foreground (parrot): lower R, high G, lower B  
# Foreground (text): low R, low G, low B

r, g, b = arr[:,:,0].astype(float), arr[:,:,1].astype(float), arr[:,:,2].astype(float)

# Key insight: BG has high R/G ratio and very high absolute G
# The BG color is approx (227, 234, 161) - yellowish green
# The parrot is a deeper green with less yellow
# The text is dark green

# Method: pixels where (G > 200 AND R > 180 AND B > 120) OR where close to BG color
bg_mask = (
    (g > 200) & (r > 180) & (b > 120) &  # yellowish-green region
    ((r + g + b) > 450)  # overall brightness
)

# Also add pixels very close to sampled BG color
diff = np.sqrt((r - 227)**2 + (g - 234)**2 + (b - 161)**2)
bg_mask = bg_mask | (diff < 40)

alpha = np.where(bg_mask, 0, 255).astype(np.uint8)
arr[:,:,3] = alpha

result = Image.fromarray(arr)
result.save('/home/z/my-project/public/images/logo/zzb-logo.png')

# Verify
pixels = result.load()
print(f'Mode: {result.mode}, Size: {result.size}')
print(f'Top-left alpha: {pixels[0,0][3]}')
print(f'Parrot (50,50) alpha: {pixels[50,50][3]}')
print(f'Text (250,50) alpha: {pixels[250,50][3]}')
print(f'Parrot body (80,60) alpha: {pixels[80,60][3]}')
