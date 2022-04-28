// function alertFirstNameValues() {
//     console.log(firstNameEl.value);
//     console.log(firstNameEl.className);
// }

// function alertLastNameValues() {
//     console.log(lastNameEl.value);
//     console.log(lastNameEl.className);
// }

// function alertAdressNameValues() {
//     console.log(adressNameEl.value);
//     console.log(adressNameEl.className);
// }

// function alertHobiesNameValues() {
//     console.log(hobbiesEl.value);
//     console.log(hobbiesEl.className);
// }

function alertValues(elementParametr) {
    console.log(elementParametr.value);
    console.log(elementParametr.className);
    }

var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
//alertFirstNameValues();
alertValues(firstNameEl);

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
//alertLastNameValues();
alertValues(lastNameEl);

var adressNameId = "adress-name";
var adressNameEl = document.getElementById(adressNameId);
//alertAdressNameValues();
alertValues(adressNameEl);

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
//alertHobiesNameValues();
alertValues(hobbiesEl);

debugger;
var avatarkaId = "avatarka";
var avatarkaEl = document.getElementById(avatarkaId);
var kartinaId = "kartina";
var kartinaEl = document.getElementById(kartinaId);




firstNameEl.value = "MAKSIMILIAN";
//alertFirstNameValues();


// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

lastNameEl.setAttribute("value", "August");


//console.log(lastNameEl.className);
lastNameEl.className = "error-input last-name default-input";

kartinaEl.src = "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/6/0/5/c/dfe9-0d75-4641-888c-bb114145ce09.jpg";
kartinaEl.title = "Kartinka";

lastNameEl.title = "fatal error";

citiesEl.value = "Moscow";

avatarkaEl.innerHTML = "Crashed <ol id='list'> <li>111</li> <li>222</li></ol>";
var listId = "list";
var numberlist = document.getElementById(listId);

//console.log(numberlist.innerHTML);