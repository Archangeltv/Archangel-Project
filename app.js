const country = document.querySelector(".country");
const date = document.querySelector(".realdate");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute ");
const cl = document.querySelector("#Country");
const seconds = document.querySelector(".seconds");

document.addEventListener("DOMContentLoaded", dateandtime);

function dateandtime() {
  const unitedkingdom = luxon.DateTime.now().setZone("Europe/London");
  const ghana = luxon.DateTime.now().setZone("Africa/Accra");
  const nigeria = luxon.DateTime.now().setZone("Africa/Luanda");
  const unitedstates = luxon.DateTime.now().setZone("America/New_York");
  const india = luxon.DateTime.now().setZone("Iran");
  const dubai = luxon.DateTime.now().setZone("Indian/Mauritius");
  const korea = luxon.DateTime.now().setZone("ROK");
  const mexico = luxon.DateTime.now().setZone("Mexico/General");
  const china = luxon.DateTime.now().setZone("Hongkong");
  const japan = luxon.DateTime.now().setZone("Japan");

  if (cl.value == "Nigeria") {
    country.innerHTML = "in Nigeria";
    date.innerHTML = nigeria.toFormat("dd");
    year.innerHTML = nigeria.toFormat("yyyy");
    month.innerHTML = nigeria.toFormat("MMMM");
    hour.innerHTML = nigeria.toFormat("HH");
    minute.innerHTML = nigeria.toFormat("mm");
    seconds.innerHTML = nigeria.toFormat("ss");
  }

  if (cl.value == "Ghana") {
    country.innerHTML = "in Ghana";
    date.innerHTML = ghana.toFormat("dd");
    year.innerHTML = ghana.toFormat("yyyy");
    month.innerHTML = ghana.toFormat("MMMM");
    hour.innerHTML = ghana.toFormat("HH");
    minute.innerHTML = ghana.toFormat("mm");
    seconds.innerHTML = ghana.toFormat("ss");
  }
  if (cl.value == "India") {
    country.innerHTML = "in India";
    date.innerHTML = india.toFormat("dd");
    year.innerHTML = india.toFormat("yyyy");
    month.innerHTML = india.toFormat("MMMM");
    hour.innerHTML = india.toFormat("HH");
    minute.innerHTML = india.toFormat("mm");
    seconds.innerHTML = india.toFormat("ss");
  }
  if (cl.value == "Dubai") {
    country.innerHTML = "in Dubai";
    date.innerHTML = dubai.toFormat("dd");
    year.innerHTML = dubai.toFormat("yyyy");
    month.innerHTML = dubai.toFormat("MMMM");
    hour.innerHTML = dubai.toFormat("HH");
    minute.innerHTML = dubai.toFormat("mm");
    seconds.innerHTML = dubai.toFormat("ss");
  }
  if (cl.value == "Korea") {
    country.innerHTML = "in Korea";
    date.innerHTML = korea.toFormat("dd");
    year.innerHTML = korea.toFormat("yyyy");
    month.innerHTML = korea.toFormat("MMMM");
    hour.innerHTML = korea.toFormat("HH");
    minute.innerHTML = korea.toFormat("mm");
    seconds.innerHTML = korea.toFormat("ss");
  }
  if (cl.value == "USA") {
    country.innerHTML = "in United States (New York)";
    date.innerHTML = unitedstates.toFormat("dd");
    year.innerHTML = unitedstates.toFormat("yyyy");
    month.innerHTML = unitedstates.toFormat("MMMM");
    hour.innerHTML = unitedstates.toFormat("HH");
    minute.innerHTML = unitedstates.toFormat("mm");
    seconds.innerHTML = unitedstates.toFormat("ss");
  }
  if (cl.value == "UK") {
    country.innerHTML = "in United Kingdom";
    date.innerHTML = unitedkingdom.toFormat("dd");
    year.innerHTML = unitedkingdom.toFormat("yyyy");
    month.innerHTML = unitedkingdom.toFormat("MMMM");
    hour.innerHTML = unitedkingdom.toFormat("HH");
    minute.innerHTML = unitedkingdom.toFormat("mm");
    seconds.innerHTML = unitedkingdom.toFormat("ss");
  }
  if (cl.value == "Japan") {
    country.innerHTML = "in Japan";
    date.innerHTML = japan.toFormat("dd");
    year.innerHTML = japan.toFormat("yyyy");
    month.innerHTML = japan.toFormat("MMMM");
    hour.innerHTML = japan.toFormat("HH");
    minute.innerHTML = japan.toFormat("mm");
    seconds.innerHTML = japan.toFormat("ss");
  }
  if (cl.value == "Mexico City") {
    country.innerHTML = "in Mexico City";
    date.innerHTML = mexico.toFormat("dd");
    year.innerHTML = mexico.toFormat("yyyy");
    month.innerHTML = mexico.toFormat("MMMM");
    hour.innerHTML = mexico.toFormat("HH");
    minute.innerHTML = mexico.toFormat("mm");
    seconds.innerHTML = mexico.toFormat("ss");
  }
  if (cl.value == "China") {
    country.innerHTML = "in China";
    date.innerHTML = china.toFormat("dd");
    year.innerHTML = china.toFormat("yyyy");
    month.innerHTML = china.toFormat("MMMM");
    hour.innerHTML = china.toFormat("HH");
    minute.innerHTML = china.toFormat("mm");
    seconds.innerHTML = china.toFormat("ss");
  }
}

window.setInterval(() => {
  dateandtime();
}, 1000);
