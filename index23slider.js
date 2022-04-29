var slider1 = {
    currentImageIndex: 0,
    imagesUrls: [],
    showPrevBtn: document.getElementById("show-prev-btn"),
    showNextBtn: document.getElementById("show-next-btn"),
    slideImage: document.getElementById("slide-img"),

    start: function () {
        //subscribe events
        this.showPrevBtn.addEventListener("click", this.onShowPrevBtnClick);
        this.showNextBtn.addEventListener("click", this.onShowNextBtnClick);

        // create images array

        this.imagesUrls.push("https://undeadwalking.com/files/2016/04/FTWD_307_RF_0315_1015-RT.jpg");
        this.imagesUrls.push("https://miro.medium.com/max/1200/1*1Dpg2prX5bGIA6ONeXDdlA.jpeg");
        this.imagesUrls.push("https://www.tvinsider.com/wp-content/uploads/2020/07/fear-the-walking-dead-amc.jpg");
        this.imagesUrls.push("https://miro.medium.com/max/1146/1*GzbRpNfrUekyiEOVCqsppg.png");


        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },
        //functions definitions
        onShowPrevBtnClick: function (e) {
            this.currentImageIndex--;
            this.slideImage.src = this.imagesUrls[this.currentImageIndex];
            // disabled btn when need
            if (this.currentImageIndex === 0) {
                this.showPrevBtn.disabled = true;
            }
            if (this.currentImageIndex === 0) {
                this.showNextBtn.disabled = false;
            }
        },

        onShowNextBtnClick: function (e) {
            this.currentImageIndex++;
            this.slideImage.src = this.imagesUrls[this.currentImageIndex];
            // disabled btn when need
            if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                this.showNextBtn.disabled = true;
            }
            if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                this.showPrevBtn.disabled = false;
            }

        }
    }