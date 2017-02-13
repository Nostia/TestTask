function showPopup() {
    var popup = document.getElementById("myPopup")
    popup.classList.add("show")
    document.getElementById("overlay").classList.add("shaded")
}

function hidePopup() {
    var popup = document.getElementById("myPopup")
    popup.classList.remove("show")
    document.getElementById("overlay").classList.remove("shaded")
}
