const btn_circle = document.getElementById("btn_circle");
const btn_rectangle = document.getElementById("btn_rectangle");
const btn_square = document.getElementById("btn_square");
const box =document.getElementById("box")


btn_circle.addEventListener("click", () => {
    box.style.borderradius ="100%"
    box.style.width = "340px"
    box.style.height ="340px"
})

btn_squar.addEventListener("click",() => {
    box.style.borderradius ="10px"
    box.style.width ="340px"
    box.style.height ="340px"

})
