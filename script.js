const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

let notes = [];

function render() {
  notesList.textContent = "";

  notes.forEach(function (note) {
    const item = document.createElement("li");
    item.classList.add("note-card", "category-" + note.category);
    item.dataset.id = note.id;

    const text = document.createElement("p");
    text.textContent = note.text;

    const label = document.createElement("span");
    label.classList.add("note-label");
    label.textContent = note.category;

    const date = document.createElement("small");
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    item.append(text, label, date, deleteBtn);
    notesList.appendChild(item);
  });
}

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  notes.push({
    id: Date.now(),
    text: noteInput.value.trim(),
    category: noteCategory.value,
    createdAt: new Date().toLocaleString(),
  });
  noteInput.value = "";
  render();
});

render();