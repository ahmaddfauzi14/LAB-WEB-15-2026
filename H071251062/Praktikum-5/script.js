const API_URL = "https://jsonplaceholder.typicode.com";

const usersList = document.getElementById("users-list");
const usersStatus = document.getElementById("users-status");
const tasksHeading = document.getElementById("tasks-heading");
const tasksStatus = document.getElementById("tasks-status");
const tasksList = document.getElementById("tasks-list");
const progress = document.getElementById("progress");
const taskCount = document.getElementById("task-count");
const searchInput = document.getElementById("search-input");
const searchEmpty = document.getElementById("search-empty");
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const saveButton = document.getElementById("save-button");
const formMessage = document.getElementById("form-message");
const notification = document.getElementById("notification");
const connectionStatus = document.getElementById("connection-status");

let users = [];
let selectedUser = null;
let tasks = [];
let userButtons = [];

function tampilkanStatusOffline() {
  connectionStatus.textContent = "Tidak ada koneksi internet.";

  users = [];
  selectedUser = null;
  tasks = [];
  userButtons = [];
  usersList.innerHTML = "";
  tasksList.innerHTML = "";

    usersStatus.textContent = "Tidak ada koneksi internet.";
    usersStatus.className = "mt-4 text-sm text-red-600";
    tasksHeading.textContent = "Tugas Tim";
    tasksStatus.textContent = "Tidak ada koneksi internet.";
    tasksStatus.className = "mt-4 text-sm text-red-600";
    progress.textContent = "Progres tidak tersedia.";
    taskCount.textContent = "0 tugas";
    searchInput.value = "";
    searchInput.disabled = true;
    taskTitle.disabled = true;
    saveButton.disabled = true;
    searchEmpty.classList.add("hidden");
    formMessage.textContent = "Tidak ada koneksi internet.";
    formMessage.className = "mt-3 text-sm text-red-600";
    notification.classList.add("hidden");
}

async function ambilAnggota() {
  connectionStatus.textContent = "Menghubungkan ke server...";
  usersStatus.textContent = "Memuat anggota...";
  usersStatus.className = "mt-4 text-sm text-slate-500";
  usersList.innerHTML = "";
  searchInput.disabled = false;
  taskTitle.disabled = false;
  saveButton.disabled = false;

  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error(`Server gagal memuat anggota. Status: ${response.status}`);
    users = await response.json();
    connectionStatus.textContent = "Status: online.";
    tampilkanAnggota();
  } catch (error) {
    users = [];
    usersList.innerHTML = "";
    tampilkanStatusOffline();
  }
}

function tampilkanAnggota() {
  usersList.innerHTML = "";
  userButtons = [];
  users.forEach((user) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = user.name;
    button.className = "w-full rounded-xl border border-slate-200 px-3 py-3 text-left text-sm font-medium hover:border-indigo-300 hover:bg-indigo-50";
    button.addEventListener("click", () => pilihAnggota(user, button));
    usersList.appendChild(button);
    userButtons.push({ user, button });
  });
  if (users.length === 0) {
    usersStatus.textContent = "Data anggota tidak ditemukan.";
    usersStatus.className = "mt-4 text-sm text-amber-700";
  } else if (usersStatus.textContent === "Memuat anggota...") {
    usersStatus.textContent = "";
  }
}

