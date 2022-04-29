//find elements
var showPrevBtn = document.getElementById("show-prev-btn");
var showNextBtn = document.getElementById("show-next-btn");
var slideImage = document.getElementById("slide-img");

//subscribe events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

// create images array
var imagesUrls = [];
imagesUrls.push("https://undeadwalking.com/files/2016/04/FTWD_307_RF_0315_1015-RT.jpg");
imagesUrls.push("https://miro.medium.com/max/1200/1*1Dpg2prX5bGIA6ONeXDdlA.jpeg");
imagesUrls.push("https://www.tvinsider.com/wp-content/uploads/2020/07/fear-the-walking-dead-amc.jpg");
imagesUrls.push("https://miro.medium.com/max/1146/1*GzbRpNfrUekyiEOVCqsppg.png");

var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];

    // disabled btn when need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
    if (currentImageIndex === 0) {
        showNextBtn.disabled = false;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    // disabled btn when need
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showPrevBtn.disabled = false;
    }

}