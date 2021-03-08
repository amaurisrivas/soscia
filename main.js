//crear un reloj
var myVar = setInterval(myTimer, 1000);
     function myTimer() {
     var d = new Date();
     var t = d.toLocaleTimeString();
     document.getElementById("archivo").innerHTML = t;
}
setInterval(function() {
   dograce();
},50000);setInterval(function() {
   dograce();
},50000);

function dograce(){
    var vid = document.getElementById("race"); 
    let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let str = num.toString().padStart(3, "0")
    let archivo = "./dog6/rb6d_" + str + ".mp4";
    document.getElementById("carrera").innerHTML = archivo;
    vid.setAttribute('src', archivo);	      
    vid.autoplay = true;
    vid.load();
    vid.play();
};


