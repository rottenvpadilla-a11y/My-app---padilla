const btn = document.getElementById("themeToggle");

if (localStorage.theme === "dark") {
  btn.textContent = "☀️";
}

btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
    btn.textContent = "☀️";
  } else {
    localStorage.theme = "light";
    btn.textContent = "🌙";
  }
});
