// تحميل الفوتر في كل صفحة
fetch('/includes/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
