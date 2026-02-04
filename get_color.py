from PIL import Image
import sys

try:
    img_path = "/Users/igyeongjin/.gemini/antigravity/brain/894dbe1a-feae-4989-acdc-b2da5e8636e4/uploaded_media_1770109562405.png"
    img = Image.open(img_path)
    # Get color from top-left corner or slightly inside to avoid anti-aliasing edge, 
    # but the image looks like a button so center might be text.
    # Let's take a point likely to be the background: (10, 10) assuming the image is the button itself.
    # Or checking the size first.
    width, height = img.size
    # Sample a few points around the edges to get the background gray
    # Top-left quadrant
    x = int(width * 0.1)
    y = int(height * 0.5)
    r, g, b = img.convert('RGB').getpixel((x, y))
    
    # Check if it's white (transparent bg might be read as black or white depending on mode, but usually png has alpha)
    # If alpha is 0, it's transparent.
    if img.mode == 'RGBA':
        r, g, b, a = img.getpixel((x, y))
        if a == 0:
            print("Transparent")
            sys.exit()

    print(f"#{r:02x}{g:02x}{b:02x}")

except Exception as e:
    print(e)
