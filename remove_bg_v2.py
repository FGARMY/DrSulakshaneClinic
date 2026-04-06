from rembg import remove
from PIL import Image
import os

input_path = 'public/images/hero-duo.png'
output_path = 'public/images/hero-duo-transparent-final.png'

print(f"Checking {input_path}...")
if os.path.exists(input_path):
    print(f"File size: {os.path.getsize(input_path)} bytes")
    try:
        with open(input_path, 'rb') as i:
            input_bytes = i.read()
            print("Removing background...")
            output_bytes = remove(input_bytes)
            with open(output_path, 'wb') as o:
                o.write(output_bytes)
        print(f"Background removed successfully! Saved to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")
else:
    print(f"Error: {input_path} not found.")
