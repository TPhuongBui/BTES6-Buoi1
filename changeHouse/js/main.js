const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let showColor = document.getElementById("colorContainer");
loadColorPick = (() => {
    for (let i = 0; i < colorList.length; i++)
        // if(i == 0){
        //     document.getElementById("colorContainer").innerHTML += "<button class='color-button " + colorList[i] + " active'></button>"
        // }else{
        //     document.getElementById("colorContainer").innerHTML += "<button class='color-button " + colorList[i] + "'></button>"
        // }
        showColor.innerHTML += 0 == i ? "<button class='color-button " + colorList[i] + " active'></button>" : "<button class='color-button " + colorList[i] + "'></button>"
}
)
loadColorPick();


let colorPicker = document.getElementsByClassName("color-button");
let house = document.getElementById("house");

for (let i = 0; i < colorPicker.length; i++)
    colorPicker[i].addEventListener("click", function () {
        changeColor(colorList[i], i)
    });

changeColor = ((i, index) => {
    for (let i = 0; i < colorPicker.length; i++)
        colorPicker[i].classList.remove("active");
        colorPicker[index].classList.add("active"),
        house.className = "house " + i
});