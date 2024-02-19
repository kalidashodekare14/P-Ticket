const allBtn = document.querySelectorAll(".seat-btn");
// console.log(btn);

let totalPrice = 0;
let grandPrice = 0
let count = 0;
for(const btn of allBtn){
   btn.addEventListener('click', function(){
        count += 1;

        const applyBtn = document.getElementById('apply-btn');
        const seatName = btn.innerText;
        const seatPrice = 550;
        

        if(count === 4){

            applyBtn.removeAttribute('disabled'); 
        }
        else if(count >= 5){
            alert('Only 4 Ticket is Available')
            allBtn.setAttribute('disabled', false);
            
        }
        else{
            applyBtn.setAttribute('disabled', true);
        }

        // Button Background Color
       btn.classList.add('bg-[#1DD100]');
       setElementById('seat-select', count)
        // seat booking
        const seatBooking = getElementById('seat-booking');
        const booking = seatBooking - 1;
        setElementById('seat-booking', booking)
        
        // Seat Selected
        const seatNameValue = document.getElementById('seat-name');
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = seatName ;
        const p2 = document.createElement('p');
        p2.innerText = "Economoy";
        const p3 = document.createElement('p');
        p3.innerText = '550';

        seatNameValue.appendChild(div);
        div.classList.add('flex');
        div.classList.add('justify-between');
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

     // Calculate totalPrice
        totalPrice += seatPrice;
        console.log(totalPrice);
        document.getElementById('total-price').innerText = totalPrice;
    // Calculate grandPrice
        grandPrice += seatPrice;
        document.getElementById('grand-price').innerText = grandPrice;
   })
}


document.getElementById('input-number').addEventListener('keyup', function(event){
    const number = event.target.value;
    console.log(number);
    const showBtn = document.getElementById('submit-btn');
    if(count = 1 && number.length >= 11){
        showBtn.removeAttribute('disabled')
    }
    else{
        showBtn.addAttribute('disabled', true);
    }
    
})



const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
   

    const couponElement = document.getElementById('coupon-code').value;
    const couponCode = couponElement.split(" ").join(' ');
    console.log(couponCode);
    // console.log(couponCode);
    if(couponCode === 'Couple 20'){
        const discountPrice = document.getElementById('discount-price');
        const discountPrices = totalPrice * 0.2;
        discountPrice.innerText = discountPrices;

        const discountTotal = document.getElementById('grand-price');
        discountTotal.innerText = totalPrice - discountPrices;

        getRemoveElement('couponCodeInput');
        getAddElement('success-box');

    }
    else if(couponCode === 'NEW15'){
        const discountPrice = document.getElementById('discount-price');
        const discountPrices = totalPrice * 15 / 100;
        discountPrice.innerText = discountPrices;

        const discountTotal2 = document.getElementById('grand-price');
        discountTotal2.innerText = totalPrice - discountPrices;

        getRemoveElement('couponCodeInput');
        getAddElement('success-box');
    }
    else{
        // applyBtn.setAttribute('disabled', true);
        alert('Please enter the correct coupon code.')
    }
    
    
})



function setElementById(id, value){
    document.getElementById(id).innerText = value;
}

function getElementById(elementId){
    const elementTextValue = document.getElementById(elementId);
    const elementValue = elementTextValue.innerText;
    const element = parseInt(elementValue);
    return element;
}

function getAddElement(elementId){
    const element = document.getElementById(elementId);
    element.removeAttribute('hidden');
}

function getRemoveElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
} 

function addBackgroundColor(elementId){
    const element =  document.getElementById(elementId);
    element.classList.add('text-green-600');
}