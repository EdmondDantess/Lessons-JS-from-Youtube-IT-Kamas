var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
var adressNameId = "adress-name";
var adressNameEl = document.getElementById(adressNameId);
var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
var avatarkaId = "avatarka";
var avatarkaEl = document.getElementById(avatarkaId);
var kartinaId = "kartina";
var kartinaEl = document.getElementById(kartinaId);

debugger;
function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(adressNameEl.value);
    console.log(citiesEl.value);
 }

 
firstNameEl.value = "MAKSIMILIAN";


alertValue();
alertValue();
alertValue();

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