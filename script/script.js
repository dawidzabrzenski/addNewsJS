addButton = document.querySelector(".button");
inputWindow = document.querySelector(".add__news--input");
headerTitle = document.querySelector(".header--text");
counter = document.querySelector(".counter");

let newsNumber = 0;
let news = [];
let charCount = 0;

const emptyContent = function (x) {
  if (x === 0) {
    addButton.classList.add("wrong");
    addButton.textContent = "Try Again!";
    headerTitle.textContent = "The news content box is empty! 😞";
  } else {
    addButton.classList.remove("wrong");
    addButton.textContent = "New News";
    headerTitle.textContent = "News added! 🤩";
  }
};

const wordCounter = function (e) {};

addButton.addEventListener("click", function () {
  if (inputWindow.value !== "") {
    emptyContent(1);

    newsNumber++;
    news.push({
      id: newsNumber,
      title: `News ${newsNumber}`,
      content: inputWindow.value,
    });

    const addNewsBox = document.createElement("div");
    addNewsBox.classList.add(`news__box`);
    document.querySelector(".news").appendChild(addNewsBox);

    const addNewsTitle = document.createElement("div");
    addNewsTitle.classList.add("news__box--title");
    addNewsBox.appendChild(addNewsTitle);

    const addNewsContent = document.createElement("div");
    addNewsContent.classList.add("news__box--content");
    addNewsBox.appendChild(addNewsContent);

    addNewsTitle.textContent = news[newsNumber - 1].title;
    addNewsContent.textContent = inputWindow.value;

    addNewsBox.scrollIntoView({ behavior: "smooth" });

    inputWindow.value = "";
    charCount = 0;
    counter.textContent = `${charCount} of 250 characters`;
    counter.style.color = "#e0e0e0";

    console.log(news);
  } else {
    emptyContent(0);
  }
});

inputWindow.addEventListener("keyup", function (e) {
  charCount = inputWindow.value.length;
  counter.textContent = `${charCount} of 250 characters`;

  if (inputWindow.value.length === 250) {
    counter.style.color = "#c91717";
  } else {
    counter.style.color = "#e0e0e0";
  }
});

addButton.addEventListener();
