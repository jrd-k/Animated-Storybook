const BASE_URL = "http://localhost:3000/pages";

document.addEventListener("DOMContentLoaded", main);

function main() {
  displayPages();
  setupNewPageForm();
}

function displayPages() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(pages => {
      const list = document.getElementById("page-list");
      list.innerHTML = "";
      pages.forEach(page => {
        const li = document.createElement("li");
        li.textContent = page.title;
        li.addEventListener("click", () => showPageDetail(page));
        list.appendChild(li);
      });

      if (pages.length > 0) showPageDetail(pages[0]);
    });
}

