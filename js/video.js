var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

	document.querySelector("#play").addEventListener("click", function() {
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		video.play();
	});

	document.querySelector("slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
	});

	document.querySelector("mute").addEventListener("click", function() {
		if (video.muted == true) {
			//console log: unmute
			video.muted = false;
			this.innerHTML = "Mute";
		}
		else {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	});

	document.querySelector("#volumeSlider").addEventListener("change", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});

});



