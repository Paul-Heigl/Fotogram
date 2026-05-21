let dialog = document.getElementById("myDialog");
let closeBtn = document.getElementById("closeBtn");

let images = [
  {
    img: "1.png",
    title: "Berglandschaft",
  },
  {
    img: "2.png",
    title: "Stadtbild",
  },
  {
    img: "3.png",
    title: "Drittes Wolkenhimmel",
  },
  {
    img: "4.png",
    title: "Spatz",
  },
  {
    img: "5.png",
    title: "Weltall",
  },
  {
    img: "6.png",
    title: "Alpen",
  },
  {
    img: "7.png",
    title: "Vogel",
  },
  {
    img: "8.png",
    title: "Epischer Stein",
  },
  {
    img: "9.png",
    title: "Meise",
  },
  {
    img: "10.png",
    title: "Leoparden Baby",
  },
  {
    img: "11.png",
    title: "Berge",
  },
  {
    img: "12.png",
    title: "Baum",
  },
];

let currentIndex = 0;

function renderImages() {
  let fotoSection = document.getElementById("foto_section");

  fotoSection.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    fotoSection.innerHTML += `
            <button onclick="openDialog(${i})">
                <img src="./img/${images[i].img}" alt="${images[i].title}">
            </button>
        `;
  }
}

function openDialog(index) {
  let showPicture = document.getElementById("show_picture");
  let showText = document.getElementById("show_text");

  currentIndex = index;

  showPicture.src = "./img/" + images[currentIndex].img;
  showText.textContent = images[currentIndex].title;

  dialog.showModal();

  document.body.classList.add("dialog-open");

  updateCounter();
}

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

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  document.getElementById("show_picture").src =
    "./img/" + images[currentIndex].img;

  document.getElementById("show_text").textContent = images[currentIndex].title;

  updateCounter();
}

function goRight() {
  changeImage(1);
}

function goLeft() {
  changeImage(-1);
}

function updateCounter() {
  document.getElementById("picture_counter").textContent =
    currentIndex + 1 + "/" + images.length;
}

renderImages();
