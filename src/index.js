const h1 = document.createElement("h1");
h1.innerText = "CREATE AN ACCOUNT";

const p = document.createElement("p");
p.innerText = "We always keep your name and email address private.";

const divHeader = document.createElement("div");
divHeader.classList.add("header");
divHeader.appendChild(h1);
divHeader.appendChild(p);

const inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "First name";
inputName.className = "input";
inputName.id = "first-name";

const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Email Address";
inputEmail.className = "input";
inputEmail.id = "email";

const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "Password";
inputPassword.className = "input";
inputPassword.id = "password";
      
const divFirstColumnInput = document.createElement("div");
divFirstColumnInput.classList.add("input-text");

const inputLast = document.createElement("input");
inputLast.type = "text";
inputLast.placeholder = "Last name";
inputLast.className = "input";
inputLast.id = "last-name";
const inputDisplayName = document.createElement("input");
inputDisplayName.type = "text";
inputDisplayName.placeholder = "Display Name";
inputDisplayName.className = "input";
inputDisplayName.id = "display-name";

const inputPasswordConfirmation = document.createElement("input");
inputPasswordConfirmation.type = "password";
inputPasswordConfirmation.placeholder = "Password Confirmation";
inputPasswordConfirmation.className = "input";

const divSecondColumnInput = document.createElement("div");
divSecondColumnInput.classList.add("input-text");

divFirstColumnInput.appendChild(inputName);
divFirstColumnInput.appendChild(inputDisplayName);
divFirstColumnInput.appendChild(inputPassword);

divSecondColumnInput.appendChild(inputLast);
divSecondColumnInput.appendChild(inputEmail);
divSecondColumnInput.appendChild(inputPasswordConfirmation);

const InputTextConteiner = document.createElement("div");
InputTextConteiner.classList.add("column-type");

InputTextConteiner.appendChild(divFirstColumnInput);
InputTextConteiner.appendChild(divSecondColumnInput);

const radioBuyer = document.createElement("input");
radioBuyer.type = "radio";
radioBuyer.id = "buyer";
radioBuyer.name = "join";

const labelForRadioBuyer = document.createElement("label");
labelForRadioBuyer.htmlFor = "buyer";
labelForRadioBuyer.innerText = "Join As a Buyer";

const divFirstRadioButton = document.createElement("div");
divFirstRadioButton.classList.add("radio-button");

divFirstRadioButton.appendChild(radioBuyer);
divFirstRadioButton.appendChild(labelForRadioBuyer);

const paragraphForFirstRadio = document.createElement("p");
paragraphForFirstRadio.classList.add("paragph");
paragraphForFirstRadio.innerText =
  "I am looking for a Name, Logo or Tagline for my business, brand orproduction.";

const firstRadioBox = document.createElement("div");
firstRadioBox.classList.add("radio");

firstRadioBox.appendChild(divFirstRadioButton);
firstRadioBox.appendChild(paragraphForFirstRadio);

const radioSeller = document.createElement("input");
radioSeller.type = "radio";
radioSeller.id = "seller";
radioSeller.name = "join";

const labelForRadioSeller = document.createElement("label");
labelForRadioSeller.htmlFor = "seller";
labelForRadioSeller.innerText = "Join As a Creative or Marketplace Seller";

const divSecondRadioButton = document.createElement("div");
divSecondRadioButton.classList.add("radio-button");

divSecondRadioButton.appendChild(radioSeller);
divSecondRadioButton.appendChild(labelForRadioSeller);

const paragraphForSecondRadio = document.createElement("p");
paragraphForSecondRadio.classList.add("paragph");
paragraphForSecondRadio.innerText =
  "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace";

const secondRadioBox = document.createElement("div");
secondRadioBox.classList.add("radio");

secondRadioBox.appendChild(divSecondRadioButton);
secondRadioBox.appendChild(paragraphForSecondRadio);

const radioBlock = document.createElement("div");
radioBlock.classList.add("input-radio");

radioBlock.appendChild(firstRadioBox);
radioBlock.appendChild(secondRadioBox);


const checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.id = "allow";

const checkBoxlabel = document.createElement("label");
checkBoxlabel.htmlFor = "allow";
checkBoxlabel.innerText =
  "Allow Squadhelp to send marketing/promotional offers from time to time";

const inputCheckbox = document.createElement("div");
inputCheckbox.classList.add("input-checkbox");

inputCheckbox.appendChild(checkBox);
inputCheckbox.appendChild(checkBoxlabel);

const button = document.createElement("input");
button.type = "submit";
button.value = "Create account";
button.className = "button";

const formDiv = document.createElement("div");
formDiv.classList.add("form");

formDiv.appendChild(divHeader);
formDiv.appendChild(InputTextConteiner);
formDiv.appendChild(radioBlock);
formDiv.appendChild(inputCheckbox);
formDiv.appendChild(button);

const form = document.createElement("form");
form.appendChild(formDiv);

document.body.appendChild(form);

//------------------------------------------------------------------------

function collectProps() {


}

