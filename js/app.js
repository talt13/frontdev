// data var
let flagsData = {};
const data = {
  stuff: "",
  link: "",
  price: "",
};

// dom elements
const stuffInputEl = document.querySelector(".stuff");
const linkInputEl = document.querySelector(".linkUniq");
const priceInputEl = document.querySelector(".priceUniq");
const submitBtnEl = document.querySelector("#submitbutton");

//functions
const onChangeStuffInput = () => {
  const inputText = stuffInputEl.value;
  incrementFlagValue(inputText, "stuff");
  data.stuff = inputText;
  checkParams();
};

const onChangeLinkInput = () => {
  const inputText = linkInputEl.value;
  incrementFlagValue(inputText, "link");
  data.link = inputText;
  checkParams();
};

const onChangePriceInput = () => {
  const inputText = priceInputEl.value;
  incrementFlagValue(inputText, "price");
  data.price = inputText;
  checkParams();
};

const onSubmitClick = () => {
  console.log(data);
};

const incrementFlagValue = (inputText, propName) => {
  if (inputText != "") {
    propName[propName] = true;
  }
};

const checkParams = () => {
  if (data.stuff !== "" && data.link !== "" && data.price !== "") {
    submitBtnEl.removeAttribute("disabled");
  }
};

//events
stuffInputEl.addEventListener("blur", onChangeStuffInput);
linkInputEl.addEventListener("blur", onChangeLinkInput);
priceInputEl.addEventListener("blur", onChangePriceInput);
submitBtnEl.addEventListener("click", onSubmitClick);
