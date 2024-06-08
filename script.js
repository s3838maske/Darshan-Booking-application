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
function myBookingOpen() {
    var bookingScreen = document.getElementById("booking-list")
    bookingScreen.style.display = "block";
}

function myBookingClose(){
    var bookingScreen1 = document.getElementById("booking-list")
    bookingScreen1.style.display = "none";
}



var userDeatilsArray = [];

function getData () {
    console.log("called")
    var Date = document.getElementById("date").value
    var timeSlot = document.getElementById("time").value
    var darshanType = document.getElementById("type").value
    var passType = document.getElementById("passType").value
    var noOfPerson = document.getElementById("noOfPerson").value
    var bookingCard = document.getElementById("booking-card")

    const Bookingdetails = {
        date : Date,
        timeslot : timeSlot,
        darshantype : darshanType,
        passtype : passType,
        noofperson : noOfPerson
    } 

    userDeatilsArray.push(Bookingdetails);
    
    localStorage.setItem("userBookingDetail", JSON.stringify(userDeatilsArray));
    // console.log(JSON.parse(localStorage.getItem("userBookingDetail")));
 var data = localStorage.getItem("userBookingDetail")
 var data2 =JSON.parse(data)
 console.log(data2.date)

    alert("Pass Booked Successfully!!")

    
    bookingCard.innerHTML += ` <div class="booking-details">
    <li>Date : ${data2.date}</li>
    <li>Slot Time : ${data2.timeslot}</li>
    <li>Type : ${data2.darshantype}</li>
    <li>Pass Type : ${data2.passtype}</li>
    <li>No. Of Person : ${data2.noofperson}</li>
    </div>`
    

}