document.addEventListener('DOMContentLoaded', function() {

	var turntable = document.getElementById('turntable'),
		turntableArm = document.getElementById('turntable-arm'),
		turntableBtn = document.getElementById('turntable-btn'),
		speaker = document.getElementById('speaker');

	var play = function() {
		speaker.play();
	};

	var stop = function() {
		speaker.pause();
		speaker.currentTime = 0;
	};

	turntableBtn.addEventListener('click', function(e) {
		e.preventDefault();
		turntable.classList.toggle('started');
		if (turntable.classList.contains('started') ) {
			turntableBtn.innerHTML = 'stop';
			turntableArm.addEventListener('transitionend', play);
		} else {
			turntableBtn.innerHTML = 'play';
			turntableArm.removeEventListener('transitionend', play);
			stop();
		}
	});
	
});
