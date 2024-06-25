var allImgs = Array.from(document.querySelectorAll(".img-fluid"));
allImgs = Array.from(allImgs);
var blackBox = document.querySelector(".black-box");
var slider = document.querySelector(".black-box .slider");
var closeIcon = document.querySelector(".fa-times");
var arrowRight = document.querySelector(".fa-angle-right");
var arrowLeft = document.querySelector(".fa-angle-left");
var curIndex = 0;

for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener("click", showBlackBox)
}

function showBlackBox (eInfo) {
    blackBox.classList.replace("hide", "show");
    let clickedImg = eInfo.target;

    slider.style.cssText = `background-image: url(${clickedImg.src})`;

    curIndex = allImgs.indexOf(clickedImg)
    console.log(curIndex)
}

closeIcon.addEventListener("click", hideBlackBox)

function hideBlackBox () {
    blackBox.classList.replace("show", "hide");
}

arrowRight.addEventListener("click", getNextImg)

function getNextImg() {
    curIndex++;
    if(curIndex >= allImgs.length) {
        curIndex = 0;
    }
    var curImg = allImgs[curIndex];
    slider.style.cssText = `background-image: url(${curImg.src})`;

}

arrowLeft.addEventListener("click", getPrevImg)

function getPrevImg () {
    curIndex--;

    if(curIndex < 0) {
        curIndex = allImgs.length - 1;
    }
    var curImg = allImgs[curIndex];
    slider.style.cssText = `background-image: url(${curImg.src})`;
}

document.addEventListener("click", function(info) {
    if (info.target == blackBox) {
        hideBlackBox();
    }
})


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        getNextImg();
    } else if (event.key === "ArrowLeft") {
        getPrevImg();
    }
});