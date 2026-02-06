// Get DOM elements
const input = document.getElementById("searchInput");
const form = document.getElementById("searchForm");
const agent = document.querySelector(".agent");

// Agent state management
let isTyping = false;

// Reset agent to default state
function resetAgent() {
  agent.classList.remove("typing", "thinking", "eyes-closed");
}

// Input focus - agent gets ready to type
input.addEventListener("focus", () => {
  if (!isTyping) {
    agent.classList.add("typing");
  }
});

// Input blur - reset if not submitting
input.addEventListener("blur", () => {
  setTimeout(() => {
    if (!isTyping) {
      resetAgent();
    }
  }, 200);
});

// While typing - keep typing state
input.addEventListener("input", () => {
  if (!agent.classList.contains("typing")) {
    agent.classList.add("typing");
  }
});

// Form submission - thinking mode
form.addEventListener("submit", (e) => {
  if (input.value.trim() !== "") {
    isTyping = true;
    
    // Remove typing, add thinking
    agent.classList.remove("typing");
    agent.classList.add("thinking", "loading");
    
    // Optional: If you want to prevent the form submission for testing
    // e.preventDefault();
    
    // Simulate thinking (remove this in production, let the server response handle it)
    // The thinking state will naturally continue until page reload
  }
});

// Check if result exists on page load (for when answer is displayed)
window.addEventListener("DOMContentLoaded", () => {
  const resultBox = document.querySelector(".result-box");
  
  if (resultBox) {
    // Answer is displayed - close eyes and stop thinking
    agent.classList.remove("typing", "thinking", "loading");
    agent.classList.add("eyes-closed");
    
    // Optional: Reopen eyes after a few seconds
    setTimeout(() => {
      agent.classList.remove("eyes-closed");
    }, 3000);
  }
});

// Click outside - reset agent
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container") && !isTyping) {
    resetAgent();
  }
});

// Easter egg: Click on agent face for a surprise
const agentFace = document.querySelector(".agent-face");
if (agentFace) {
  agentFace.addEventListener("click", () => {
    agent.classList.toggle("eyes-closed");
    setTimeout(() => {
      agent.classList.remove("eyes-closed");
    }, 1000);
  });
}