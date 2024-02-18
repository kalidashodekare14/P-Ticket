const allBtn = document.querySelectorAll(".seat-btn");
// console.log(btn);

let totalPrice = 0;
let grandPrice = 0
let count = 0;
for(const btn of allBtn){
   btn.addEventListener('click', function(){
        count += 1;
        // console.log('clicked')
        
       btn.classList.add('bg-[#1DD100]');
       setElementById('seat-select', count)
        // seat booking
        const seatBooking = getElementById('seat-booking');
        const booking = seatBooking - 1;
        setElementById('seat-booking', booking)


        const seatName = btn.innerText;
        const seatPrice = 550;
        // console.log(seatPrice)
        
        // Seat Selected
        const seatNameValue = document.getElementById('seat-name');
        const p = document.createElement('p');
        p.innerText = seatName ;
        seatNameValue.appendChild(p);

     // Calculate totalPrice
        totalPrice += seatPrice;
        console.log(totalPrice);
        document.getElementById('total-price').innerText = totalPrice;
    // Calculate grandPrice
        grandPrice += seatPrice;
        document.getElementById('grand-price').innerText = grandPrice;
   })
}

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