// تحميل الهيدر
fetch('/includes/header/index.html')
  .then(res => res.text())
  .then(data => document.getElementById('header-placeholder').innerHTML = data);

// تحميل الفوتر
fetch('/includes/footer/index.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer-placeholder').innerHTML = data);

// مثال البحث داخل مدونات
const blogPages = [
  { name: "اقلام", file: "/blogs/al2alam.html" },
  { name: "العصر", file: "/blogs/al3asr.html" },
  { name: "الفن", file: "/blogs/alfan.html" }
];

document.addEventListener('click', e => {
  if (e.target && e.target.id === 'searchBtn') {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const result = blogPages.find(page => page.name.toLowerCase().includes(query));
    if (result) window.location.href = result.file;
    else alert("لا توجد نتائج مطابقة");
  }
});
