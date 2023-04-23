var clickMeButton = document.getElementById("click-me");
var level = 1;
var timeout = 500;
var click = 0;

if (clickMeButton) {
  clickMeButton.addEventListener("click", changeLevel);
  clickMeButton.addEventListener("mouseover", moveToButton);
}

function moveToButton() {
  clickMeButton.style.marginTop = Math.random() * 500 + "px";
  clickMeButton.style.marginLeft = Math.random() * 500 + "px";
}
function changeLevel() {
  click++;
  if (click === 3) {
    alert("You are the winner! You can go next Level " + level + "!");
    level++;
    timeout -= 100;
    click = 0;
    if (level > 6) {
      alert("Congratulations, you won the game!");
    } else {
      setTimeout(function () {
        moveToButton();
      }, timeout);
    }
  }
}
