//***************** Part - 1 ************************//
/**
 * 1. click every item and add a event handeler
 * 2. get the item title text
 * 3. get the cart container and get the container item position 
 * 4. set the set the item title and item position
 * 5. get the item amount and convert the item amount as a number
 * 6. get the total price element and convert total price as a number
 * 6. totalPrice: item sumation
 * 7. get the total price element and set the totalPrice
 * 
 */

// step-1
function cardClicked(cardNumber) {
    // step-2
    const card = document.getElementsByClassName('card');
    const productTitle = card[cardNumber].childNodes[3].childNodes[5].innerText
    // step-3
    const itemCartContainer = document.getElementById('item-cart');
    const count = itemCartContainer.childElementCount
    // step-4
    const p = document.createElement('p')
    p.innerHTML = `<p class="text-xl font-medium">${count+1}. ${productTitle}</p>`  
    itemCartContainer.appendChild(p)
    // // step-5
    const productPriceElement = card[cardNumber].childNodes[3].childNodes[7].childNodes[1]
    const productPriceString = productPriceElement.innerText
    const productPrice = parseFloat(productPriceString)
    // setp-6
    const totalPrice = elementNumber('total-price')
    // step-7
    const newTotalPrice = totalPrice + productPrice
    const prevBalance = element('total-price')
    prevBalance.innerText = newTotalPrice

    const pay = element('pay')
    pay.innerText = newTotalPrice


   
    
    if(newTotalPrice >= 1000) {
        const cuponButton = document.getElementById('cupon-btn');
        cuponButton.removeAttribute('disabled')
    }

 
    if(newTotalPrice > 0) {
        const payBtn = element('pay-btn');
        payBtn.removeAttribute('disabled')
    }
    
    
}


document.getElementById('cupon-btn').addEventListener('click', function(){
        const cuponField = element('cupon-field').value;
        const cuponCode = element('cupon-code').innerText;
        if(cuponField == cuponCode) {
            const totalPrice = elementNumber('total-price')
            const discountAmount = (totalPrice * 20) / 100;
            const discountElement = element('discount')
            discountElement.innerText = discountAmount

            // subtotal
            const pay = element('pay')
            const subTotal = totalPrice - discountAmount
            pay.innerText = subTotal
            console.log(pay, subTotal)
        }
    })
    // const discountElement = 


// utitilies
function element(id) {
    const element = document.getElementById(id) 
    return element
}

function elementNumber(id) {
    const element = document.getElementById(id);
    const elementString = element.innerText
    const number = parseFloat(elementString);
  
    return number
}

// document.getElementById('card1').addEventListener('click', function(event) {
//     const card = document.getElementById('card')

//     console.log(card);
// })

