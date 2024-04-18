function turn_red() {
    this.classList.toggle("red")
}

const item = document.querySelector("h1")
item.addEventListener("click", turn_red)
