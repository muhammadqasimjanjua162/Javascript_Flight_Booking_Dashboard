// var clic = document.getElementById("btn");
// btn.addEventListener("click", myfun);
// function myfun() {
//   para.style.visibility = "visible";
// }
var res = document.getElementById("from");

var clicked = document.getElementById("selectflight");

res.addEventListener("click", fun2);
function fun2() {
  if (clicked.style.visibility === "hidden") {
    clicked.style.visibility = "visible";
  } else {
    clicked.style.visibility = "hidden";
  }
}

var flightNo1 = document.getElementById("flight-1").children[0].innerHTML;
var FlightNo1Airport =
  document.getElementById("flight-1").children[1].innerHTML;

var inputcountry = document.getElementById("inputCountry");
var airport = document.getElementById("airportTobeChanged");
document.getElementById("flight-1").addEventListener("click", ChangeFlight);
function ChangeFlight() {
  // document.getElementById("inputCountry").style.color = "green";
  // document.getElementById("inputCountry").style.fontSize = "2.5rem";
  // document.getElementById("inputCountry").style.fontWeight = "bold";
  inputcountry.value = flightNo1;
  airport.innerHTML = FlightNo1Airport;
}
var flightNo2 = document.getElementById("flight-2").children[0].innerHTML;
var FlightNo2Airport =
  document.getElementById("flight-2").children[1].innerHTML;

document.getElementById("flight-2").addEventListener("click", ChangeFlight2);
function ChangeFlight2() {
  inputcountry.value = flightNo2;
  airport.innerHTML = FlightNo2Airport;
}
var flightNo3 = document.getElementById("flight-3").children[0].innerHTML;
var FlightNo3Airport =
  document.getElementById("flight-3").children[1].innerHTML;
document.getElementById("flight-3").addEventListener("click", ChangeFlight3);
function ChangeFlight3() {
  inputcountry.value = flightNo3;
  airport.innerHTML = FlightNo3Airport;
}

// to
var dest = document.getElementById("to");
var destinations = document.getElementById("destinations");
var destinationOne = document.getElementById("dest-1");
var destOneCountry = document.getElementById("dest-1").children[0].innerHTML;
var destOneAirport = document.getElementById("dest-1").children[1].innerHTML;
var OutputContryField = document.getElementById("outputCountryField");
var DestAirport = document.getElementById("destairport");

dest.addEventListener("click", DestClicked);
function DestClicked() {
  if (destinations.style.visibility === "hidden") {
    destinations.style.visibility = "visible";
  } else {
    destinations.style.visibility = "hidden";
  }
}
destinationOne.addEventListener("click", DestinationOneFun);
function DestinationOneFun() {
  OutputContryField.value = destOneCountry;
  DestAirport.innerHTML = destOneAirport;
}
var destinationTwo = document.getElementById("dest-2");
var destTwoCountry = document.getElementById("dest-2").children[0].innerHTML;
var destTwoAirport = document.getElementById("dest-2").children[1].innerHTML;
destinationTwo.addEventListener("click", DestinationTwoFun);
function DestinationTwoFun() {
  OutputContryField.value = destTwoCountry;
  DestAirport.innerHTML = destTwoAirport;
}
var destinationThree = document.getElementById("dest-3");
var destThreeCountry = document.getElementById("dest-3").children[0].innerHTML;
var destThreeAirport = document.getElementById("dest-3").children[1].innerHTML;
destinationThree.addEventListener("click", DestinationThreeFun);
function DestinationThreeFun() {
  OutputContryField.value = destThreeCountry;
  DestAirport.innerHTML = destThreeAirport;
}

//passenger,s  data
//adulst

var decrementBtn = document.getElementById("adults").children[2];

var incrementBtn = document.getElementById("adults").children[4];

var defaultBtn = document.getElementById("adults").children[3];
const adultcounts = document.getElementById("adult-count");

var count = 1;
defaultBtn.innerHTML = count;
decrementBtn.addEventListener("click", DecreaseValue);
const adultCounts = document.getElementById("adult-count");
function DecreaseValue() {
  if (count <= 1) {
    count = 1;
  } else {
    count--;
    defaultBtn.innerHTML = count;
    adultCounts.innerHTML = count;
  }
}

incrementBtn.addEventListener("click", IncreaseValue);
function IncreaseValue() {
  count++;
  defaultBtn.innerHTML = count;
  adultCounts.innerHTML = count;
}

//infants
var decrementBtn3 = document.getElementById("infants").children[2];

var incrementBtn3 = document.getElementById("infants").children[4];

var defaultBtn3 = document.getElementById("infants").children[3];
const infantscount3 = document.getElementById("infants-count");

var count3 = 1;
defaultBtn3.innerHTML = count3;
decrementBtn3.addEventListener("click", DecreaseValue3);
function DecreaseValue3() {
  if (count3 <= 1) {
    count3 = 1;
  } else {
    count3--;
    defaultBtn3.innerHTML = count3;
    infantscount3.innerHTML = count3;
  }
}

incrementBtn3.addEventListener("click", IncreaseValue3);
function IncreaseValue3() {
  count3++;
  defaultBtn3.innerHTML = count3;
  infantscount3.innerHTML = count3;
}
//children
var decrementBtn2 = document.getElementById("children").children[2];

