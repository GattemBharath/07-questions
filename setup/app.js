//using selectors inside the element
// traversing the dom

//! Traversing the DOM

/*
const questions = document.querySelectorAll(".question-btn");

questions.forEach((question) =>
  question.addEventListener("click", function (e) {
    const qtn = e.currentTarget.parentElement.parentElement;
    qtn.classList.toggle("show-text");
  })
);
*/

//! Using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
