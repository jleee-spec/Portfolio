/* =========================
   Scroll Fade Animation
========================= */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        
        }

    });

}, {
    threshold: 0.15
});


fadeElements.forEach((element) => {
    observer.observe(element);
});


/* =========================
   Popup
========================= */

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupVideo = document.getElementById("popup-video");
const popupClose = document.querySelector(".popup-close");

const popupItems = document.querySelectorAll(".popup-item");


popupItems.forEach((item) => {

    item.addEventListener("click", () => {

        const type = item.dataset.type;

        popup.classList.add("active");

        if(type === "image"){

            popupVideo.pause();
            popupVideo.src = "";
        
            popupImage.src = item.src;
            popupImage.style.display = "block";
            popupVideo.style.display = "none";
        
        }

        if(type === "video"){

            const source = item.querySelector("source");
        
            popupVideo.src = source ? source.src : item.src;
        
            popupVideo.style.display = "block";
            popupImage.style.display = "none";
        
            popupVideo.play().catch(() => {});
        
        }

    });

});


/* 閉じる */

popupClose.addEventListener("click", closePopup);

popup.addEventListener("click", (e)=>{

    if(e.target === popup){
        closePopup();
    }

});

function closePopup(){

    popup.classList.remove("active");

    popupImage.src = "";

    popupVideo.pause();
    popupVideo.src = "";

}

/* =========================
   Hero Scroll Hide
========================= */

const hero = document.querySelector(".hero");
const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

    if(!hero || !scrollIndicator) return;

    if(window.scrollY > 100){

        hero.classList.add("hide");
        scrollIndicator.classList.add("scroll-hide");

    } else {

        hero.classList.remove("hide");
        scrollIndicator.classList.remove("scroll-hide");

    }

});