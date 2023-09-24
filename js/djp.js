window.onload = function(){
	var audio = document.getElementById('mu1');
	var audio = document.getElementById('mu2');
		audio.pause();
}
function play1(){
	var audio = document.getElementById('mu1');
	if(audio.paused){
		audio.play();
		document.getElementById()
	}else{
		audio.pause();
		audio.currentTime = 0;
	}
}
function play2(){
    var audio = document.getElementById('mu2');
    if(audio.paused){
        audio.play();
        document.getElementById()
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}