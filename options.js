
var slider = document.getElementById("myRange");


var output = document.querySelector(".slider-value");

output.textContent = slider.value;


slider.addEventListener("input", function() {
    output.textContent = this.value;
});


