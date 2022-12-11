const btn = document.querySelectorAll(".btn");
const thankYouContainer = document.querySelector(".thank_you");
const ratingContainer = document.querySelector(".rating_container");
const submitBtn = document.querySelector(".submit_btn");
const againBtn = document.querySelector(".again_btn");
const rate = document.querySelector(".rate");

submitBtn.disabled = true;

btn.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    rate.innerHTML = clicked.innerHTML;
    submitBtn.disabled = false;
  });
});

againBtn.onclick = function () {
  thankYouContainer.classList.add("hidden");
  ratingContainer.classList.remove("hidden");
  submitBtn.disabled = true;
};

function rated() {
  thankYouContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
  let params = {
    rating: ratingxx,
  };
  emailjs
    .send("service_ba2rzh2", "template_3o66qys", params)
    .then(function (res) {
      console.log("Success", res);
    });
}

btn.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    ratingxx = clicked.innerHTML;
    return ratingxx;
  });
});
