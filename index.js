noButton = document.getElementById("clickNo");
yesButton = document.getElementById("clickYes");
count = 0

noButton.addEventListener("click",noClicked);
yesButton.addEventListener("click",yesClicked);


function yesClicked(){
    //Go to different page
    window.location.href = "page2.html";
}
function noClicked(){
    count = count + 1;
    switch (count) {
        case 1:
            //notification sent - unavailable try again
            window.alert("Button unavailable - try again.")
            break;
        case 2:
            // button becomes smaller and moves
            noButton.style.width = "1%";
            yesButton.style.width = "40%";
            yesButton.style.marginRight = "100px";
            noButton.style.left = "40%";
            noButton.style.fontSize = "3px";
            
            break;
        case 3:
            yesButton.style.marginRight = "0";
            yesButton.innerHTML = "PLEASEEEE!!"
            noButton.style.display = "none";
            break;
        default:
            break;
    }
}