var incrementBtn2 = document.getElementById("children").children[4];

var defaultBtn2 = document.getElementById("children").children[3];
const childCounts = document.getElementById("child-count");

var count2 = 1;
defaultBtn2.innerHTML = count2;
decrementBtn2.addEventListener("click", DecreaseValue2);
function DecreaseValue2() {
  if (count2 <= 1) {
    count2 = 1;
  } else {
    count2--;
    defaultBtn2.innerHTML = count2;
    childCounts.innerHTML = count2;
  }
}

incrementBtn2.addEventListener("click", IncreaseValue2);
function IncreaseValue2() {
  count2++;
  defaultBtn2.innerHTML = count2;
  childCounts.innerHTML = count2;
}

//click Event On Passengers seletion
const others = document.getElementById("others");
const showOthers = document.getElementById("selectpassengerFormDiv");
others.addEventListener("click", ShowPassengerSelectionForm);
function ShowPassengerSelectionForm() {
  showOthers.style.visibility = "visible";
}

//checking th eflight type
const flightType = document.getElementById("economy");

const economycheck = document.getElementById("economycheck");
economycheck.addEventListener("click", addeconomy);
function addeconomy() {
  flightType.innerHTML = economycheck.innerHTML;
}
const premiumcheck = document.getElementById("premiumcheck");
premiumcheck.addEventListener("click", addpremium);
function addpremium() {
  flightType.innerHTML = premiumcheck.innerHTML;
}
const businesscheck = document.getElementById("businesscheck");
businesscheck.addEventListener("click", addbusiness);
function addbusiness() {
  flightType.innerHTML = businesscheck.innerHTML;
}
const firstcheck = document.getElementById("firstcheck");
firstcheck.addEventListener("click", addfirst);
function addfirst() {
  flightType.innerHTML = firstcheck.innerHTML;
}
const stop = document.getElementById("stop");
const yes = document.getElementById("yes");
yes.addEventListener("click", clickedYes);
function clickedYes() {
  stop.innerHTML = stop.innerHTML;
}
const no = document.getElementById("no");
no.addEventListener("click", clickedNo);
function clickedNo() {
  stop.innerHTML = "";
}

//disable return
document.getElementById("dateInput2").disabled = true;
//roundtrip Form 2
const Form2 = document.getElementById("RoundTrip");

Form2.addEventListener("click", EnableReturn);
function EnableReturn() {
  document.getElementById("dateInput2").disabled = false;
}
const latest = document.getElementById("New");
latest.addEventListener("click", disablebtn);
function disablebtn() {
  document.getElementById("dateInput2").disabled = true;
}

//color changing of trip types

const oneway = document.getElementById("onewayclick");
oneway.addEventListener("click", addStyle);

function addStyle() {
  oneway.classList.add("linkactive");
  roundway.classList.remove("linkactive");
  multiway.classList.remove("linkactive");
  returnDate.style.display = "inline-block";
  v1.style.display = "block";
}
const roundway = document.getElementById("roundwayclick");
roundway.addEventListener("click", addStyle2);

function addStyle2() {
  roundway.classList.add("linkactive");
  oneway.classList.remove("linkactive");
  multiway.classList.remove("linkactive");
  returnDate.style.display = "inline-block";
  v1.style.display = "block";
}
const multiway = document.getElementById("multiwayclick");
multiway.addEventListener("click", addStyle3);
const v1 = document.getElementById("v1");

function addStyle3() {
  multiway.classList.add("linkactive");
  oneway.classList.remove("linkactive");
  roundway.classList.remove("linkactive");
  returnDate.style.display = "none";
  v1.style.display = "none";
}
const returnDate = document.getElementById("return");
//add another location

// const AppendHere = document.getElementById("AppendHere");
// const div2 = document.getElementById("from");
// const clone = div2.cloneNode(true);
// clone.id = "from2";

// AppendHere.appendChild(clone);
// document.window.addEventListener("mouseup", function (e) {
//   var container = document.getElementById("flight-dropdown");
//   if (!container.contains(e.target)) {
//     container.style.display = "none";
//   }
// });
// When user clicks anywhere outside of the modal, close it
var modal = document.getElementById("from");

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target !== modal) {
//     clicked2.style.display = "none";
//   }
// };

// document.getElementById("addlocation-button").addEventListener("click", (e) => {
//   debugger;
//   var locationsContainer = document.querySelectorAll(
//     ".location-row > .fligts-info"
//   );
//   console.log(locationsContainer);
//   var elementToCopy = locationsContainer[0].innerHTML;
//   document.getElementById("locations-contianer").innerHTML += elementToCopy;
// });
// window.onclick = function (event) {
//   if (!event.target.matches("#from")) {
//     clicked.style.visibility = "hidden";
//   }
// };
window.onclick = function (event) {
  if (
    !event.target.matches("#from") &&
    !event.target.matches("#airportTobeChanged") &&
    !event.target.matches("#inputCountry") &&
    !event.target.matches("#to") &&
    !event.target.matches("#destairport") &&
    !event.target.matches("#outputCountryField") &&
    !event.target.matches("#others")
  ) {
    clicked.style.visibility = "hidden";

    destinations.style.visibility = "hidden";
    parent.style.visibility = "hidden";
  }
};
