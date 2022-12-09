const btn = document.querySelectorAll(".btn");
const thankYouContainer = document.querySelector(".thank_you");
const ratingContainer = document.querySelector(".rating_container");
const submitBtn = document.querySelector(".submit_btn");
const againBtn = document.querySelector(".again_btn");
const rate = document.querySelector(".rate");

submitBtn.disabled = true;

submitBtn.onclick = function () {
  thankYouContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
};

againBtn.onclick = function () {
  thankYouContainer.classList.add("hidden");
  ratingContainer.classList.remove("hidden");
  submitBtn.disabled = true;
};

btn.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    rate.innerHTML = clicked.innerHTML;
    submitBtn.disabled = false;
  });
});
