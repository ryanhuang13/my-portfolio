const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("modal");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".lightboxable").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    })
})

closeBtn.onclick = () => {
    lightbox.style.display = "none";
}

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
}