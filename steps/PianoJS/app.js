let btn = document.querySelector("button");

let spans = document.querySelectorAll("span");

let keyRange = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"];
let allAudio = document.getElementsByTagName("audio");

let audioObject = {};

for (let index = 0; index < allAudio.length; index++) {
    audioObject[keyRange[index]] = allAudio[index];
}

for (let span of Array.from(spans)) {
    span.style.display = "none";
}
keyRange.push(":");
async function holdShift(event) {
    if (event.key == "Shift") {
        for (let span of Array.from(spans)) {
            span.style.display = "inline-block";
        }
        btn.style.display = "none";

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
            span.style.display = "none";
        }
        
        btn.style.display = "inline-block";


    }
    
}
document.addEventListener("keydown", holdShift);
document.addEventListener("keyup", leftShift);