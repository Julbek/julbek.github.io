
//Variables

const right_side = document.querySelector(".right-side")
const gallery_img = document.querySelectorAll(".gallery-img")
const view_img = document.querySelector(".view-img")
const info = document.querySelector(".info-wrap")


//DOM Behavior Functions

function displayImg (img_path) {
    view_img.src = img_path
}

function info_handler() {
    if (!info.classList.contains("info-active")) {
        info.classList.add("info-active")
        right_side.classList.add("lock-events")

    } else {
        info.classList.remove("info-active")
        right_side.classList.remove("lock-events")
    }
}
