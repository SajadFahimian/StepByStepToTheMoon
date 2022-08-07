let btn = document.querySelector("button");
btn.classList.add("inBlock");

let spans = document.querySelectorAll("span");

let keyRange = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"];

let audioObject = {};

for (let index = 0; index < keyRange.length; index++) {
    audioObject[keyRange[index]] = new Audio(`./audio/${index}.wav`);
}

for (let span of Array.from(spans)) {
    span.classList.add("none");
}
keyRange.push(":");
function holdShift(event) {
    if (event.key == "Shift") {
        for (let span of Array.from(spans)) {
            span.classList.remove("none");
            span.classList.add("inBlock");
        }
        btn.classList.remove("inBlock");
        btn.classList.add("none");

    }
    if (keyRange.indexOf(event.key.toLowerCase()) != -1) {
        if (event.key == ":") {
        audioObject[";"].load();
        audioObject[";"].play();

        } else {
            audioObject[event.key.toLowerCase()].load();
            audioObject[event.key.toLowerCase()].play();
        }

    }
    
}
function leftShift(event) {
    if (event.key == "Shift") {
        for (let span of Array.from(spans)) {
            span.classList.remove("inBlock");
            span.classList.add("none");
        }
        btn.classList.remove("none");
        
        btn.classList.add("inBlock");


    }
    
}
document.addEventListener("keydown", holdShift);
document.addEventListener("keyup", leftShift);