document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("searchToggle");
  const box = document.getElementById("searchBox");
  const searchInput = box.querySelector("input");

  // إظهار/إخفاء الشريط عند الضغط على زر البحث
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    box.classList.toggle("active");
    if (box.classList.contains("active")) {
      searchInput.focus();
    }
  });

  // إخفاء البحث عند الضغط خارج الشريط
  document.addEventListener("click", function(e) {
    if (!box.contains(e.target) && !toggle.contains(e.target)) {
      box.classList.remove("active");
    }
  });

  // البحث مترابط مع قاعدة بيانات سلة
  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query !== "") {
        window.location.href = "https://klafstore.com/ar/search?q=" + encodeURIComponent(query);
      }
    }
  });
});
