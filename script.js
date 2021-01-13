let sec = 6;
let min = 0;

function countdown() {
	sec--;


	if (sec == -01) {
    sec = 59; min = min - 1;
  } else {
    min = min;
  } if (sec <= 9) {
    sec="0" + sec;
  }

	let time = (min <= 9 ? "0" +min : min) + ":" + sec;
	if (document.getElementById) {
    timer.innerHTML = time;
  }
	const inter = setTimeout("countdown()", 1000);

	if (min == '00' && sec == '00') {
		clearInterval(inter);

    timer.innerHTML="Start!";

    move();
    changeImgRocket();

	}
};

function move () {
  document.addEventListener('mousemove', mouseEvent => {
    rocket_id.style.left = mouseEvent.pageX + "px";
    rocket_id.style.top = mouseEvent.pageY + "px";
  });
};

function changeImgRocket() {
  document.getElementById("rocket_id").src="rocket2.png";
}

function changeImgButton() {
  document.getElementById("button_id").src="button2.png";
}