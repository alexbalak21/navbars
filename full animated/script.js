const dropdown = document.querySelector(".dropdown")
const dropdown_activator = document.querySelector(".dropdown-activator")
const chevron = document.querySelector(".dropdown-activator i")
dropdown_activator.addEventListener("click", open_dropdown)

function open_dropdown() {
    dropdown.classList.toggle("open")
    if (chevron.classList.contains("fa-caret-down")) chevron.classList.replace("fa-caret-down", "fa-minus")
    else chevron.classList.replace("fa-minus", "fa-caret-down")
}
