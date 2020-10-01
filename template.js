const formEl = document.querySelector("#form");
const templateEl = document.querySelector("#contact-template");
const contactsEl = document.querySelector("#contacts");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const newContactValues = {
    name: e.target.name.value || "",
    email: e.target.email.value || "",
    homepage: e.target.homepage.value || "",
  };

  const newContact = markupNewContactTemplate(newContactValues);
  contactsEl.appendChild(newContact);
  resetForm(newContactValues, e);
}

function resetForm(values, e) {
  Object.keys(values).forEach((el) => {
    e.target[el].value = "";
  });
}

function markupNewContactTemplate(values) {
  const clonedTemplate = templateEl.cloneNode(true);
  let contactContent = clonedTemplate.content;
  const contactNameEl = contactContent.querySelector("h2");
  const contactEmailEl = contactContent.querySelector(".email");
  const contactHomePageEl = contactContent.querySelector(".homepage a");

  contactNameEl.textContent = values.name || "";
  contactEmailEl.textContent = values.email || "";
  contactHomePageEl.textContent = values.homepage || "";
  contactHomePageEl.setAttribute("href", values.homepage);

  return contactContent;
}

const languagesArray = [
  "JavaScript",
  "Python",
  "PHP",
  "Java",
  "C",
  "Rust",
  "Go",
];

mapMyArray(languagesArray, (item) => {
  console.log(`${item} string length is: ${item.length}`);
});

function mapMyArray(array, operation) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(operation(array[i], i));
  }
  return newArray;
}
