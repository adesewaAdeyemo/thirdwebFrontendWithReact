export function fetchcountry() {
  fetch("https://restcountries.com/v3/all")
    .then((response) => response.json())
    .then((data) => {
      const countrySelect = document.getElementById("countrySelect");

      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });

      $(".selectpicker").selectpicker("refresh");
    })
    .catch((error) => console.error("Error fetching country data.", error));
}
fetchcountry();

let valid = true;
let list = [
  "identification.txt",
  "identificationb.txt",
  "identificationc.txt",
  "identificationd.txt",
];


export function validate(event, id) {
  const field = document.getElementById(id);
  const error = document.getElementById(id + "Error");
  if (!field.value) {
    valid = false;
    error.classNameList.add("visible");
    field.classNameList.add("invalid");
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
    console.log("error");
  } else {
    valid = true;
    // error.classNameList.remove("visible")
    // field.classNameList.remove("invalid");
    // error.setAttribute("aria-hidden", true);
    // error.setAttribute("aria-invalid", false);
  }
  if (!valid) {
    event.preventDefault();
  }
  return valid;
}

