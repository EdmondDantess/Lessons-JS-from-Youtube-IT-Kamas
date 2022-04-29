 var car1 = {
    name: "Reno",
    isTurnOn: false,
    speed: 0,
    engine: {
        v:1.6,
        horsesPower: 120,
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 5;
    }
 };

 window.alert(car1.speed);