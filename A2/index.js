const toggle = document.getElementById("searchToggle");
const box = document.getElementById("searchBox");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  box.classList.toggle("active");
  if (box.classList.contains("active")) {
    box.querySelector("input").focus();
  }
});

document.addEventListener("click", function(e) {
  if (!box.contains(e.target) && !toggle.contains(e.target)) {
    box.classList.remove("active");
  }
});

const searchInput = box.querySelector("input");
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (query !== "") {
      window.location.href = "https://klafstore.com/ar/search?q=" + encodeURIComponent(query);
    }
  }
});
