addButton = document.querySelector(".button");
inputWindow = document.querySelector(".add__news--input");
headerTitle = document.querySelector(".header--text");

let newsNumber = 0;
let news = [];

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

addButton.addEventListener("click", function () {
  if (inputWindow.value !== "") {
    emptyContent(1);

    newsNumber++;
    news.push({
      id: 0,
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

    inputWindow.value = "";

    console.log(news);
  } else {
    emptyContent(0);
  }
});
