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

function showPageDetail(page) {
  const detail = document.getElementById("page-detail");
  detail.innerHTML = `
    <h2>${page.title}</h2>
    <img src="${page.image}" />
    <p>${page.content}</p>
    <button onclick="editPage(${page.id})">Edit</button>
    <button onclick="deletePage(${page.id})">Delete</button>
  `;

  detail.dataset.currentId = page.id;
}

