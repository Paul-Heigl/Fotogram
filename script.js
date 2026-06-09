let dialog = document.getElementById("myDialog");
let closeBtn = document.getElementById("closeBtn");

let myImgs = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

let myTitles = [
  "Berglandschaft",
  "Stadtbild",
  "Drittes Wolkenhimmel",
  "Spatz",
  "Weltall",
  "Alpen",
  "Vogel",
  "Epischer Stein",
  "Meise",
  "Leoparden Baby",
  "Berge",
  "Baum",
];

let currentIndex = 0;

function openDialog(imgName) {
  currentIndex = myImgs.indexOf(imgName);

  document.getElementById("show_picture").src = "./img/full/" + imgName;

  updateCounter();
  updateTitle();

  dialog.showModal();
}

closeBtn.addEventListener("click", function () {
  dialog.close();
});

function goLeft() {
  currentIndex++;

  if (currentIndex >= myImgs.length) {
    currentIndex = 0;
  }

  document.getElementById("show_picture").src =
    "./img/full/" + myImgs[currentIndex];

  updateCounter();
  updateTitle();
}

function goRight() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = myImgs.length - 1;
  }

  document.getElementById("show_picture").src =
    "./img/full/" + myImgs[currentIndex];

  updateCounter();
  updateTitle();
}

function updateCounter() {
  document.getElementById("picture_counter").textContent =
    currentIndex + 1 + "/12";
}

function updateTitle() {
  document.getElementById("show_text").textContent = myTitles[currentIndex];
}
