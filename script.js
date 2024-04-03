function makePayment() {
    if (item1.value == "" || price1.value == "" || item2.value == "" || price2.value == "" || item3.value == "" || price3.value == "" ||  item4.value == "" || price4.value == "" ||  item5.value == "" || price5.value == "" || item6.value == "" || price6.value == "") {
        alert("Fill in the empty spaces")
    }
    var confirmation = confirm("Are you sure you want to make payment?")
    if (confirmation == true){
        var sum = Number(price1.value) + Number(price2.value)  + Number(price3.value)  + Number(price4.value)  + Number(price5.value)  + Number(price6.value)
        var Result = sum 
        console.log(Result);
    }
    if (Result > 10000){
        // var notice = "you cannot spend more than Ten thousand naira"
         document.getElementById('notice').innerHTML = "You cannot spend more than Ten thousand naira"
    }
    else {
        showitem1.innerHTML = item1.value
        showitem2.innerHTML = item2.value
        showitem3.innerHTML = item3.value
        showitem4.innerHTML = item4.value
        showitem5.innerHTML = item5.value
        showitem6.innerHTML = item6.value
        
        showprice1.innerHTML = price1.value
        showprice2.innerHTML = price2.value
        showprice3.innerHTML = price3.value
        showprice4.innerHTML = price4.value
        showprice5.innerHTML = price5.value
        showprice6.innerHTML = price6.value
    }
}
