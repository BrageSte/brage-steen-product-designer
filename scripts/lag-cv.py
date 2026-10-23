"""Lag offentlig CV fra samme publiseringsklare fakta som Om meg-siden."""
from pathlib import Path
from xml.sax.saxutils import escape
import json

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/content/profil.json").read_text())
output = ROOT / "public/cv/brage-steen-cv.pdf"
output.parent.mkdir(parents=True, exist_ok=True)

font_dir = Path("/System/Library/Fonts/Supplemental")
body_font, bold_font, title_font = "Helvetica", "Helvetica-Bold", "Times-Roman"
if all((font_dir / f).exists() for f in ["Arial.ttf", "Arial Bold.ttf", "Georgia.ttf"]):
    for name, file in [("CVArial", "Arial.ttf"), ("CVArialBold", "Arial Bold.ttf"), ("CVGeorgia", "Georgia.ttf")]:
        pdfmetrics.registerFont(TTFont(name, str(font_dir / file)))
    body_font, bold_font, title_font = "CVArial", "CVArialBold", "CVGeorgia"

ink, muted, accent = colors.HexColor("#211d1a"), colors.HexColor("#68625d"), colors.HexColor("#75432b")
styles = {
    "body": ParagraphStyle("body", fontName=body_font, fontSize=9.5, leading=13.5, textColor=ink, spaceAfter=3),
    "small": ParagraphStyle("small", fontName=body_font, fontSize=8.4, leading=12, textColor=muted),
    "role": ParagraphStyle("role", fontName=bold_font, fontSize=10.3, leading=14, textColor=ink),
    "date": ParagraphStyle("date", fontName=body_font, fontSize=8.7, leading=14, textColor=muted, alignment=TA_RIGHT),
    "section": ParagraphStyle("section", fontName=title_font, fontSize=16, leading=20, textColor=accent, spaceBefore=12, spaceAfter=8),
    "title": ParagraphStyle("title", fontName=title_font, fontSize=30, leading=36, textColor=ink, spaceAfter=4),
    "subtitle": ParagraphStyle("subtitle", fontName=bold_font, fontSize=12, leading=17, textColor=accent, spaceAfter=8),
}

def paragraph(text, kind="body"):
    return Paragraph(escape(text), styles[kind])

def entry(title, place, period, description, points=()):
    row = Table([[paragraph(title, "role"), paragraph(period, "date")]], colWidths=[355, 140], hAlign="LEFT")
    row.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                            ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0),
                            ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    content = [row, paragraph(place, "small"), Spacer(1, 3), paragraph(description)]
    content += [paragraph("- " + point) for point in points]
    content += [Spacer(1, 5)]
    return KeepTogether(content)

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d7d1cb"))
    canvas.line(44, 35, A4[0] - 44, 35)
    canvas.setFont(body_font, 8)
    canvas.setFillColor(muted)
    canvas.drawString(44, 22, "Brage Steen | bragesteen.no")
    canvas.drawRightString(A4[0] - 44, 22, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=44, rightMargin=44,
                        topMargin=40, bottomMargin=48, title="Brage Steen - CV",
                        author="Brage Steen", subject="Produktdesign, prototyping og digital implementering",
                        creator="Brage Steen")
story = [paragraph(data["navn"], "title"), paragraph(data["tittel"], "subtitle")]
story += [Paragraph('<link href="mailto:brage.steen@gmail.com">brage.steen@gmail.com</link>  |  '
                    '<link href="https://bragesteen.no">bragesteen.no</link>', styles["small"]), Spacer(1, 13)]
story += [paragraph(data["profil"]), paragraph(data["roller"]), paragraph(data["tilgjengelighet"], "small")]
story.append(paragraph("Relevant erfaring", "section"))
for job in data["erfaring"][:2]:
    story.append(entry(job["rolle"], job["sted"], job["periode"], job["beskrivelse"], job["punkter"]))
story.append(paragraph("Annen erfaring", "section"))
for job in data["erfaring"][2:]:
    story.append(entry(job["rolle"], job["sted"], job["periode"], job["beskrivelse"], job["punkter"]))

story.append(PageBreak())
story += [paragraph("Utdanning og prosjekter", "title"), paragraph("Brage Steen", "small")]
story.append(paragraph("Utdanning", "section"))
for study in data["utdanning"]:
    story.append(entry(study["tittel"], study["sted"], study["periode"], study["beskrivelse"]))
story.append(paragraph("Utvalgte prosjekter", "section"))
projects = [
    ("The Sorting Guide", "Bachelorprosjekt / OsloMet, IKEA Norge og Grønt Punkt", "2020",
     "Regina von Koch og jeg gjorde arbeidet sammen: brukerinnsikt, workshops, systemkartlegging og et tjenestekonsept for kildesortering i hjemmet."),
    ("Headset", "NTNU / Design for Industrialization", "2021",
     "Individuell oppgave over fire måneder. Sammenleggbart headset med sprøytestøping som premiss, skisser, CAD og 3D-printede prototyper."),
    ("GripSense", "Pågående utviklingsprosjekt", "Pågående",
     "Utforsker fysisk måleutstyr og et digitalt grensesnitt for å undersøke last under klatrerelaterte grep. Målevalidering gjenstår."),
]
for args in projects:
    story.append(entry(*args))
story.append(paragraph("Arbeidsmåte og verktøy", "section"))
for skill in data["ferdigheter"]:
    story += [paragraph(skill["gruppe"], "role"), paragraph(skill["tekst"]), Spacer(1, 3)]
story += [Spacer(1, 7), paragraph(data["sprak"] + " " + data["sertifikater"], "small")]
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(output)
