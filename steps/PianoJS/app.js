let btn = document.querySelector("button");
btn.classList.add("inBlock");

let spans = document.querySelectorAll("span");

let keyRange = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"];
let allAudio = document.getElementsByTagName("audio");

let audioObject = {};

for (let index = 0; index < allAudio.length; index++) {
    audioObject[keyRange[index]] = allAudio[index];
}

for (let span of Array.from(spans)) {
    span.classList.add("none");
}
keyRange.push(":");
async function holdShift(event) {
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
        await audioObject[";"].play();

        } else {
        await audioObject[event.key.toLowerCase()].play();
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