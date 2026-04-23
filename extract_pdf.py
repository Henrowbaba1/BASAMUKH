import PyPDF2
import os

def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with open(pdf_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        text = f"Error: {e}"
    return text

files = ["NASC.pdf", "cOMPANY GUIDE 1.pdf"]
with open("nasc_text.txt", "w", encoding="utf-8") as out_file:
    for file in files:
        path = os.path.join(r"c:\Users\CROPIT\Downloads\Profile", file)
        out_file.write(f"--- {file} ---\n")
        text = extract_text_from_pdf(path)
        out_file.write(text + "\n")
