function suggestion() {
  var params = {
    from_name: document.querySelector("#name").value,
    message: document.querySelector("#suggestion").value,
  };
  emailjs
    .send("service_ba2rzh2", "template_ndc92er", params)
    .then(function (res) {
      swal({
        title: "Thank You!",
        text: "You are amazing! You just made a suggestion and it will be considered. Thank you once again!. I LOVE YOU (:",
        button: "Go to Homepage",
        icon: "success",
      }).then(function () {
        window.location.href = "index.html";
      });
    });

  // var templateParams = {
  //   from_name: document.querySelector("name").value,
  //   message: document.querySelector("suggestion").value,
  // };

  // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
  //   function (response) {
  //     console.log("SUCCESS!", response.status, response.text);
  //   },
  //   function (error) {
  //     console.log("FAILED...", error);
  //   }
  // );
}
