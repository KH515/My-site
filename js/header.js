// استدعاء الهيدر من الملف header/header.html
fetch('/header/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;

    // هنا يمكن إضافة كود JavaScript للتمرير
    const header = document.getElementById('main-header');
    const logo = document.getElementById('logo');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        header.style.height = '100px';
        logo.style.height = '60px';
        searchInput.style.height = '45px';
        searchBtn.style.height = '45px';
        searchInput.style.fontSize = '18px';
        searchBtn.style.fontSize = '18px';
      } else {
        header.style.height = '140px';
        logo.style.height = '90px';
        searchInput.style.height = '65px';
        searchBtn.style.height = '65px';
        searchInput.style.fontSize = '22px';
        searchBtn.style.fontSize = '22px';
      }
    });
  });
