const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const errorMessage = document.querySelector("#error-message");
const noteCount = document.querySelector("#note-count");
const searchInput = document.querySelector("#search-input");

const STORAGE_KEY = "quicknotes";

function loadNotes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

let notes = loadNotes();

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }
}

function render() {
  notesList.textContent = "";

  const term = searchInput.value.trim().toLowerCase();
  const visible = notes.filter(function (note) {
    return note.text.toLowerCase().includes(term);
  });

  if (notes.length > 0 && visible.length === 0) {
    const empty = document.createElement("li");
    empty.classList.add("empty-message");
    empty.textContent = "No notes match your search.";
    notesList.appendChild(empty);
  }

  visible.forEach(function (note) {
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

  updateCount();
}

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = noteInput.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }
  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";
  notes.push({
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString(),
  });
  noteInput.value = "";
  saveNotes();
  render();
});

notesList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.closest(".note-card").dataset.id);
    notes = notes.filter(function (note) {
      return note.id !== id;
    });
    saveNotes();
    render();
  }
});

searchInput.addEventListener("input", render);

render();