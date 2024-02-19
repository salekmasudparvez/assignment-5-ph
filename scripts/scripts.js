


const btnContainer = document.getElementById('ticketBtnContainer');
let idContainer = [];
let pressedIDContainer = [];

for (let i = 0; i < btnContainer.childNodes.length; i++) {
    if (btnContainer.childNodes[i].nodeType === 1) {
        let getID = btnContainer.childNodes[i].innerText;

        if (getID.length == 2) {
            idContainer.push(getID)
        }

    }
}
let maxNumber = 1;
// Make All Tickets Btn Clickable and make a Alert
for (let id of idContainer) {

    document.getElementById(id).addEventListener('click', function () {

        // one time click
        let pressedID = id;
        pressIDArray = [pressedID]
        let filter = pressedIDContainer.filter(element => pressIDArray.includes(element));

        // click effect
        if (maxNumber <= 4 && filter.length === 0) {
            maxNumber += 1;
            document.getElementById(id).classList.add('bg-primaryClr');
            minusTicket(maxNumber);
            displayTicketDetails(id)
            priceCalculation()
            sellCalculation(0)
            badge()

            pressedIDContainer.push(id)

        } else if (maxNumber > 4) {
            const alert = document.getElementById('alert');
            alert.classList.remove('hidden');
            alert.addEventListener('click', function () {
                alert.classList.add('hidden');
            })
        }
    })
}

let priceCount = 0;
function priceCalculation() {
    let price = 500;
    priceCount += price;
    document.getElementById('totalPrice').innerText = priceCount
}

function displayTicketDetails(sitNumber) {
    let display = document.getElementById('displayTicket');
    let newDiv = document.createElement('div');
    newDiv.classList.add("flex", "justify-between", "items-center", "w-full");

    let childOne = document.createElement('div');
    childOne.innerText = sitNumber;

    let childTwo = document.createElement('div');
    childTwo.innerText = "Economoy"

    let childThree = document.createElement('div');
    childThree.innerText = 500;
    childThree.classList.add('sitNumber');


    newDiv.appendChild(childOne);
    newDiv.appendChild(childTwo);
    newDiv.appendChild(childThree);
    display.appendChild(newDiv);
}

// grand price and coupen field


let couponBtn = document.getElementById('couponBtn');

document.getElementById('couponInput').addEventListener('keyup', function (event) {
    let text = event.target.value;
    if (text !== null) {
        couponBtn.removeAttribute('disabled');
        couponBtn.addEventListener('click', function () {
            const coupon1 = 'NEW15';
            const coupon2 = 'Couple 20';
            if (text.trim() === coupon1) {
                sellCalculation(15);
                document.getElementById('invalidCoupon').classList.add('hidden');

            } else if (text.trim() === coupon2) {
                sellCalculation(20);
                document.getElementById('invalidCoupon').classList.add('hidden');
            } else if (text!==coupon1 || text!==cou) {
                sellCalculation(0);
                document.getElementById('invalidCoupon').classList.remove('hidden');
            }
        })
    } else {
        couponBtn.setAttribute('disabled')
    }
});

function sellCalculation(numberOfpercent) {
    let totalCoastText = document.getElementById('totalPrice').innerText;
    let totalCoast = parseInt(totalCoastText);
    let discountGet = numberOfpercent / 100;
    let discount = totalCoast * discountGet;
    let grandTotal = totalCoast - discount;
    document.getElementById('grandTotal').innerText = grandTotal;

}




// form validation
document.getElementById('phnNumber').addEventListener('keyup', function(event){
    let phoneNumber = event.target.value;
    if(maxNumber>1 && phoneNumber!==null){
        document.getElementById('alertGo').removeAttribute('disabled');
    }
})


function minusTicket(number) {

    const ticketNumberValue = document.getElementById('ticketLeft');
    let leftTicket = 40 - number + 1;
    ticketNumberValue.innerText = leftTicket;

}

// alert of success

function showAlert(){
    document.getElementById('alertOfSuccess').classList.remove('hidden');
    document.getElementById('alertOfSuccess').classList.add('flex');
 }
function hideAlert(){
    document.getElementById('alertOfSuccess').classList.remove('flex');
    document.getElementById('alertOfSuccess').classList.add('hidden');
}
function badge(){
    let badgeTextContain =document.getElementById('badge');
    badgeTextContain.innerText=maxNumber - 1;

}




