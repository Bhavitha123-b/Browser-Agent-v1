# 🤖 Browser Agent v1

A simple AI-inspired browser agent built using **Python, Flask, Playwright, and BeautifulSoup**.  
This project searches the web using DuckDuckGo, opens the top result, and extracts relevant information from the page.

> ⚠️ **Version 1 Limitation**:  
> - Extracts content only from the **first search result**
> - No LLM integration yet  
> - Sometimes DuckDuckGo may slightly alter the query

Version 2 will improve this with **multi-page browsing and LLM-based reasoning**.

---

## 🚀 Features

- Web search using DuckDuckGo (avoids Google CAPTCHA)
- Automated browsing using Playwright
- HTML parsing with BeautifulSoup
- Simple Flask-based web interface
- Clean UI with background image
- Beginner-friendly agent architecture

---

## 🧱 Tech Stack

- Python
- Flask
- Playwright
- BeautifulSoup (bs4)
- HTML, CSS, JavaScript

---

## 📂 Project Structure

Browser-Agent-v1/
│
├── app.py                  # Flask app entry point
├── browser_agent.py        # Core browsing & extraction logic
│
├── templates/
│   └── index.html          # Web UI (search interface)
│
├── static/
│   ├── style.css           # Styling for UI
│   ├── script.js           # Frontend interactions
│   └── background.jpg      # Background image for the UI
│
├── .gitignore              # Ignored files (venv, binaries, etc.)
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation


⚙️ How It Works (Version 1)

User enters a query in the web UI

The agent:

  1) Searches the query on DuckDuckGo

  2) Opens the first relevant result

  3) Reads page content

  4) Extracts meaningful paragraphs based on:

      . Length

      . Presence of numbers (facts, rates, counts)

      . Displays the extracted answer to the user


⚠️ Limitation:
Currently, the agent mainly relies on the first result and simple heuristics.


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Bhavitha123-b/Browser-Agent-v1.git
cd Browser-Agent-v1


2️⃣ Create Virtual Environment (Recommended)
python -m venv .venv
.venv\Scripts\activate   # Windows

3️⃣ Install Dependencies
pip install -r requirements.txt
playwright install

4️⃣ Run the App
python app.py


Open browser and visit:

http://127.0.0.1:5000


🧩 Known Limitations (v1)
Extracts mainly from first web page

Answers may be incomplete for complex questions

Query rewriting by search engine can affect results

No multi-page aggregation


🔮 Future Enhancements (Version 2)

Planned improvements:

🤖 LLM-based summarization

🌍 Multi-page browsing and aggregation

🧠 Better intent understanding


🏷️ Versioning

v1 – Rule-based browser agent (current)

v2 (planned) – LLM-powered intelligent browser agent


👩‍💻 Author

Bhavitha
B.Tech Data Science Student
Aspiring AI & Software Engineer 🚀
