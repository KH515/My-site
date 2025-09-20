<script>
const container = document.getElementById("articles-container");

db.collection("articles").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    const title = document.createElement("h2");
    title.textContent = data.title;

    const img = document.createElement("img");
    img.src = data.imageUrl;
    img.alt = data.title;

    const text = document.createElement("p");
    text.textContent = data.text;

    articleDiv.appendChild(title);
    articleDiv.appendChild(img);
    articleDiv.appendChild(text);
    container.appendChild(articleDiv);
  });
});
</script>
