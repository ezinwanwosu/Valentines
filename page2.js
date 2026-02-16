letter = document.getElementById("letter-image");
openLetter = document.getElementById("letterGif");
paper = document.getElementById("letter-paper");
letterText = document.getElementById("letterText");

nextBtn = document.getElementById("next");
letter.addEventListener("click", isClicked);
nextBtn.addEventListener("click",doneBtn);

function isClicked(){
    letter.style.display = "none";
    letterText.style.display = "none";
    openLetter.style.display = "block";
    setTimeout(() => {
        openLetter.style.display = "none";
        paper.style.display = "block";
        nextBtn.style.display = "block";
    },1500);

}
function doneBtn(){
    window.location.href = "final.html";
}