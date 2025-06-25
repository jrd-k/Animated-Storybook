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

function setupNewPageForm() {
  const form = document.getElementById("new-page-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const newPage = {
      title: form.title.value,
      image: form.image.value,
      content: form.content.value
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPage)
    })
      .then(res => res.json())
      .then(() => {
        displayPages();
        form.reset();
      });
  });
}

function editPage(id) {
  fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
    .then(page => {
      const editForm = document.getElementById("edit-page-form");
      editForm.classList.remove("hidden");
      document.getElementById("edit-title").value = page.title;
      document.getElementById("edit-image").value = page.image;
      document.getElementById("edit-content").value = page.content;

      editForm.onsubmit = e => {
        e.preventDefault();
        const updated = {
          title: document.getElementById("edit-title").value,
          image: document.getElementById("edit-image").value,
          content: document.getElementById("edit-content").value
        };

        fetch(`${BASE_URL}/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated)
        })
          .then(res => res.json())
          .then(() => {
            displayPages();
            editForm.classList.add("hidden");
          });
      };

      document.getElementById("cancel-edit").onclick = () => {
        editForm.classList.add("hidden");
      };
    });
}

function deletePage(id) {
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then(() => {
      displayPages();
      document.getElementById("page-detail").innerHTML =
        "<p>Select a page to read the story.</p>";
    });
}



