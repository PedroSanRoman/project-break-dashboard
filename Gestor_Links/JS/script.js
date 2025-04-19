const title = document.getElementById("title");
const url = document.getElementById("url");
const addBtn = document.getElementById("addBtn");
const linkList = document.getElementById("linkList");

addBtn.addEventListener("click", () => {
    const linkTitle = title.value.trim();
    const linkUrl = url.value.trim();
    if (!linkTitle || !linkUrl) {
        alert("Por favor, rellena ambos campos.");
        return;
    }
    const newLink = { title: linkTitle, url: linkUrl };
    saveLink(newLink);
    renderAllLinks();
    title.value = "";
    url.value = "";
});

function saveLink(link) {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    links.push(link);
    localStorage.setItem("links", JSON.stringify(links));
}

function renderAllLinks() {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    linkList.innerHTML = "";
    links.forEach((link, index) => {
        renderLink(link, index);
    });
}

function renderLink(link, index) {
    const div = document.createElement("div");
    div.className = "link-item";
    div.innerHTML = `
        <a href="${link.url}" target="_blank">${link.title}</a>
        <button class="delete-btn" data-index="${index}">Eliminar enlace</button>
    `;
    const deleteBtn = div.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        deleteLink(index);
    });
    linkList.appendChild(div);
}

function deleteLink(index) {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    links.splice(index, 1);
    localStorage.setItem("links", JSON.stringify(links));
    renderAllLinks();
}

window.addEventListener("DOMContentLoaded", renderAllLinks);