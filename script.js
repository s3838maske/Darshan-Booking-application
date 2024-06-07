function formOpen() {
    var test = document.getElementById("test")
    test.style.display = "block";

}

function closeFrom(){
    var test1 = document.getElementById("test")
    test1.style.display = "none";
}
function donationformOpen() {
    var donationform = document.getElementById("donation-form")
    donationform.style.display = "block";
}

function donationFromClose(){
    var donationform1 = document.getElementById("donation-form")
    donationform1.style.display = "none";
}

var userDeatilsArray = [];

function getData () {
    const Date = document.getElementById("date").value
    const timeSlot = document.getElementById("time").value
    const darshanType = document.getElementById("type").value
    const passType = document.getElementById("passtype").value
    const noOfPerson = document.getElementById("noOfPerson").value

    const Bookingdetails = {
        date : Date,
        timeslot : timeSlot,
        darshantype : darshanType,
        passtype : passType,
        noofperson : noOfPerson
    } 

    // localStorage.setItem(Bookingdetails)

    userDeatilsArray.push(Bookingdetails);
    console.log(Bookingdetails)
    alert("booked")
}