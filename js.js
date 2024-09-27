let wordsList = [ "library", "mountain", "nebula","ocean", "piano", "quartz", "rainbow", "sunset", "turtle", "unicorn", "volcano", "wizard", "xylophone", "astronaut", "bicycle", "cactus", "dolphin","festival", "giraffe", "hamburger"];
let word = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();
let guess = word;
let displayword = [];
let guessWord = document.getElementById("guessWord");
let images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let currentIndex = 0;
let img = document.getElementById("image");
for (i = 0; i < guess.length; i++) {
    displayword.push("_");}
console.log(word);
guessWord.innerHTML = displayword.join(" ");
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        var letter = button.id.toUpperCase();
        console.log(letter + " " + word.includes(letter));
        if (guess.includes(letter)) {
            for (i = 0; i < guess.length; i++) {
                console.log(i);
                if (guess[i] === letter) {
                    displayword[i] = letter;
                    console.log(displayword[i]);
                }
            }
        }
        else {
            changeImage();
        }
        guessWord.innerHTML = displayword.join(" ");
        if (!displayword.includes("_")) {
            setTimeout(function () {
                alert("win");
            }, 100);
        }
        button.disabled = true;
    })
});
function changeImage() {
    img.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    //    console.log(currentIndex);
    if (currentIndex === 0) {
        setTimeout(function () {
            alert("lose");
        }, 100);
    }
}