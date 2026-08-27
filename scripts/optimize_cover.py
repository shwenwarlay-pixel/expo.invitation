from pathlib import Path
from PIL import Image

source = Path("public/images/official-expo-invitation-cover.png")
destination = Path("public/images/official-expo-invitation-cover.webp")
max_width = 960

with Image.open(source) as image:
    rgb_image = image.convert("RGB")
    if rgb_image.width > max_width:
        height = round(rgb_image.height * max_width / rgb_image.width)
        rgb_image = rgb_image.resize((max_width, height), Image.Resampling.LANCZOS)
    rgb_image.save(destination, "WEBP", quality=88, method=6)

print(f"{destination}: {destination.stat().st_size} bytes")
