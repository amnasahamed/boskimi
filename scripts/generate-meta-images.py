#!/usr/bin/env python3
"""Generate Open Graph / Twitter meta images for Base of Stars."""

from __future__ import annotations

import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "meta"
ICON_PATH = ROOT / "public" / "favicon.png"

WIDTH, HEIGHT = 1200, 630

BRAND_ORANGE = "#FF4B1F"
BRAND_GOLD = "#FFD700"
BG = "#FCFCFC"
FG = "#141414"
MUTED = "#6B7280"

PAGES = [
    ("og-default.png", "Base of Stars", "AI solutions for business growth"),
    ("og-about.png", "About Us", "The team building intelligent systems for real-world impact"),
    ("og-careers.png", "Careers", "Join us and build the future of AI-powered business"),
    ("og-portfolio.png", "Portfolio", "Selected work across AI, automation, and digital products"),
    ("og-case-studies.png", "Case Studies", "Real outcomes from AI agents, workflows, and platforms"),
    ("og-services.png", "Services", "AI agents, automation, apps, and consulting"),
    ("og-ai-agents.png", "AI Agents", "Custom agents that qualify, support, and convert 24/7"),
    ("og-ai-solutions.png", "AI Solutions", "End-to-end AI systems tailored to your business"),
    ("og-workflows.png", "Workflow Automation", "Connect tools and eliminate manual work"),
    ("og-whatsapp.png", "WhatsApp Automation", "Instant customer replies on the channel they use most"),
    ("og-web-development.png", "Web Development", "Fast, modern web apps built to scale"),
    ("og-app-creation.png", "App Creation", "Mobile and web products from idea to launch"),
    ("og-it-consulting.png", "IT Consulting", "Strategy, architecture, and technical guidance"),
    ("og-navakeralam.png", "Navakeralam Case Study", "Citizen engagement at state scale"),
    ("og-clapslearn.png", "ClapsLearn Case Study", "AI tutoring that adapts to every learner"),
    ("og-badria-sweets.png", "Badria Sweets Case Study", "WhatsApp ordering for a growing brand"),
    ("og-clapsboard.png", "ClapsBoard Case Study", "Digital whiteboard for modern classrooms"),
]


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


def wrap_text(text: str, font: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""

    for word in words:
        trial = f"{current} {word}".strip()
        if font.getlength(trial) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word

    if current:
        lines.append(current)

    return lines or [text]


def draw_page(filename: str, title: str, subtitle: str) -> None:
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Accent shapes
    draw.rounded_rectangle((0, 0, WIDTH, 12), radius=0, fill=BRAND_ORANGE)
    draw.ellipse((980, -80, 1260, 200), fill="#FFF0D6")
    draw.rounded_rectangle((72, 520, 220, 528), radius=4, fill=BRAND_ORANGE)

    # Icon
    if ICON_PATH.exists():
        icon = Image.open(ICON_PATH).convert("RGBA")
        icon = icon.resize((120, 120), Image.Resampling.LANCZOS)
        img.paste(icon, (72, 72), icon)

    title_font = load_font(64, bold=True)
    subtitle_font = load_font(34)
    brand_font = load_font(24, bold=True)
    url_font = load_font(22)

    draw.text((72, 230), "BASE OF STARS", font=brand_font, fill=BRAND_ORANGE)

    title_lines = wrap_text(title, title_font, 980)
    y = 280
    for line in title_lines[:2]:
        draw.text((72, y), line, font=title_font, fill=FG)
        y += 72

    subtitle_lines = wrap_text(subtitle, subtitle_font, 900)
    y = max(y + 16, 420)
    for line in subtitle_lines[:2]:
        draw.text((72, y), line, font=subtitle_font, fill=MUTED)
        y += 44

    draw.text((72, HEIGHT - 64), "baseofstars.com", font=url_font, fill=BRAND_ORANGE)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    img.save(OUT_DIR / filename, format="PNG", optimize=True)
    print(f"Created {OUT_DIR / filename}")


def main() -> None:
    for filename, title, subtitle in PAGES:
        draw_page(filename, title, subtitle)


if __name__ == "__main__":
    main()
