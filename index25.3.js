var sliderFactory = {
    createNewSlider: function () {
        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
        
            showNextBtn: null,
            showPrevBtn: null,
            slideImage: null,
        
            start: function (elId) {
                var that = this;
        
                var elSelector = "#" + "elId";
                var el = document.querySelector(elSelector);
        
                this.showPrevBtn = el.querySelector(".show-prev-btn");
                this.showNextBtn = el.querySelector(".show-next-btn");
                this.slideImage = el.querySelector(".slide-img");
        
                this.showPrevBtn.addEventListener("click", function (e) {
                    that.onShowPrevBtnClick(e);
                });
        
                this.showNextBtn.addEventListener("click", function (e) {
                    that.onShowNextBtnClick(e);
                });
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
                this.showNextBtn.disabled = false;
                // disabled btn when need
                if (this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            },
        
            onShowNextBtnClick: function (e) {
                this.currentImageIndex++;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;
                // disabled btn when need
                if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                    this.showNextBtn.disabled = true;
                }
            }
        
        };
        
        return newSlider;
    }
};



