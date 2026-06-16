let dialog = document.getElementById("myDialog");
let closeBtn = document.getElementById("closeBtn");

let images = [
  { img: "1.png", title: "Berglandschaft" },
  { img: "2.png", title: "Stadtbild" },
  { img: "3.png", title: "Drittes Wolkenhimmel" },
  { img: "4.png", title: "Spatz" },
  { img: "5.png", title: "Weltall" },
  { img: "6.png", title: "Alpen" },
  { img: "7.png", title: "Vogel" },
  { img: "8.png", title: "Epischer Stein" },
  { img: "9.png", title: "Meise" },
  { img: "10.png", title: "Leoparden Baby" },
  { img: "11.png", title: "Berge" },
  { img: "12.png", title: "Baum" },
];

let currentIndex = 0;

function init() {
  renderImages();
  setupEventListeners();
}

function setupEventListeners() {
  closeBtn.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("close", function () { 
    document.body.classList.remove("dialog-open");
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

function renderImages() {
  let fotoSection = document.getElementById("foto_section");

  fotoSection.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    fotoSection.innerHTML += `
      <button onclick="openDialog(${i})">
        <img src="./img/thumbs/${images[i].img}" alt="${images[i].title}" />
      </button>
    `;
  }
}

function openDialog(index) {
  currentIndex = index;

  updateDialogImage();

  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function changeImage(action) {
  if (action === "next") {
    currentIndex++;
  } else {
    currentIndex--;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  updateDialogImage();
}

function updateDialogImage() {
  document.getElementById("show_picture").src =
    "./img/full/" + images[currentIndex].img;

  document.getElementById("show_text").textContent = images[currentIndex].title;

  document.getElementById("picture_counter").textContent =
    currentIndex + 1 + "/" + images.length;
}

init();
