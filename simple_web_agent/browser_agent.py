from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import re
import time



def browse_and_extract(query: str) -> str:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)  # visible
        page = browser.new_page()

        # Search via DuckDuckGo (avoids Google CAPTCHA)
        page.goto("https://duckduckgo.com/")
        page.wait_for_selector("input[name='q']", timeout=10000)
        page.fill("input[name='q']", query)
        page.press("input[name='q']", "Enter")

        page.wait_for_selector("a.result__a")
        first_result = page.query_selector("a.result__a")
        first_result.click()

        page.wait_for_load_state("networkidle")
        time.sleep(2)

        html = page.content()
        soup = BeautifulSoup(html, "html.parser")

        paragraphs = soup.find_all("p")
        extracted_text = ""

        pattern = re.compile(r"\b\d+(\.\d+)?\s*(billion|million|%)?\b",re.IGNORECASE)

        for p_tag in paragraphs:
            text = p_tag.get_text().strip()

            if len(text) < 40:
                continue

            match = pattern.search(text)
            if match:
                extracted_text = text
                break

        browser.close()

        if extracted_text:
            return extracted_text
        else:
            return "Could not extract a clear answer."

