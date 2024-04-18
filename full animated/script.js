function open_dropdown(li, chevron) {
    li.classList.toggle("open")
    if (chevron.classList.contains("fa-caret-down")) chevron.classList.replace("fa-caret-down", "fa-minus")
    else chevron.classList.replace("fa-minus", "fa-caret-down")
}

const lis = document.querySelectorAll("li")
lis.forEach((li) => {
    if (li.querySelector("ul")) {
        const dropdown_activator = document.createElement("span")
        dropdown_activator.classList.add("dropdown-activator")
        const chevron = document.createElement("i")
        chevron.classList.add("fa-solid", "fa-caret-down")
        dropdown_activator.appendChild(chevron)
        li.querySelector("a").after(dropdown_activator)
        dropdown_activator.addEventListener("click", () => open_dropdown(li, chevron))
    }
})
