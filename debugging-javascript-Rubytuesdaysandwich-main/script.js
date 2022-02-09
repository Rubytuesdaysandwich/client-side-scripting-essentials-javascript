let clickBox = document.querySelectorAll(".item-img"); // get image boxes to be clicked on
let item = document.querySelector(".items img"); // get bug image

// add a click event listener to each image box
for (let i = 0; i < clickBox.length; i++) {
  clickBox[i].addEventListener("click", function () {
    //warning given is ok

    //grab values for left edger of bug and new parent element
    let newParentOffset = this.offsetLeft + 10; //account for 10px of padding-left
    let itemOffset = item.offsetLeft;

    let endPos = newParentOffset - itemOffset;

    if (newParentOffset > itemOffset) {
      if (item.classList.contains("flipped")) {
        item.classList.remove("flipped");
      }
      moveRight(item, 0, endPos, this);
    } else if (newParentOffset < itemOffset) {
      item.classList.add("flipped");
      moveLeft(item, 0, endPos, this);
    } else {
      toggleItem(item);
      go();
    }
  });
}
function moveRight(item, from, to, newParent) {
  var oldParent = item.parentElement;

  if (from < to) {
    var box = item;
    box.style.left = from + "px";
    setTimeout(function () {
      moveRight(item, from + 10, to, newParent);
    }, 1);
  } else {
    moveToNewParent(item, oldParent, newParent);
  }
}

function moveLeft(item, from, to, newParent) {
  if (from > to) {
    var box = item;
    box.style.left = from + "px";
    setTimeout(function () {
      moveLeft(item, from - 10, to, newParent);
    }, 1);
  } else {
    moveToNewParent(item, item.parentElement, newParent);
  }
}

function moveToNewParent(item, oldParent, newParent) {
  // move the element to the new parent
  oldParent.removeChild(item);
  item.removeAttribute("style");
  newParent.appendChild(item);
}

function toggleItem(item) {
  console.log("toggle");

  if (item.hasAttribute("class")) {
    item.removeAttribute("class");
  } else {
    item.classList.add("flipped");
  }
}
// this was brought over from the index.html
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".items img").src = "unnamed.gif";
  document.querySelector(".items img").classList.remove("space");
});

function go() {
  if (document.querySelector(".items img").classList.contains("space")) {
    var videoElement = document.createElement("video");
    videoElement.setAttribute("autoplay", "");

    var sourceMP4 = document.createElement("source");
    sourceMP4.type = "audio/mpeg";
    sourceMP4.src = "http://www.nyan.cat/music/original.mp3";
    videoElement.appendChild(sourceMP4);
    document.body.appendChild(videoElement);
  } else {
    let thing = new Audio("http://www.nyan.cat/music/original.mp3");
    thing.play();
  }
}
