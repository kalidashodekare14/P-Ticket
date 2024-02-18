const allBtn = document.querySelectorAll(".seat-btn");
// console.log(btn);

let totalPrice = 0;
let grandPrice = 0
let count = 0;
for(const btn of allBtn){
   btn.addEventListener('click', function(){
        count += 1;
        // console.log('clicked')
        const submitBtn = document.getElementById('submit-btn');
        const applyBtn = document.getElementById('apply-btn');
        const seatName = btn.innerText;
        const seatPrice = 550;
        // console.log(seatPrice)

        if(count === 4){
            // console.log('kaj hoice');
            applyBtn.removeAttribute('disabled');  
            submitBtn.removeAttribute('disabled');  
        }
        else if(count >= 5){
            allBtn.setAttribute('disabled', false);

        }
        else{
            console.log('ar beshi hocce');
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


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
   
    const couponElement = document.getElementById('coupon-code').value;
    const couponCode = couponElement.split(" ").join('').toUpperCase();
    // console.log(couponCode);
    if(couponCode === 'COUPLE20'){
        const discountTotal = document.getElementById('grand-price');
        const discountPrice = totalPrice * 0.2;
        discountTotal.innerText = discountPrice;
    }
    else if(couponCode === 'NEW15'){
        const discountTotals = document.getElementById('grand-price');
        const discountPrices = totalPrice * 15 / 100;
        discountTotals.innerText = discountPrices;
    }
    else{
        applyBtn.setAttribute('disabled', true);
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

function addBackgroundColor(elementId){
    const element =  document.getElementById(elementId);
    element.classList.add('text-green-600');
}