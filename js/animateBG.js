let pg = window.innerWidth;
let py = window.innerHeight;

let blok_sayisi = 60;

let bg = pg / blok_sayisi;

for (let i = 1; i <= 20000; i++) {
    let li = document.createElement("li");
    li.id = "blok" + i;
    li.className = "blok";
    li.style.width = bg + "px";
    li.style.height = bg + "px";
    document.getElementById("kutular").appendChild(li);
}

let kutularLi = document.querySelectorAll("ul#kutular li");

kutularLi.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        let index = Array.from(kutularLi).indexOf(element);
        element.style.background = "#000";
        setTimeout(function () {
            kutularLi[index].style.background = "#ffa900";
        }, 6000);
    });
});
