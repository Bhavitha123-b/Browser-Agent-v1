🤖 Browser Agent – Version 1 (Web UI)

A simple browser-based AI agent that searches the web using DuckDuckGo, opens results, extracts relevant information from web pages, and displays the answer through a clean web interface.

This project is Version 1, focused on rule-based browsing and extraction (no LLM yet).


🚀 Features

🌐 Automated web search using DuckDuckGo

🧭 Opens real web pages using Playwright

📄 Extracts meaningful answers from page content

🧠 Uses pattern-based logic (numbers, percentages, factual lines)

🖥️ Simple and clean Flask-based Web UI

🐼 Interactive UI inspiration 

⚡ Fast and lightweight (no heavy AI models)


🛠️ Tech Stack

Python

Flask – Web framework

Playwright – Browser automation

BeautifulSoup – HTML parsing

DuckDuckGo – Search engine

HTML, CSS, JavaScript – Frontend


📂 Project Structure

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

Searches the query on DuckDuckGo

Opens the first relevant result

Reads page content

Extracts meaningful paragraphs based on:

Length

Presence of numbers (facts, rates, counts)

Displays the extracted answer to the user


⚠️ Limitation:
Currently, the agent mainly relies on the first result and simple heuristics.

▶️ How to Run Locally
1️⃣ Clone the Repository
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
