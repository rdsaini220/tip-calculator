var discount = document.getElementById('discount');
let TotalAmount = document.getElementById('TotalAmount');

this.onchange = function() {
    TotalAmount.innerHTML = '$00.00';
}

function TipCalculator(){    
    var billamt = document.getElementById('billamt').value;
    var discount = document.getElementById('discount').value;
    var people = document.getElementById('people').value; 
    // var myform = document.forms["TipClc"]
    // var billamt = myform["billamt"].value;
    // var discount = myform["discount"].value;
    // var people = myform["people"].value;     
    var totalamount = billamt * discount / 100;
    totalamount = totalamount/people;
    if(billamt && discount && people){
        TotalAmount.innerHTML = '$'+totalamount.toFixed(2);
    }else{
        alert('All input fields is required')
    }
}

// Add service model Js
var discount_value = document.getElementById('discount_value');
discount_value.onkeypress = function() {
    if(discount_value.value.length > 1){
        return false;
    }
}

var Addser = document.getElementById('addS');
Addser.onclick = function() {
    var myform = document.forms["AddService"]
    var service_title = myform["service_title"].value;
    var discount_value = myform["discount_value"].value;
    if(service_title && discount_value){
    var option = document.createElement("option");
    option.text = discount_value+'% ' + service_title[0].toUpperCase() + service_title.slice(1);;
    option.value = discount_value;
    discount.appendChild(option);
    document.getElementById('add_discount').classList.remove("show");
    myform.reset();
    document.getElementById('closeButton').click();          
    }
    else{
    alert('All input fields is required')
    }
}
