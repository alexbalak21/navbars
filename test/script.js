function turn_red() {
    this.style.color = "red"
}

function chage() {
    if (this.innerText == "▼") this.innerHTML = "&#8722;"
    else this.innerHTML = "&#x25bc;"
    console.log(this.innerHTML)
}
