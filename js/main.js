function validateForm() {
var name = document.getElementById("name").value;   //Name
var dob = document.getElementById("dob").value;     //Date of birth

var parts = dob.split("-");     //splitting date string into day-month-year
var  givenYear =parseInt(parts[0]);     //year as integer
var currentYear = new Date().getFullYear();     //current year
var stateName , stateDob;       //Boolean state variable

if (/^[A-Za-z.\s]+$/.test(name)){        //Checking whether alphabet or space or .
    console.log("name");
    stateName = true;
}
else {
    console.log("X-name-X");
    stateName = false;
}

if((currentYear-givenYear) >= 15){      //Checking whether age is above 15
    console.log("dob");
    stateDob = true;
}
else{
    console.log("X-dob-X");
    stateDob = false;
}

//Output Message
if(stateDob && stateName){
    document.getElementById("info").innerHTML = "Submit";
}

else if (stateDob || stateName) {
    if (!stateDob) {
        document.getElementById("info").innerHTML = "You should be at least 15 to subscribe !!!";
    }

    if (!stateName) {
        document.getElementById("info").innerHTML = "Check entered name. No special characters allowed!!!";
    }
}

else{
    document.getElementById("info").innerHTML = "Check entered name. No special characters allowed!!!\nYou should be at least 15 to subscribe !!!"
}

}