const btnContainer = document.getElementById("ticketBtnContainer");
let idContainer = [];
let pressedIDContainer = [];

for (let i = 0; i < btnContainer.childNodes.length; i++) {
  if (btnContainer.childNodes[i].nodeType === 1) {
    let getID = btnContainer.childNodes[i].innerText;

    if (getID.length == 2) {
      idContainer.push(getID);
    }
  }
}
let maxNumber = 1;
// Make All Tickets Btn Clickable and make a Alert
for (let id of idContainer) {
  document.getElementById(id).addEventListener("click", function () {
    // one time click
    let pressedID = id;
    pressIDArray = [pressedID];
    let filter = pressedIDContainer.filter((element) =>
      pressIDArray.includes(element)
    );

    // click effect
    if (maxNumber <= 4 && filter.length === 0) {
      maxNumber += 1;
      document.getElementById(id).classList.add("bg-primaryClr");
      minusTicket(maxNumber);
      displayTicketDetails(id);
      priceCalculation();
      sellCalculation(0);
      badge(maxNumber);
      couponBtn(maxNumber);

      pressedIDContainer.push(id);
    } else if (maxNumber > 4) {
      const alert = document.getElementById("alert");
      alert.classList.remove("hidden");
      alert.addEventListener("click", function () {
        alert.classList.add("hidden");
      });
    }
  });
}
function badge(number) {
  document.getElementById("badge").innerText = number - 1;
}

let priceCount = 0;
function priceCalculation() {
  let price = 500;
  priceCount += price;
  document.getElementById("totalPrice").innerText = priceCount;
}

function displayTicketDetails(sitNumber) {
  let display = document.getElementById("displayTicket");
  let newDiv = document.createElement("div");
  newDiv.classList.add("flex", "justify-between", "items-center", "w-full");

  let childOne = document.createElement("div");
  childOne.innerText = sitNumber;

  let childTwo = document.createElement("div");
  childTwo.innerText = "Economoy";

  let childThree = document.createElement("div");
  childThree.innerText = 500;
  childThree.classList.add("sitNumber");

  newDiv.appendChild(childOne);
  newDiv.appendChild(childTwo);
  newDiv.appendChild(childThree);
  display.appendChild(newDiv);
}

// grand price and coupen field

function couponBtn(maxNumber) {
  if (maxNumber <= 4) {
    let btn = document
      .getElementById("couponButton")
      .setAttribute("disabled", true);
  } else if (maxNumber > 4) {
    let btn = document
      .getElementById("couponButton")
      .removeAttribute("disabled", true);
    document
      .getElementById("couponInput")
      .addEventListener("keyup", function (e) {
        let text = e.target.value;
        const coupon1 = "NEW15";
        const coupon2 = "Couple20";
        document
          .getElementById("couponButton")
          .addEventListener("click", function () {
            if (text === coupon1) {
              sellCalculation(15);
            } else if (text === coupon2) {
              sellCalculation(20);
            }
          });
      });
  }
}

function sellCalculation(numberOfpercent) {
  let totalCoastText = document.getElementById("totalPrice").innerText;
  let totalCoast = parseInt(totalCoastText);
  let discountGet = numberOfpercent / 100;
  let discount = totalCoast * discountGet;
  let grandTotal = totalCoast - discount;
  document.getElementById("grandTotal").innerText = grandTotal;
}

// form validation
document
  .getElementById("phnNumber")
  .addEventListener("keyup", function (event) {
    let phoneNumber = event.target.value;
    if (maxNumber > 1 && phoneNumber !== null) {
      document.getElementById("alertGo").removeAttribute("disabled");
    }
  });

function minusTicket(number) {
  const ticketNumberValue = document.getElementById("ticketLeft");
  let leftTicket = 40 - number + 1;
  ticketNumberValue.innerText = leftTicket;
}

// alert of success

function showAlert(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}
function hideAlert(elementId) {
  document.getElementById("alertOfSuccess").classList.add("hidden");
}


// navbar dynamic
let getLink = [
  "Home1",
  "Home2",
  "About1",
  "About2",
  "Registration1",
  "Registration2",
  "Contact1",
  "Contact2",
];
for (let link of getLink) {
  // console.log(document.getElementsByClassName(link))
  document.getElementById(link).addEventListener("click", function () {
    let innerTextOfLink = document.getElementById(link).innerText;
    if (innerTextOfLink === "Home") {
      console.log("home");
      fun("Contact");
      fun1("buyTickets");
      fun1("offer");
      fun1("bannerBottom");
      fun1("banner");
      fun("SignUp");
      fun("about");
    } else if (innerTextOfLink === "About") {
      fun("Contact");
      fun("buyTickets");
      fun("offer");
      fun("bannerBottom");
      fun("banner");
      fun1("about");
      fun("SignUp");
      
    } else if (innerTextOfLink === "Registration") {
      
      fun("Contact");
      fun("buyTickets");
      fun("offer");
      fun("bannerBottom");
      fun("banner");
      fun1("SignUp");
      fun("about");
    } else if (innerTextOfLink === "Contact") {
      fun1("Contact");
      fun("buyTickets");
      fun("offer");
      fun("bannerBottom");
      fun("banner");
      fun('SignUp')
      fun("about");
      
    }
  });
}
function fun(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}
function fun1(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}
