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

	time = (min <= 9 ? "0" +min : min) + ":" + sec;
	if (document.getElementById) {
    timer.innerHTML = time;
  }
	inter = setTimeout("countdown()", 1000);

	if (min == '00' && sec == '00') {
		sec = "00" ;
		clearInterval(inter);

    timer.innerHTML="Start!";
    move();
	}
};


const move = () => {
  document.addEventListener('mousemove', e => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  });
}
;