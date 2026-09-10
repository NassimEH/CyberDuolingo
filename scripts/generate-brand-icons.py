from PIL import Image
from pathlib import Path

root = Path(
    r"c:\Users\nassi\Desktop\Projets_informatiques\Stack - App mobile\CyberDuolingo\assets\images"
)
src = Image.open(root / "logo-stack.png").convert("RGBA")


def save_rgb(im, path, size=None, bg=(255, 255, 255, 255)):
    out = im
    if size:
        out = out.resize(size, Image.Resampling.LANCZOS)
    base = Image.new("RGBA", out.size, bg)
    base.alpha_composite(out)
    base.convert("RGB").save(path, "PNG", optimize=True)


save_rgb(src, root / "icon.png", (1024, 1024))
save_rgb(src, root / "splash-icon.png", (1024, 1024))
save_rgb(src, root / "favicon.png", (48, 48))

# Android adaptive foreground: logo inset in safe zone
fg_canvas = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
inner = 740
logo = src.resize((inner, inner), Image.Resampling.LANCZOS)
offset = (1024 - inner) // 2
fg_canvas.paste(logo, (offset, offset), logo)
fg_canvas.save(root / "android-icon-foreground.png", "PNG", optimize=True)

bg = Image.new("RGB", (1024, 1024), (255, 255, 255))  # match logo canvas
bg.save(root / "android-icon-background.png", "PNG", optimize=True)

gray = src.convert("L")
mask = gray.point(lambda p: 0 if p > 245 else 255)
mono = Image.new("RGBA", src.size, (0, 0, 0, 0))
black = Image.new("RGBA", src.size, (0, 0, 0, 255))
mono.paste(black, (0, 0), mask)
mono_canvas = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
mono_inner = mono.resize((inner, inner), Image.Resampling.LANCZOS)
mono_canvas.paste(mono_inner, (offset, offset), mono_inner)
mono_canvas.save(root / "android-icon-monochrome.png", "PNG", optimize=True)

for name in [
    "logo-stack.png",
    "icon.png",
    "splash-icon.png",
    "favicon.png",
    "android-icon-foreground.png",
    "android-icon-background.png",
    "android-icon-monochrome.png",
]:
    p = root / name
    im = Image.open(p)
    print(f"{name}: {im.size} {im.mode} {p.stat().st_size} bytes")
