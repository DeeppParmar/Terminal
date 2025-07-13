const messages = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up"
];

const container = document.getElementById("codebox");
let index = 0;

function nextMessage() {
  if (index >= messages.length) return;

  const line = document.createElement("div");
  line.textContent = messages[index];
  line.classList.add("line");

  if (index === messages.length - 1) {
    const span = document.createElement("span");
    span.classList.add("blinking-dots");
    line.appendChild(span);
  } else {
    line.textContent += "...";
  }

  container.appendChild(line);
  index++;

  const delay = Math.random() * 4000 + 1000; // 1s - 5s
  setTimeout(nextMessage, delay);
}

nextMessage();
