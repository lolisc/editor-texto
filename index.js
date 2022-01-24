function botaoclick() {
    const doc = document.getElementById("texto").value
    localStorage.setItem("text", doc)
}
document.getElementById("botao").addEventListener("click", botaoclick)
document.getElementById("texto").value = localStorage.getItem("text")