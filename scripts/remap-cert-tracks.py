import re
from pathlib import Path

p = Path(
    r"c:\Users\nassi\Desktop\Projets_informatiques\Stack - App mobile\CyberDuolingo\data\certifications.ts"
)
text = p.read_text(encoding="utf-8")


def fix_tracks(m: re.Match[str]) -> str:
    body = m.group(0)
    body = body.replace('"security"', '"networking"')
    body = body.replace('"cloud"', '"software"')
    body = body.replace('"ai"', '"software"')
    ids = re.findall(r'"(networking|web|software)"', body)
    seen: set[str] = set()
    uniq: list[str] = []
    for i in ids:
        if i not in seen:
            seen.add(i)
            uniq.append(i)
    return "tracks: [" + ", ".join(f'"{i}"' for i in uniq) + "]"


text2 = re.sub(r"tracks:\s*\[[^\]]*\]", fix_tracks, text)
p.write_text(text2, encoding="utf-8")
print("updated track arrays")
