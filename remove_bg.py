from rembg import remove
from PIL import Image

# Use the explicitly saved image
input_path = 'public/images/hero-doctor.png'
output_path = 'public/images/hero-doctor-transparent.png'

try:
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input_bytes = i.read()
            output_bytes = remove(input_bytes)
            o.write(output_bytes)
    print("Background removed successfully!")
except Exception as e:
    print(f"Error: {e}")
