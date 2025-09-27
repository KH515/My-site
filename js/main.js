// تحميل الهيدر من المجلد بدون امتداد
fetch('/includes/header/')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

// تحميل الفوتر من المجلد بدون امتداد
fetch('/includes/footer/')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
