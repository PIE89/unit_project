// button listener
const navigation = document.querySelector(".nav");
const icon = document.querySelector(".nav-icon");
const links = navigation.querySelectorAll("a");
const searchForm = document.querySelector(".search");
const searchButton = document.querySelector(".search__button");

// Навигация
icon.addEventListener("click", function () {
  this.classList.toggle("nav-icon--active");
  navigation.classList.toggle("nav--active");
  // searchForm.classList.toggle("none");w
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    icon.classList.remove("nav-icon--active");
    navigation.classList.remove("nav--active");
  });
});

// Поиск по странице
searchButton.addEventListener("click", function (e) {
  if (!searchForm.classList.contains("search--visible")) {
    e.preventDefault();
    searchForm.classList.toggle("search--visible");
  }
});
