import os
import math
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/projects', exist_ok=True)

def create_ironman_art(width, height):
    img = Image.new('RGB', (width, height), color=(10, 10, 16))
    draw = ImageDraw.Draw(img)
    
    cx, cy = width // 2, height // 2
    max_r = int(math.hypot(width, height) / 2)
    
    # Warm crimson-gold subtle vignette
    for r in range(max_r, 0, -25):
        factor = 1.0 - (r / max_r)
        r_val = int(12 + factor * 60)
        g_val = int(10 + factor * 20)
        b_val = int(18 + factor * 25)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(r_val, g_val, b_val))

    # Sleek geometric backdrop grid
    grid_size = 70
    for x in range(0, width, grid_size):
        draw.line([(x, 0), (x, height)], fill=(255, 255, 255, 8), width=1)
    for y in range(0, height, grid_size):
        draw.line([(0, y), (width, y)], fill=(255, 255, 255, 8), width=1)

    # Stylized Iron Man silhouette / minimalist arc glow
    arc_r = 130
    draw.ellipse([cx - arc_r, cy - arc_r, cx + arc_r, cy + arc_r], outline=(220, 60, 60), width=3)
    draw.ellipse([cx - arc_r + 20, cy - arc_r + 20, cx + arc_r - 20, cy + arc_r - 20], outline=(245, 180, 50), width=2)
    draw.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], fill=(240, 250, 255), outline=(0, 240, 255), width=3)

    # Clean typography
    draw.text((cx - 85, cy + 180), "IRON MAN COVER", fill=(240, 180, 50))
    draw.text((cx - 130, cy + 205), "HOVER CURSOR TO REVEAL CHARAN", fill=(180, 190, 205))
    return img

def create_charan_art(width, height):
    img = Image.new('RGB', (width, height), color=(6, 10, 20))
    draw = ImageDraw.Draw(img)
    
    cx, cy = width // 2, height // 2
    max_r = int(math.hypot(width, height) / 2)
    
    # Elegant sapphire blue / cyan glow
    for r in range(max_r, 0, -25):
        factor = 1.0 - (r / max_r)
        r_val = int(6 + factor * 25)
        g_val = int(14 + factor * 50)
        b_val = int(30 + factor * 90)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(r_val, g_val, b_val))

    # Clean grid
    grid_size = 70
    for x in range(0, width, grid_size):
        draw.line([(x, 0), (x, height)], fill=(0, 240, 255, 12), width=1)
    for y in range(0, height, grid_size):
        draw.line([(0, y), (width, y)], fill=(0, 240, 255, 12), width=1)

    # Modern Avatar Silhouette for Charan
    head_r = 90
    draw.ellipse([cx - head_r, cy - 130 - head_r, cx + head_r, cy - 130 + head_r], outline=(0, 240, 255), fill=(20, 32, 58), width=3)
    draw.arc([cx - 190, cy - 40, cx + 190, cy + 300], start=180, end=360, fill=(0, 240, 255), width=3)

    # Orbital ring
    draw.ellipse([cx - 200, cy - 200, cx + 200, cy + 200], outline=(59, 130, 246), width=2)

    draw.text((cx - 45, cy + 180), "CHARAN", fill=(0, 240, 255))
    draw.text((cx - 145, cy + 205), "SOFTWARE ENGINEER · 2025 GRADUATE", fill=(210, 225, 250))
    return img

def create_project_thumb(title, category, color1, color2, filename):
    w, h = 1200, 750
    img = Image.new('RGB', (w, h), color=(10, 13, 22))
    draw = ImageDraw.Draw(img)

    for y in range(h):
        interp = y / h
        r = int(color1[0] * (1 - interp) + color2[0] * interp)
        g = int(color1[1] * (1 - interp) + color2[1] * interp)
        b = int(color1[2] * (1 - interp) + color2[2] * interp)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Card Mockup
    draw.rounded_rectangle([90, 80, w - 90, h - 80], radius=18, fill=(15, 23, 42), outline=(255, 255, 255), width=2)
    # Header bar
    draw.rounded_rectangle([90, 80, w - 90, 140], radius=18, fill=(24, 34, 58))
    # Window controls
    draw.ellipse([120, 102, 136, 118], fill=(239, 68, 68))
    draw.ellipse([146, 102, 162, 118], fill=(234, 179, 8))
    draw.ellipse([172, 102, 188, 118], fill=(34, 197, 94))

    draw.text((130, 190), category.upper(), fill=(0, 240, 255))
    draw.text((130, 230), title, fill=(255, 255, 255))
    
    # Graphic diagram
    draw.rounded_rectangle([130, 320, 480, 580], radius=12, fill=(24, 34, 58), outline=(0, 240, 255), width=2)
    draw.text((160, 350), "SERVER / API ARCHITECTURE", fill=(0, 240, 255))
    draw.text((160, 400), "• RESTful Endpoints", fill=(200, 220, 240))
    draw.text((160, 440), "• Security & Authentication", fill=(200, 220, 240))
    draw.text((160, 480), "• Database CRUD Operations", fill=(200, 220, 240))
    draw.text((160, 520), "• Optimized Query Execution", fill=(200, 220, 240))

    draw.rounded_rectangle([520, 320, 1070, 580], radius=12, fill=(20, 28, 48), outline=(59, 130, 246), width=1)
    draw.text((550, 350), "LIVE TELEMETRY / DATA STREAM", fill=(147, 197, 253))
    points = [(560, 500), (660, 440), (760, 470), (860, 410), (960, 430), (1030, 390)]
    for i in range(len(points) - 1):
        draw.line([points[i], points[i+1]], fill=(0, 240, 255), width=4)
        draw.ellipse([points[i][0]-5, points[i][1]-5, points[i][0]+5, points[i][1]+5], fill=(255, 255, 255))
    draw.ellipse([points[-1][0]-5, points[-1][1]-5, points[-1][0]+5, points[-1][1]+5], fill=(255, 255, 255))

    img.save(filename, quality=92)
    print(f"Generated {filename}")

# Generate desktop images (16:9 -> 1920x1080)
create_ironman_art(1920, 1080).save('public/ironman-desktop.jpg', quality=90)
create_charan_art(1920, 1080).save('public/myphoto-desktop.jpg', quality=90)

# Generate mobile images (4:5 -> 1080x1350)
create_ironman_art(1080, 1350).save('public/ironman-mobile.jpg', quality=90)
create_charan_art(1080, 1350).save('public/myphoto-mobile.jpg', quality=90)

# Generate 4 Project Cards:
# 1. Java Internship Project
create_project_thumb("Employee Management & Payroll System", "Java Developer Internship Project", (15, 25, 40), (25, 35, 55), "public/projects/project-1.jpg")
# 2. Portfolio Project
create_project_thumb("Interactive Developer Portfolio & Static Engine", "Featured Portfolio Project", (10, 30, 45), (15, 20, 40), "public/projects/project-2.jpg")
# 3. Basic Project 1: DevOps & Docker
create_project_thumb("Automated CI/CD Pipeline & Containerized App", "DevOps & Cloud Automation", (25, 20, 35), (45, 25, 45), "public/projects/project-3.jpg")
# 4. Basic Project 2: Student Database & Analytics
create_project_thumb("Student Database & Analytics Terminal", "Full-Stack Python & SQL Application", (15, 30, 30), (20, 45, 40), "public/projects/project-4.jpg")

print("All assets generated!")