async function pilihAnggota(user, buttonTerpilih) {
  selectedUser = user;

  userButtons.forEach(({ button }) => {
    button.classList.remove("border-indigo-600", "bg-indigo-50", "text-indigo-700");
  });
  buttonTerpilih.classList.add("border-indigo-600", "bg-indigo-50", "text-indigo-700");

  tasksHeading.textContent = `Tugas ${user.name}`;
  tasksStatus.textContent = "Memuat tugas...";
  tasksStatus.className = "mt-4 text-sm text-slate-500";
  tasksList.innerHTML = "";
  progress.textContent = "Memuat progres...";
  taskCount.textContent = "Memuat...";
  searchEmpty.classList.add("hidden");
  searchInput.value = "";
  formMessage.textContent = "";
  notification.classList.add("hidden");

  try {
    const response = await fetch(`${API_URL}/todos?userId=${user.id}`);
    if (!response.ok) {
      throw new Error(`Gagal memuat tugas. Status: ${response.status}`);
    }

    tasks = await response.json();
    tasksStatus.textContent = tasks.length === 0 ? "Data tugas tidak ditemukan untuk anggota ini." : "";
    tasksStatus.className = tasks.length === 0 ? "mt-4 text-sm text-amber-700" : "mt-4 text-sm text-slate-500";
    renderTugas();
  } catch (error) {
    tasks = [];
    tasksList.innerHTML = "";
    progress.textContent = "Progres tidak tersedia.";
    taskCount.textContent = "0 tugas";
    tampilkanStatusOffline();
  }
}

function renderTugas() {
  tasksList.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = "flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between";

    const title = document.createElement("p");
    title.textContent = task.title;
    title.className = task.completed
      ? "text-sm text-slate-400 line-through"
      : "text-sm font-medium text-slate-700";

    const actions = document.createElement("div");
    actions.className = "flex shrink-0 flex-wrap gap-2";

    if (!task.completed) {
      const completeButton = document.createElement("button");
      completeButton.type = "button";
      completeButton.textContent = "Tandai selesai";
      completeButton.className = "rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 hover:bg-green-100";
      completeButton.addEventListener("click", () => {
        task.completed = true;
        renderTugas();
      });
      actions.appendChild(completeButton);
    }

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Hapus";
    deleteButton.className = "rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100";
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((currentTask) => currentTask !== task);
      renderTugas();
    });
    actions.appendChild(deleteButton);

    item.appendChild(title);
    item.appendChild(actions);
    tasksList.appendChild(item);
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  progress.textContent = `${completedCount} dari ${tasks.length} tugas selesai`;
  taskCount.textContent = `${tasks.length} tugas`;
  filterTugas();
}

function filterTugas() {
  const keyword = searchInput.value.trim().toLowerCase();
  const taskItems = tasksList.children;
  let visibleCount = 0;

  tasks.forEach((task, index) => {
    const matches = task.title.toLowerCase().includes(keyword);
    taskItems[index].classList.toggle("hidden", !matches);
    if (matches) visibleCount += 1;
  });

  if (keyword !== "" && visibleCount === 0) {
    searchEmpty.classList.remove("hidden");
  } else {
    searchEmpty.classList.add("hidden");
  }
}

function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sudahAda = tasks.some(
        (task) => task.title.trim().toLowerCase() === judul.toLowerCase()
      );

      if (sudahAda) {
        reject(new Error("Judul tugas tersebut sudah ada."));
      } else {
        resolve({
          title: judul,
          completed: false,
          localId: Date.now() + Math.random()
        });
      }
    }, 1000);
  });
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  notification.classList.add("hidden");

  if (!selectedUser) {
    formMessage.textContent = "Pilih anggota terlebih dahulu.";
    formMessage.className = "mt-3 text-sm text-red-600";
  }

  const judul = taskTitle.value.trim();
  if (judul.length < 5) {
    formMessage.textContent = "Judul harus berisi minimal 5 karakter.";
    formMessage.className = "mt-3 text-sm text-red-600";
  }

  saveButton.disabled = true;
  saveButton.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);
    tasks.push(tugasBaru);
    renderTugas();
    taskTitle.value = "";
    formMessage.textContent = "";
    notification.textContent = "Tugas berhasil ditambahkan.";
    notification.classList.remove("hidden");
    setTimeout(() => notification.classList.add("hidden"), 3000);
  } catch (error) {
    formMessage.textContent = error.message;
    formMessage.className = "mt-3 text-sm text-red-600";
  } finally {
    saveButton.disabled = false;
    saveButton.textContent = "Simpan";
  }
});

searchInput.addEventListener("input", filterTugas);

ambilAnggota();
