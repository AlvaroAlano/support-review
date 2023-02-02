const primaryDiv = document.querySelector(".primary")
const secundaryDiv = document.querySelector("#secundary--div")
const submit = document.querySelector(".submit")
const arrow = document.querySelector(".arrow")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".number")

submit.addEventListener("click", () => {
  secundaryDiv.classList.remove("hidden")
  primaryDiv.style.display = "none"
})

arrow.addEventListener("click", () => {
  secundaryDiv.classList.add("hidden")
  primaryDiv.style.display = "block"
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = " "+rate.innerHTML+" "
  })
})