function Dog () {
    this.myname = "Laika";
    this.voice = function () {
        console.log("Hey");
    }
}


var dog = new Dog("Laika");
var dog2 = new Dog("Bobik");
var dog3 = {
    myname: name,
    voice: function() {
        console.log("Hey");
    }
};